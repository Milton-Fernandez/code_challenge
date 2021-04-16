## Requirements
Create an Api (server) that can communicate with the selected data source
   - a. End-point authentication
   - b. must support searching the data source
   - c. support a "rating system"(CRUD)
   - d support a comment system(CRUD)
Create user interface that can display cotent from the data source
   - a. authenitcation(username/password)
   - b. should allow user to search the data source
   - c. should allow user to "rate" a data item(CRUD)
   - d. should allow user to comment (CRUD)

I used the New York Times Books(apiKey) for this code challenge

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




