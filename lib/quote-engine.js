// Adaptado del cotizador facilitado. Snapshot 2026-09-21.
import DATA from "./prices-data.js";
export function validateCase(cp,ages){return /^[0-9]{5}$/.test(cp)&&!!DATA.cp_map[cp.slice(0,2)]&&Array.isArray(ages)&&ages.length>=1&&ages.length<=5&&ages.every(x=>Number.isInteger(x)&&x>=0&&x<=120);}
export function calculateQuotes(input,promos=[]){
 if(!validateCase(input.cp,input.ages))throw new Error("Introduce un CP español válido y entre 1 y 5 edades enteras de 0 a 120 años.");
 if(!["mensual","trimestral","semestral","anual"].includes(input.pay))throw new Error("Forma de pago no válida");
 if(!Number.isInteger(input.discount)||input.discount<0||input.discount>5)throw new Error("Descuento no válido");
 if(!/^\d{4}-\d{2}-\d{2}$/.test(input.effectiveDate))throw new Error("Indica la fecha de efecto");
 const zone=DATA.cp_map[input.cp.slice(0,2)];
 const state={...input,zona:zone.zona===0?1:zone.zona};
 const PAY_DISCOUNT={mensual:0,trimestral:2,semestral:4,anual:6};
 function loadActivePromosFiltered(date){return promos.filter(p=>p.active&&(!p.startDate||date>=p.startDate)&&(!p.endDate||date<=p.endDate));}
 function loadActiveCampaign(){return loadActivePromosFiltered(state.effectiveDate).find(p=>p.type==="campaign"&&p.campaign)||null;}
function defaultProductOrder() {
      // SOLO mostramos los 11 productos de la tabla principal del Excel
      const ORDER_MAIN = [
        "Go",
        "Plena Vital",
        "Plena Total Vital",
        "Adeslas Plena",
        "Adeslas Plena Plus",
        "Adeslas Plena Total",
        "Adeslas Plena Extra 150",
        "Adeslas Seniors",
        "Adeslas Plena Total Seniors",
        "Adeslas NIF",
        "Adeslas Pymes TOTAL",
        "Welcome (Extranjería)"
      ];
      return ORDER_MAIN;
    }
function isGOProduct(productName) {
      const s = String(productName || "").trim().toLowerCase();
      return s === "go" || s.startsWith("go ");
    }
function isWelcome(productName) {
      return String(productName || "").toLowerCase().includes("welcome");
    }
function getProductConstraints(product) {
      // Lookup the base rules from DATA.product_rules
      let rules = DATA.product_rules[product];
      if (!rules) {
        // Fallback or variants
        if (product.includes("Extra Negocios NIF")) {
          rules = DATA.product_rules["Extra Negocios NIF"];
        } else {
          rules = {
            age_min: 0, age_max: 120,
            multi_discount: null,
            annual_discount: 0,
            payment: "any",
            ratio_rule: null,
            k6_applies: false,
            pensionista_excluded: false,
            pensionista_discount: false
          };
        }
      }

      const n = state.ages.length;
      let dTotal = 0;
      // Regla campaña Junio: Plena Total / Plena Total Vital con 3+ aseg → no descontar por nº aseg
      const _pnLow2 = (product || "").toLowerCase();
      const _skipMulti = state.pay === "mensual" && !!loadActiveCampaign() && _pnLow2.includes("plena total") && !_pnLow2.includes("seniors") && n >= 3;
      if (rules.multi_discount && !_skipMulti) {
        if (rules.multi_discount.threshold) {
          if (n >= rules.multi_discount.threshold) {
            dTotal = Math.round((1 - rules.multi_discount.factor) * 100);
          }
        } else if (rules.multi_discount.graduated) {
          for (const level of rules.multi_discount.graduated) {
            if (n >= level.min_count) {
              dTotal = Math.round((1 - level.factor) * 100);
              break;
            }
          }
        }
      }

      return {
        minAge: rules.age_min,
        maxAge: rules.age_max,
        onlyMonthly: rules.payment === "monthly_only",
        autoNDisc: dTotal,
        label: product,
        rawRules: rules
      };
    }
function applyDiscount(value, discountPct) {
      if (discountPct === 0) return value;
      return value * (1 - (discountPct / 100));
    }
function roundPrice(val) {
      return Math.round((val + Number.EPSILON) * 100) / 100;
    }
function getPrice(base, zone, age) {
      const key = base + " " + zone;
      const rows = DATA.price_table[key] || null;
      if (!rows) return "No asegurable";
      for (const r of rows) {
        if (age >= r.min && age <= r.max) return r.price;
      }
      return "No asegurable";
    }
function isProductAllowed(productName, ages) {
      if (!ages || ages.length === 0) return true;
      const validAges = ages.filter(a => typeof a === 'number');
      const countIf = (predicate) => validAges.filter(predicate).length;

      const sumLogic = (maxAgeNormal, penaltyAge) => {
        let sum = 0;
        for (let age of validAges) {
          if (age > penaltyAge) sum += -3;
          else if (age > maxAgeNormal) sum += 0;
          else sum += 1;
        }
        if (sum < 0) return { ok: false, reason: `Apto si hay 3 menores de ${maxAgeNormal + 1} años por cada mayor de ${penaltyAge}` };
        return { ok: true };
      };

      const ratioLogic = (triggerAge1, triggerAge2, youngAge) => {
        if (countIf(a => a > triggerAge1) > 0) {
          if (countIf(a => a < youngAge) < 3 * countIf(a => a > triggerAge2)) {
            return { ok: false, reason: `Apto si hay 3 menores de ${youngAge} años por cada mayor de ${triggerAge2}` };
          }
        }
        return { ok: true };
      };

      const n = productName.toLowerCase();
      if (n.includes("go")) return sumLogic(59, 70);
      if (n.includes("plena plus") || n === "adeslas plena" || n === "plena" || n === "plena 2") return sumLogic(59, 70);
      if (n.includes("pymes total")) return sumLogic(59, 67);
      if (n === "adeslas plena total" || n === "plena total" || n === "plena total 2") return sumLogic(59, 62);

      if (n === "plena vital" || n === "adeslas plena vital") return ratioLogic(70, 70, 60);
      if (n.includes("cif") && !n.includes("extra")) return ratioLogic(67, 67, 60);
      if (n.includes("empresas") && !n.includes("extra")) return ratioLogic(67, 67, 60);
      if (n.includes("extra empresas")) return ratioLogic(67, 67, 60);
      if (n.includes("extra negocios nif")) return ratioLogic(70, 70, 60);
      if (n.includes("plena extra 150")) return ratioLogic(64, 64, 60);
      if (n.includes("plena total vital")) return ratioLogic(62, 62, 60);

      if (n.includes("negocios nif") || (n.includes("nif") && !n.includes("extra"))) {
        if (countIf(a => a > 70) > 0) {
          if (countIf(a => a <= 60) < 3 * countIf(a => a > 70)) {
            return { ok: false, reason: "Apto si hay 3 menores de 60 por cada mayor de 70 años" };
          }
        }
        return { ok: true };
      }

      if (n.includes("extra negocios cif") || n.includes("extra cif")) {
        if (validAges.length > 4) return { ok: false, reason: "Máximo 4 personas en total" };
        return { ok: true };
      }

      const isSeniorsTotal = n.includes("seniors total") || n.includes("plena total seniors");
      const isSeniorsNormal = n.includes("seniors") && !isSeniorsTotal;

      if (isSeniorsNormal) {
        let cUnder50 = countIf(a => a < 50);
        if (cUnder50 > 0) return { ok: false, reason: "No apto: Seniors no permite menores de 50 años" };
        if (countIf(a => a > 84) > 0) return { ok: false, reason: "Edad máxima permitida: 84 años" };

        let c50 = countIf(a => a >= 50), c54 = countIf(a => a > 54), c55 = countIf(a => a >= 55), cUnder55 = countIf(a => a < 55);
        if (c55 === 0) return { ok: false, reason: "Apto si hay al menos una persona con 55 años o más" };
        if (cUnder55 > 1) return { ok: false, reason: "Solo se permite un acompañante menor de 55 años" };

        return { ok: true };
      }

      if (isSeniorsTotal) {
        if (countIf(a => a < 60) > 0) return { ok: false, reason: "No apto: Seniors Total no permite menores de 60 años" };
        if (countIf(a => a > 84) > 0) return { ok: false, reason: "Edad máxima permitida: 84 años" };

        let has63plus = countIf(a => a >= 63 && a <= 84) > 0;
        if (!has63plus) {
          return { ok: false, reason: "Seniors Total requiere al menos un asegurado entre 63 y 84 años" };
        }
        return { ok: true };
      }

      return { ok: true };
    }
function getProductAgeRequirement(productName) {
      const n = productName.toLowerCase();
      if (n.includes("go")) return "Apto si hay 3 menores de 60 años por cada mayor de 70";
      if (n.includes("plena plus") || n === "adeslas plena" || n === "plena" || n === "plena 2") return "Apto si hay 3 menores de 60 años por cada mayor de 70";
      if (n.includes("pymes total")) return "Apto si hay 3 menores de 60 años por cada mayor de 67";
      if (n === "adeslas plena total" || n === "plena total" || n === "plena total 2") return "Apto si hay 3 menores de 60 años por cada mayor de 62";
      if (n === "plena vital" || n === "adeslas plena vital") return "Apto si hay 3 menores de 60 años por cada mayor de 70";
      if (n.includes("cif") && !n.includes("extra")) return "Apto si hay 3 menores de 60 años por cada mayor de 67";
      if (n.includes("empresas") && !n.includes("extra")) return "Apto si hay 3 menores de 60 años por cada mayor de 67";
      if (n.includes("extra empresas")) return "Apto si hay 3 menores de 60 años por cada mayor de 67";
      if (n.includes("extra negocios nif")) return "Apto si hay 3 menores de 60 años por cada mayor de 70";
      if (n.includes("plena extra 150")) return "Apto si hay 3 menores de 60 años por cada mayor de 64";
      if (n.includes("plena total vital")) return "Apto si hay 3 menores de 60 años por cada mayor de 62";
      if (n.includes("negocios nif") || (n.includes("nif") && !n.includes("extra"))) return "Apto si hay 3 menores de 60 por cada mayor de 70 años";
      if (n.includes("extra negocios cif") || n.includes("extra cif")) return "Máximo 4 personas en total";
      const isSeniorsTotal = n.includes("seniors total") || n.includes("plena total seniors");
      const isSeniorsNormal = n.includes("seniors") && !isSeniorsTotal;
      if (isSeniorsNormal) return "Requiere al menos una persona con 55 años o más";
      if (isSeniorsTotal) return "Solo asegurados entre 60 y 84 años, al menos uno entre 63–84";
      return null;
    }
function computeProduct(product, state) {
      if (!state.ages.length) {
        return { ok: false, reason: "Faltan datos", product };
      }

      const numAseguradosTotal = state.ages.length;
      const constraints = getProductConstraints(product);
      const rules = constraints.rawRules;

      const k6_val = (DATA.discounts && DATA.discounts.k6 !== undefined) ? DATA.discounts.k6 : 0;
      const k8_val = (DATA.discounts && DATA.discounts.k8 !== undefined) ? DATA.discounts.k8 : 0;
      const pensionista = (DATA.discounts && DATA.discounts.pensionista) || false;

      if (pensionista && rules.pensionista_excluded) {
        return { ok: false, reason: "Producto no disponible para pensionistas", product, constraints };
      }

      let productLookup = rules.base_name || product;
      if (product === "Adeslas Extra NIF") {
        productLookup = (numAseguradosTotal <= 2) ? "Extra Negocios NIF_1_2" : "Extra Negocios NIF_3_plus";
      }

      // Las reglas complejas (ratio, senior companion) ya se avalúan en isProductAllowed.


      // 1. FACTOR MULTI-ASEGURADO (calco Excel)
      let multiFactor = 1.0;
      // Regla campaña Junio 2026: Plena Total / Plena Total Vital con 3+ aseg.
      // NO se aplica el descuento por nº de asegurados (queda anulado por el 25% de la campaña)
      const _pnLow = (product || "").toLowerCase();
      const _isPlenaTotalNoSeniors = _pnLow.includes("plena total") && !_pnLow.includes("seniors");
      const _skipMultiForCampaign = state.pay === "mensual" && !!loadActiveCampaign() && _isPlenaTotalNoSeniors && numAseguradosTotal >= 3;
      if (rules.multi_discount && !_skipMultiForCampaign) {
        if (rules.multi_discount.threshold && numAseguradosTotal >= rules.multi_discount.threshold) {
          multiFactor = rules.multi_discount.factor;
        } else if (rules.multi_discount.graduated) {
          for (const level of rules.multi_discount.graduated) {
            if (numAseguradosTotal >= level.min_count) {
              multiFactor = level.factor;
              break;
            }
          }
        }
      }

      let pensFactor = 1.0;
      if (pensionista && rules.pensionista_discount) {
        pensFactor = 0.94;
      }

      let k6Factor = 1.0;
      if (rules.k6_applies && k6_val > 0) {
        k6Factor = (1 - k6_val);
      }

      // 2. CÁLCULO POR PERSONA
      let totalSinVal = 0;
      let totalConVal = 0;
      const breakdown = [];
      const dentalKey = String(Math.min(numAseguradosTotal, 8));
      const dental_pp = (DATA.dental_per_person && DATA.dental_per_person[dentalKey]) || 0;
      // Dental total: a partir de 8 personas, siempre se usa el total de 8
      const dental_total_for_group = (DATA.dental_total && DATA.dental_total[dentalKey]) || 0;

      const allowedCheck = isProductAllowed(product, state.ages);
      if (!allowedCheck.ok) {
        return { ok: false, reason: allowedCheck.reason || "No cumple las reglas de contratación", product, constraints };
      }

      for (const age of state.ages) {
        const basePrice = getPrice(productLookup, state.zona, age);
        if (basePrice === "No asegurable" || !Number.isFinite(basePrice) || basePrice <= 0) return { ok:false, product, reason:"Sin tarifa para uno o más asegurados; solicitar cotización." }; const base = basePrice;

        // Precio individual con descuentos
        const discounted = base * multiFactor * pensFactor * k6Factor;

        let sinLine = discounted;
        let conLine = discounted;

        totalSinVal += sinLine;
        totalConVal += conLine;
        breakdown.push({ age, base, multi: multiFactor, pens: pensFactor, k6: k6Factor });
      }

      if (totalSinVal === 0) {
        return { ok: false, reason: "No hay asegurables en este rango de edad", product, constraints };
      }

      // Añadir dental al total (no por persona) para modos per_person_inherited y per_person_direct
      if (rules.dental_mode === "per_person_inherited" || rules.dental_mode === "per_person_direct") {
        totalConVal += dental_total_for_group;
      }

      // 3. DESCUENTOS AL TOTAL
      let finalSin = totalSinVal;
      let finalCon = totalConVal;


      // K8 solo aplica a productos que lo tienen explícitamente
      if (rules.k8_applies && k8_val > 0) {
        let actualK8 = k8_val;
        if (rules.k8_applies === "double") {
          actualK8 = k8_val * 2;
        }
        finalSin *= (1 - actualK8);
        finalCon *= (1 - actualK8);
      }


      // Descuento de pago (Welcome/anual_only: precio ya es final anual, sin descuento de pago)
      const payDisc = rules.annual_only ? 0 : (PAY_DISCOUNT[state.pay] || 0);
      finalSin = applyDiscount(finalSin, payDisc);
      finalCon = applyDiscount(finalCon, payDisc);

      // --- CAPTURAR VALORES SIN DESCUENTO MANUAL ---
      // Si el dental se añade al final (dental_mode === "total_at_end"),
      // el valor "sin descuento manual" de CON dental debe incluirlo ya.
      let finalSinNoManual = finalSin;
      let finalConNoManual = (rules.dental_mode === "total_at_end") 
                               ? (finalSinNoManual + dental_total_for_group)
                               : finalCon;

      // Productos "only_con_dental" (Total, Pymes): sin dental no se muestra
      const isOnlyConDental = !!rules.only_con_dental;

      // Descuento manual (comisión) — debe ir después de declarar isOnlyConDental
      let effectiveDiscount = 0;
      let annualLoss = 0;
      if (!isGOProduct(product) && !rules.annual_only) {
        effectiveDiscount = state.discount;

        if (effectiveDiscount > 0) {
          // La base de la pérdida es el precio antes de aplicar el descuento manual
          const lossBase = isOnlyConDental ? finalSin : finalCon;
          annualLoss = lossBase * (effectiveDiscount / 100) * 12;
        }
        finalSin = applyDiscount(finalSin, effectiveDiscount);
        finalCon = applyDiscount(finalCon, effectiveDiscount);
      }

      // === CAMPAÑA (Promo Junio 2026) — descuento adicional aplicado al precio ===
      // SOLO se aplica en pago MENSUAL. Trimestral / Semestral / Anual NO tienen promo ni regalos.
      const campaign = (state.pay === "mensual" && !rules.annual_only) ? loadActiveCampaign() : null;
      let campaignDiscSin = 0, campaignDiscCon = 0, campaignRuleSin = null, campaignRuleCon = null;
      if (campaign) {
        campaignRuleSin = getCampaignRule(campaign, product, numAseguradosTotal, false, state.pay);
        campaignRuleCon = getCampaignRule(campaign, product, numAseguradosTotal, true,  state.pay);
        campaignDiscSin = (campaignRuleSin && campaignRuleSin.discount) || 0;
        campaignDiscCon = (campaignRuleCon && campaignRuleCon.discount) || 0;
        if (campaignDiscSin > 0) finalSin = applyDiscount(finalSin, campaignDiscSin);
        if (campaignDiscCon > 0) finalCon = applyDiscount(finalCon, campaignDiscCon);
      }

      // Dental al final del total (NIF): importe FIJO, se suma DESPUÉS de todos los
      // descuentos (pago, comisión y campaña). El dental NO lleva ningún descuento.
      if (rules.dental_mode === "total_at_end") {
        finalCon = finalSin + dental_total_for_group;
      }

      const hasDental = (rules.dental_mode !== null && rules.dental_mode !== "none") || isOnlyConDental;

      let monthsPerPeriod = 1;
      let periodLabel = "Mensual";
      let periodSuffix = "mes";
      if (state.pay === "trimestral") { monthsPerPeriod = 3; periodLabel = "Trimestral"; periodSuffix = "trimestre"; }
      else if (state.pay === "semestral") { monthsPerPeriod = 6; periodLabel = "Semestral"; periodSuffix = "semestre"; }
      else if (state.pay === "anual") { monthsPerPeriod = 12; periodLabel = "Anual"; periodSuffix = "año"; }
      // Welcome (Extranjería): el precio de la tabla YA es anual → se muestra tal cual (1×).
      const annualMult = rules.annual_only ? 1 : 12;
      if (rules.annual_only) { monthsPerPeriod = 1; periodLabel = "Anual"; periodSuffix = "año"; }

      // Valor a mostrar
      const showSin = isOnlyConDental ? null : roundPrice(finalSin);
      const showCon = isOnlyConDental ? roundPrice(finalSin) : roundPrice(finalCon);

      return {
        ok: true,
        product,
        constraints,
        numAseguradosTotal,
        hasDental,
        isOnlyConDental,
        monthly: { sin: showSin, con: showCon },
        annual: {
          sin: showSin !== null ? roundPrice(finalSin * annualMult) : null,
          con: roundPrice((isOnlyConDental ? finalSin : finalCon) * annualMult)
        },
        annualNoDisc: {
          sin: showSin !== null ? roundPrice(finalSinNoManual * annualMult) : null,
          con: roundPrice((isOnlyConDental ? finalSinNoManual : finalConNoManual) * annualMult)
        },
        periodBase: showSin !== null ? roundPrice(finalSin * monthsPerPeriod) : null,
        periodWithDental: roundPrice((isOnlyConDental ? finalSin : finalCon) * monthsPerPeriod),
        periodLabel,
        periodSuffix,
        monthsPerPeriod,
        breakdown,
        payDisc,
        manualDiscApplied: effectiveDiscount,
        dentalPer: (rules.dental_mode && rules.dental_mode.includes("per_person")) ? dental_pp : null,
        isGO: isGOProduct(product),
        annualLoss: roundPrice(annualLoss),
        campaign: campaign,
        campaignRuleSin,
        campaignRuleCon,
        campaignDiscSin,
        campaignDiscCon
      };
    }
function mapProductToCampaignCategory(product, withDental, payMode) {
      const p = (product || "").toLowerCase();
      // GO — categoría propia (sin meses gratis ni puntos, sólo cheque regalo de la campaña antigua → prorrata)
      if (p === "go" || p.startsWith("go ")) return "go";
      // NIF — categoría propia (sólo descuento, sin meses ni puntos)
      if (p.includes("nif")) return "nif";
      // Pymes TOTAL → categoría empresarial específica
      if (p.includes("pymes total")) return "pymes_total";
      // Plena Total Seniors
      if (p.includes("plena total seniors")) return "plena_total_seniors";
      // Plena Total / Plena Total Vital (no Seniors — ya cazada arriba)
      if (p.includes("plena total")) return "plena_total";
      // Gama Plena / Seniors / Dental Max — depende de dental
      return withDental ? "gama_con_dental" : "gama_sin_dental";
    }
function getCampaignBucket(n) {
      if (n <= 1) return "1";
      if (n === 2) return "2";
      return "3+";
    }
function getCampaignRule(campaign, product, numInsured, withDental, payMode) {
      if (!campaign || !campaign.campaign || !campaign.campaign.rules) return null;
      const cat = mapProductToCampaignCategory(product, withDental, payMode);
      if (!cat) return null;
      // GO: sin meses gratis, sin descuento. Sólo entra para que la prorrata se calcule con el cheque regalo.
      if (cat === "go") {
        return { category: "go", bucket: "all", months: 0, discount: 0 };
      }
      // Reglas hardcoded para NIF y Pymes Total (corte 1-3 / 4+, sin meses)
      if (cat === "nif") {
        const discount = numInsured <= 3 ? 5 : 10;
        return { category: "nif", bucket: numInsured <= 3 ? "1-3" : "4+", months: 0, discount };
      }
      if (cat === "pymes_total") {
        const discount = numInsured <= 3 ? 5 : 15;
        return { category: "pymes_total", bucket: numInsured <= 3 ? "1-3" : "4+", months: 0, discount };
      }
      const rules = campaign.campaign.rules[cat];
      if (!rules) return null;
      const bucket = getCampaignBucket(numInsured);
      const r = rules[bucket] || { months: 0, discount: 0 };
      return { category: cat, bucket, months: r.months || 0, discount: r.discount || 0 };
    }
function getFreeMonthOffsets(category, numAseg, year) {
      const bucket = numAseg <= 1 ? 1 : 2;
      const table = {
        plena_total: {
          1: { 1: [10], 2: [21] },
          2: { 1: [10, 13], 2: [21] }
        },
        plena_total_seniors: {
          1: { 1: [7], 2: [16] },
          2: { 1: [7, 10], 2: [16] }
        },
        gama_con_dental: {
          1: { 1: [7], 2: [10] },
          2: { 1: [7, 10], 2: [16] }
        },
        gama_sin_dental: {
          1: { 1: [7], 2: [] },
          2: { 1: [7], 2: [15] }
        }
      };
      return (table[category] && table[category][bucket] && table[category][bucket][year]) || [];
    }
function getPromoValue(promo, productName, numInsured, withDental) {
      if (!promo || !promo.values) return 0;
      const isGo = isGOProduct(productName);
      const idx = numInsured;
      let arr;
      if (isGo) {
        arr = withDental ? promo.values.go_con_dental : promo.values.go_sin_dental;
      } else {
        arr = withDental ? promo.values.otros_con_dental : promo.values.otros_sin_dental;
      }
      if (!arr || !arr.length) return 0;
      return (idx < arr.length) ? arr[idx] : arr[arr.length - 1];
    }
function computeCampaignVariantData(r, withDental) {
      if (!r || !r.campaign || !r.campaign.campaign) return null;
      if (state.pay !== "mensual") return null;
      const rule = withDental ? r.campaignRuleCon : r.campaignRuleSin;
      if (!rule) return null;
      const monthly = withDental ? (r.monthly && r.monthly.con) : (r.monthly && r.monthly.sin);
      if (monthly === null || monthly === undefined || monthly <= 0) return null;

      const pnCheck = (r.product || "").toLowerCase();
      const isGOProd = pnCheck === "go" || pnCheck.startsWith("go ");
      const isPymesTotal = pnCheck.includes("pymes total");
      const isNIF = pnCheck.includes("nif");
      const isSeniorsForGift = pnCheck.includes("seniors");
      const newCampaignGeneratesPoints = !(isPymesTotal || isNIF || isGOProd);

      // Tarjeta Regalo base (campaña antigua)
      const activePromos = loadActivePromosFiltered(state.effectiveDate);
      const regaloPromo = activePromos.find(p => p.type === "per_insured" && p.location === "above_desglose") || null;
      const regaloAplica = regaloPromo && !isPymesTotal;
      let regaloBase = 0;
      if (regaloAplica) {
        if (withDental) {
          if (isSeniorsForGift) {
            const regaloSinBase = getPromoValue(regaloPromo, r.product, r.numAseguradosTotal, false);
            regaloBase = regaloSinBase * 1.5;
          } else {
            regaloBase = getPromoValue(regaloPromo, r.product, r.numAseguradosTotal, true);
          }
        } else {
          regaloBase = getPromoValue(regaloPromo, r.product, r.numAseguradosTotal, false);
        }
      }

      // Puntos nuevos campaña convertidos a euros (1 pt = 0,10 €)
      const camp = r.campaign.campaign;
      const newPoints = newCampaignGeneratesPoints ? (camp.points_per_insured || 0) * r.numAseguradosTotal : 0;
      const eurPerPoint = camp.eur_per_point || 0;
      const newPointsEur = newPoints * eurPerPoint;
      const truncateTo50 = v => Math.floor((v || 0) / 50) * 50;
      const regaloTotal = (regaloBase || 0) + newPointsEur;
      // Para Seniors/SeniorsTotal: conversión directa sin truncar; resto: bloques de 50€
      const cheque = isSeniorsForGift ? regaloTotal : truncateTo50(regaloTotal);

      // Meses gratis repartidos por ventanas de 12 meses según la posición real
      // de cada mes gratis (offset desde la fecha de efecto):
      //   Año 1 = meses 1-12, Año 2 = meses 13-24, Año 3 = meses 25-36.
      let freeW1 = 0, freeW2 = 0, freeW3 = 0, totalMonths = 0;
      if (rule.months > 0) {
        const offs = []
          .concat(getFreeMonthOffsets(rule.category, r.numAseguradosTotal, 1))
          .concat(getFreeMonthOffsets(rule.category, r.numAseguradosTotal, 2));
        for (const o of offs) {
          if (o >= 1 && o <= 12) freeW1++;
          else if (o >= 13 && o <= 24) freeW2++;
          else if (o >= 25 && o <= 36) freeW3++;
        }
        totalMonths = offs.length;
      }

      // ¿Póliza TOTAL? (Plena Total, Plena Total Vital, Plena Total Seniors)
      const isTotalPolicy = (rule.category === "plena_total" || rule.category === "plena_total_seniors");

      // Prorrata (nueva fórmula):
      //   Año 1 = (precio×12 − precio×mesesGratis[1-12] − cheque) / 12
      //           El cheque/Tarjeta Regalo solo cuenta en el Año 1 (se consigue desde el mes 6).
      //   Año 2 = (precio×12 − precio×mesesGratis[13-24]) / 12   (solo TOTAL, sin cheque)
      //   Año 3 = (precio×12 − precio×mesesGratis[25-36]) / 12   (solo TOTAL, sin cheque)
      const prorrata  = ((monthly * 12) - (monthly * freeW1) - cheque) / 12;
      const prorrata2 = ((monthly * 12) - (monthly * freeW2)) / 12;
      const prorrata3 = ((monthly * 12) - (monthly * freeW3)) / 12;

      // En GO siempre se muestra la línea (si no hay cheque, la prorrata queda = precio mensual)
      const hasData = isGOProd ? true : ((cheque > 0) || (totalMonths > 0) || (rule.discount > 0));

      return { cheque, prorrata, prorrata2, prorrata3, isTotalPolicy, totalMonths, hasData };
    }
 const results=defaultProductOrder().filter(p=>DATA.products.includes(p)).map(p=>{
 let r=computeProduct(p,state);
 if(r.ok&&(r.isGO||isWelcome(p))&&state.discount>0)r={...r,ok:false,reason:"No admite descuento contra comisión."};
 if(r.ok&&isWelcome(p)&&state.pay!=="anual")r={...r,ok:false,reason:"Solo admite pago anual."};
 if(r.ok&&r.isOnlyConDental&&state.pay!=="mensual")r={...r,ok:false,reason:"Solo admite pago mensual."};
 if(!r.ok)return {...r,reason:String(r.reason).replaceAll("No apto","Fuera de regla comercial").replaceAll("Apto si","Consultar si")};
 const withDental=r.isOnlyConDental||!!input.dental;
 const rule=withDental?r.campaignRuleCon:r.campaignRuleSin;
 const promo=computeCampaignVariantData(r,withDental);
 const freeOffsets=rule?.months>0?[...getFreeMonthOffsets(rule.category,state.ages.length,1),...getFreeMonthOffsets(rule.category,state.ages.length,2)]:[];
 const monthly=withDental?r.monthly.con:r.monthly.sin;
 const annualOnly=!!r.constraints.rawRules.annual_only;
 const annual=annualOnly?monthly:roundPrice(monthly*(12-freeOffsets.filter(x=>x<=12).length));
 return {...r,selectedMonthly:monthly,periodAmount:withDental?r.periodWithDental:r.periodBase,withDental,annualOnly,durationMonths:r.isOnlyConDental?36:12,firstYearPremium:annual,freeOffsets,promo,ageRule:getProductAgeRequirement(p)};
 });
 return {province:zone.provincia.replaceAll("_"," "),zone:state.zona,results};
}
