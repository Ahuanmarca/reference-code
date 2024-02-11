import { Paper, List, Divider } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleTodo }) => {

  const listItems = todos.map((todo, index) => (
    <>
      <TodoItem
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        task={todo.task}
        key={todo.id}
        completed={todo.completed}
        id={todo.id}
      />
      {index < todos.length - 1 && <Divider />}
    </>
  ));

  return (
    <Paper>
      <List>
        {listItems}
      </List>
    </Paper>
  );
};

export default TodoList;

/**
 * TodoList custom component
 *
 * This component receives todos as an array of objects:
 * { id: 1, task: "Pet the cat", completed: true }
 * Returns a List with the individual items as children
 * Uses the .map method and returns TodoItem components,
 * passing task, key (the id) and completed
 *
 * Puts a divider after every todo, except for the last one
 *
 * Material UI components used:
 * Paper, List, Divider
 * Doesn't use ListItem and ListItemText because they will come
 * from the TodoItem component
 *
 * Custom components used: TodoItem
 * TodoItem receives task, key (id) and completed as props,
 * returns <ListItem> with checkbox, todo text, buttons, etc
 *
 * Structure:
 *    | Paper
 *      | List
 *        | TodoItem (with .map())
 *
 * Styling: We don't have any styling here
 */

/**
 * My Errors:
 * Using curly bracers instead of parentheses when creating an arrow function
 * Bad: todos.map((todo) => { ...... })
 * Good: todos.map((todo) => ( ...... )) // multiple lines between parens
 */

/**
// SOLUTION BELOW:
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
 * 

import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <TodoItem
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
            />
            {index < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;

 */
