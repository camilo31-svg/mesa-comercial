import {sqliteTable,text,index,integer} from "drizzle-orm/sqlite-core";
export const cases=sqliteTable("sales_cases",{id:text("id").primaryKey(),owner:text("owner").notNull(),payload:text("payload").notNull(),updatedAt:text("updated_at").notNull()},t=>[index("cases_owner_updated").on(t.owner,t.updatedAt)]);
export const coachUsage=sqliteTable("coach_usage",{bucket:text("bucket").primaryKey(),requests:integer("requests").notNull(),expiresAt:text("expires_at").notNull()});
