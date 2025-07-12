CREATE TABLE `comments` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`postId` int NOT NULL,
	`content` varchar(1000) NOT NULL,
	CONSTRAINT `comments_id` PRIMARY KEY(`id`)
);
