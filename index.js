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


app.get("/",(request, response) => {
    response.send(books);
})

app.get("/shelf",(request, response) => {
    response.send(shelf_books);
});

app.get("/books/:id", (request,response) => {
    const {id} = request.params;
    const index = shelf_books.books.findIndex(object => {
        return object.id === id
    })

    response.send(shelf_books.books[index]);
})

app.listen(port, () => {
    console.log(`Server Running on: ${port}`);
});