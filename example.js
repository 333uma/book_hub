let myarray = {
    "books": [{"id": 1, "name":"english"},{"id":2, "name":"Maths"},{"id":3, "name":"science"},{"id":4,"name":"social"},{"id":5, "name":"hindi"},{"id":6,"name":"telugu"}],
    "total": 6
};

const index = myarray.books.findIndex(object => {
    return object.name === "science";
})

console.log(index);