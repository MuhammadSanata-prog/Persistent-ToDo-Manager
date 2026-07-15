
// const todo = {
//     title,
//     description,
//     location
// }


let todos = [];
let selectedTodo = null;

const Add = () => {

    console.log("add fi=unction called");
    let title = document.getElementById("inputTitle").value;
    let description = document.getElementById("inputDescription").value;
    let todolocation = document.getElementById("inputLocation").value;

    todos = JSON.parse(localStorage.getItem("todo")) || [];

    const todo = {
        id: Date.now(),
        title,
        description,
        todolocation
    }


    todos.push(todo);

    localStorage.setItem("todo", JSON.stringify(todos));
    

    // const todo = [{
    //     id: 1 ,
    //     title,
    //     description,
    //     todolocation: todolocation
    // }
    // ]

    // localStorage.setItem("todo", JSON.stringify(todo));
}


const read = () => {
    // console.log( JSON.parse(localStorage.getItem("todo")));
    // console.log("read function is called");
    let todo = JSON.parse(localStorage.getItem("todo"));
    console.log(todo);

    todos = JSON.parse(localStorage.getItem("todo")) || [];
    let rows = "";
    todos.forEach(todo => {
        rows += `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td>${todo.todolocation}</td>

        </tr>`
    });
    // document.getElementById("table").innerHTML = `
    //     <tr>;
    //         <td>${todo[0].id}</td>
    //         <td>${todo[0].title}</td>
    //         <td>${todo[0].description}</td>
    //         <td>${todo[0].todolocation}</td>

    //     </tr>

    // `;

    document.getElementById("table").innerHTML = rows;

    // document.getElementById("table").innerHTML = `
    //     <tr>
    //         <td>${todo[0].id}</td>
    //         <td>${todo[0].title}</td>
    //         <td>${todo[0].description}</td>
    //         <td>${todo[0].todolocation}</td>

    //     </tr>

    // `;
}



const update = () => {
    let id = Number(prompt("Enter ID"));
    console.log(id);


    todos = JSON.parse(localStorage.getItem("todo")) || [];

    let result = todos.find(function (todo) {
        return todo.id === id;

    })

    if (!result) {
        alert("Data don not found");
        return;
    }
    console.log(result);

    selectedTodo = result;
    // result.title = "updated uccessfully";
    // console.log(result)

    document.getElementById("updateTitle").value = result.title;
    document.getElementById("updateDesc").value = result.description;
    document.getElementById("updateLoc").value = result.todolocation;

    // result.title = title;
    // result.description = description;
    // result.todolocation = todolocation;

    localStorage.setItem("todo", JSON.stringify(todos));

}


const saveChanges = () => {
    // console.log("button is clicked");

    // let todos = JSON.parse(localStorage.getItem("todo")) || [];

    selectedTodo.title = document.getElementById("updateTitle").value;
    selectedTodo.description = document.getElementById("updateDesc").value;
    selectedTodo.todolocation = document.getElementById("updateLoc").value;

    localStorage.setItem("todo", JSON.stringify(todos));

    read();
}


const dell = () => {
    let id = Number(prompt("Enter the ID "));
    todos = JSON.parse(localStorage.getItem("todo")) || [];

    let newtodos = todos.filter(function(todo){
        return todo.id !== id;
    })
    
    // if(!newtodos.id){
        //     alert("Do not found");
        //     return;
        // }
        
        localStorage.setItem("todo", JSON.stringify(newtodos));
        read();
        
}   