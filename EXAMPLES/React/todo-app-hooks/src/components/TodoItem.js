import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoItem = ({ task, completed, removeTodo, toggleTodo, id }) => {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;

/**
 * TodoItem
 * Custom component
 * Receives task (the todo text), completed (boolean) and key (from the todo's id)
 * 
 * Material UI components used:
 * ListItem, ListItemText, Checkbox, Icon, ListItemSecondaryAction, IconButton
 * 
 * Material UI Icons used:
 * DeleteIcon, EditIcon
 * 
 * WE NEED TO INSTALL MUI ICONS (check README)
 * We import the icons from a different path (same as install)
 * 
 * STRUCTURE:
 *    | ListItem
 *      | Checkbox
 *      | ListItemText
 *      | ListItemSecondaryAction
 *        | IconButton
 *          | DeleteIcon
 *        | IconButton
 *          | EditIcon
 * 

STYLING:

Checkbox
tabIndex={-1} checked={completed}

ListItemText
style={{ textDecoration: completed ? "line-through" : "none" }}

IconButton components
aria-label="Delete"
aria-label="Edit"

NOTES:

- What is tabIndex on the Checkbox doing?
- ListItemSecondaryAction is a container, we usually put some buttons there

*/

/**
 * SOLUTION BELOW:
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

import { ListItem, ListItemText, Checkbox, Icon } from "@mui/material";

import { ListItemSecondaryAction } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoItem = ({ task, key, completed }) => {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;

 */
