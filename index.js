const express = require("express");
const app = express();
const path = require("path");

const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const dbPath = path.join(__dirname,"data.db");
const port = 4000;

const b = require('./books.json');

let db = null;

const initializeDBAndServer = async () => {
    try{

        db = await open ({
            filename: dbPath,
            driver : sqlite3.Database
        });

        app.listen(port, () => {
            console.log(`Server Running on: ${port}`);
        });
    }
    catch(error){
        console.log(`DB Error: ${error.message}`);
        process.exit(1);
    }
}

initializeDBAndServer();

app.get("/", async (request, response) => {
    const getBooks = `SELECT * FROM books`;
    const book = await db.all(getBooks);
    response.send(book);
})

app.get("/books/:id/", async (request, response) => {
    const { id } = request.params;
    const getBook = `SELECT * FROM books WHERE id = ${id};`;
    const x = await db.get(getBook);
    response.send(x);
    
})
