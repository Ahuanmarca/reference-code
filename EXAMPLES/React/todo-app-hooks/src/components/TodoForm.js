import useInputState from "../hooks/useInputState";
import { Paper, TextField } from "@mui/material";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;

/**
 * TodoForm component
 * Controlled form example
 * Controlled input example
 *
 * Uses custom hook useInputState to:
 * - define value
 * - handle changes to the input field
 * - reset the input field
 *
 * We NEED and addTodo function that should come from TodoApp,
 * because TodoApp controls the state.
 * On the form onSubmit prevents default and calls addTodo with
 * the current value of the form (the value in the text field)
 *
 * On the text field we control the value and update it with
 * React, with the custom hook or just using useState directly.
 *
 * Material UI components used: Paper, TextField
 *
 * Structure:
 *    | Paper
 *      | form
 *        | TextField
 */

/**
 * Errors:
 * handleChange wasn't working because of bad syntax:
 * Bad: <TextField handleChange={handleChange} />
 * Good: <TextField onChange={handleChange} />
 */

/**

STYLING for TodoForm

**Paper**  
style={{ margin: "1rem 0", padding: "0 1rem" }}

**TextField**  
margin="normal" label="Add New Todo" fullWidth

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

import { Paper, TextField } from "@mui/material";
import useInputState from "../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;


 */
