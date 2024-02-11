import { useState } from "react";
import { Paper, AppBar, Toolbar, Typography, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 1, task: "Create Todos App with React", completed: true },
  { id: 2, task: "Don't watch lecture 253", completed: true },
  { id: 3, task: "Don't watch lecture 254", completed: true },
  { id: 4, task: "Don't watch lecture 255", completed: true },
  { id: 5, task: "Watch lecture 256", completed: false },
  { id: 6, task: "Create removeTodo function", completed: false },
  { id: 7, task: "Implement checkbox functionality", completed: false },
];

const TodoApp = (props) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    const newTodo = {
      id: uuidv4(),
      task: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    // filter out removed todo
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(filteredTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

/**
 * TodoApp custom component
 * Uses Material UI and custom components. Material UI usage example.
 *
 * MUI components used:
 * Paper (container for everything else)
 * AppBar, Toolbar, Typography, Grid
 *
 * Custom components:
 * - TodoList: Receives todos as a prop, renders list of todos
 * - TodoForm: Form to add a new todo. Needs to receive an addTodo function
 *
 * Functions:
 * - addTodo(newTodoText)
 * - removeTodo(todoId) // Pass it down to the TodoList and TodoItem component
 *
 * Hooks:
 * - useState is used to create todos and setTodos. Needs initialTodos (mock data)
 *
 * Structure:
 * |Paper
 *   |AppBar
 *     |Toolbar
 *       |Typography
 *   |Grid
 *     |Grid
 *       |TodoForm
 *       |TodoList
 *
 * Styling: Copy from the end of the document
 * Mock data: Copy from the end of the document

MOCK DATA FOR INITIAL TODOS (COPY PASTE PLEASE)
initialTodos is created in TodoApp. Mock data,
hardcoded todos array to be passed into TodoList

// Mock Server Data
const initialTodos = [
  { id: 1, task: "Create Todos App with React", completed: true },
  { id: 2, task: "Don't watch lecture 253", completed: true },
  { id: 3, task: "Don't watch lecture 254", completed: true },
  { id: 4, task: "Don't watch lecture 255", completed: true },
  { id: 5, task: "Watch lecture 256", completed: false },
  { id: 6, task: "Create removeTodo function", completed: false },
  { id: 7, task: "Implement checkbox functionality", completed: false },
];

STYLING FOR TodoApp COMPONENT (For MUI components)

  **Paper**  
  style={{ padding: 0,margin: 0,height: "100vh",backgroundColor: "#fafafa", }}  
  elevation={0}  

  **AppBar**  
  color="primary" position="static" style={{ height: "64px" }}

  **Typography**  
  color="inherit"

  **Grid (container)**  
  container justifyContent="center" style={{ marginTop: "1rem" }}
  
  Note: Difference with tutorial
  the tutorial uses justify instead of justifyContent

  **Grid (item)**  
  item xs={11} md={8} lg={4}

 */

/**
// COMPLETE SOLUTION BELOW:
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 

import { useState } from "react";
import { Paper, AppBar, Toolbar, Typography, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const initialTodos = [
  { id: 1, task: "Create Todos App with React", completed: true },
  { id: 2, task: "Don't watch lecture 253", completed: true },
  { id: 3, task: "Don't watch lecture 254", completed: true },
  { id: 4, task: "Don't watch lecture 255", completed: false },
  { id: 5, task: "Watch lecture 256", completed: false },
];

const TodoApp = (props) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    const newTodo = {
      id: todos.length + 1,
      task: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

 */
