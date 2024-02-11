import { useState } from "react";

const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};

export default useInputState;

/**
 * useInputState
 * Custom Hook usage example
 *
 * This custom hook uses the useState built in hook.
 * Takes an initial value, creates value and setValue with useState
 *
 * useInputState returns:
 * - value
 * - handleChange: a function that sets the value to e.target.value
 * - reset: a function that sets the value to ""
 *
 * We can import this custom hook directly inside a component
 * that needs to handle state in a form (a text field).
 * We can import useInputState directly in TodoForm component
 * We DONT'T need to import it in TodoApp and then pass it as a prop
 *
 */

/**
 * Errors:
 * Imported useState incorrectly
 * Bad: import useState from "react";
 * Good: import { useState } from "react";
 */

/**
// SOLUTION BELOW...
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

import { useState } from "react";

const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};

export default useInputState;

*/
