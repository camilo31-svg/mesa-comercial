CREATE TABLE `coach_usage` (
	`bucket` text PRIMARY KEY NOT NULL,
	`requests` integer NOT NULL,
	`expires_at` text NOT NULL
);
