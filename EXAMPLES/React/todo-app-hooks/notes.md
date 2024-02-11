Alternative (shorter) syntac for addTodo function
```jsx
// Alternative shorter syntax for addTodo function
const addTodo2 = (newTodoText) => {
  setTodos([
    ...todos,
    { id: todos.length + 1, task: newTodoText, completed: false },
  ]);
};
```

Alternative syntax for useInputState hook
```jsx
// Alternative syntax for useInputState hook
import { useState } from "react";
export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
```





### MUI components for TodoApp
``` jsx
  <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      {/* Header bar is created with MUI components:
      AppBar, Toolbar, Typography */}
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo App with Hooks</Typography>
        </Toolbar>
      </AppBar>

    </Paper>
```