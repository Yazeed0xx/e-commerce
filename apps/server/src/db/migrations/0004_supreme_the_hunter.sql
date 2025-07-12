DROP TABLE `comments`;--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
DROP TABLE `products`;--> statement-breakpoint
ALTER TABLE `users_table` ADD `refreshToken` varchar(255);--> statement-breakpoint
ALTER TABLE `users_table` ADD `isVerified` boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `users_table` ADD `created_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users_table` ADD `updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;