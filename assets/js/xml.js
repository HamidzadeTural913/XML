fetch("https://jsonplaceholder.typicode.com/todos",{
    method:"GET",
})
.then((resp) => resp.json)
.then((data) => {console.log(data);
})