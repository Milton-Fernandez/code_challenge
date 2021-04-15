CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "review" (
	"id" SERIAL PRIMARY KEY,
 	"user_id" INT,
    "comment" VARCHAR (250)  NOT NULL,
    "rating" INT,
    "image"  VARCHAR (250)  NOT NULL,
    "title"  VARCHAR (250)  NOT NULL,
    "author" VARCHAR (250)  NOT NULL
	);

CREATE TABLE "nyt_api"(
		"id" SERIAL PRIMARY KEY,
		"api" VARCHAR (250) NOT NULL
		);