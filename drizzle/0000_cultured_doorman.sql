CREATE TABLE `sales_cases` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`payload` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `cases_owner_updated` ON `sales_cases` (`owner`,`updated_at`);