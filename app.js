const todos = [];
// Dry Version
const get = (elements) => 
elements.map((element) => document.getElementById(element));

const [pendingList, completedList, addForm, NewTodo] = get([
    "pendingList", 
    "completedList", 
    "addForm", 
    "newTodo"]);

const lists = [[pendingList, "pending"], 
[completedList, "done"]]


const cssClasses = {
    pending: 
    "bg-white w-full text-center text-yellow-500 rounded py-4 border-2 border-yellow-500 transition transform ease-in-out duration-300 hover:bg-yellow-500 hover:text-white hover:scale-110 hover:rotate-1 cursor-pointer" ,

    done: 
    "bg-white w-full text-center text-blue-500 rounded py-4 border-2 border-blue-500 transition transform ease-in-out duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:rotate-1 cursor-pointer"
}


const updateTodos = () => {
    lists.forEach(list => {
        const filteredTodos = todos.filter((todo) => todo.
        status === list[1]);
    
        list[0].innerHTML = ""
        filteredTodos.forEach((todo) => {
            const item = document.createElement("li");
            item.className = cssClasses[(list[1])];
            item.innerText = todo.text;
            item.id = todo.id;
            list[0].appendChild(item);
        });   
    });
};

addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todos.push({
        id: Math.floor(Math.random() * 100000).toString(),
        text: newTodo.value, 
        status:"pending",
    });
    newTodo.value = "";
    updateTodos();
});

pendingList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).
    status = "done";
    updateTodos();
});

completedList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).
    status = "pending";
    updateTodos();
});
