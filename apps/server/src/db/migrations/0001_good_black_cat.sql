CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(1000) NOT NULL,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
