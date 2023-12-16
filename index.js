const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
app.use(cors());

/*const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const dbPath = path.join(__dirname,"data.db")
let db = null;

const initializeDBAndServer = async () => {
    try{

        db = await open ({
            filename: dbPath,
            driver : sqlite3.Database
        })
    }
    catch(error){
        console.log(`DB Error: ${error.message}`);
        process.exit(1);
    }
}

initializeDBAndServer();*/

const port = 4000;
const books = require('./books.json');
const shelf_books = require('./shelf.json');


app.get("/", async (request, response) => {
    response.send(books);
})

app.get("/shelf", async (request, response) => {
    response.send(shelf_books);
});

app.listen(port, () => {
    console.log(`Server Running on: ${port}`);
});