const express = require("express");
const app = express();
const path = require("path");

const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const dbPath = path.join(__dirname,"data.db");
const port = 4000;

const books = require('./books.json');

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
    response.send(books);
})
