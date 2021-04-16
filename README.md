

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## API Key
Create a env file to hold api field

## Create database and table

Create a new database called `book` and create a `user` and `review` table:

```SQL
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




```


## Development Setup Instructions

- Run `npm install`

- Run `npm run server` and `npm run client` to get the program to run on DOM




