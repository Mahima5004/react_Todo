import { createContext, useContext } from "react";

// creating a context while attaching it with all tha data that needs to be shared with various components 
export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo : "Todo Message",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}

});

export const useTodo = () => {
    return useContext(TodoContext);
} // creating a custom hook for using the context using existing useContext hook

//provider for the context or a wrapper tag
export const TodoProvider = TodoContext.Provider