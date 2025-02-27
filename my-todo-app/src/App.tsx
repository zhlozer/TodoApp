import React, { useState } from "react";
import {
  IconButton,
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addNote, toggleNote, deleteNote } from "./redux/notesSlice";
import SearchInput from "./components/SearchInput";
import Dropdown from "./components/Dropdown";
import DarkModeButton from "./components/DarkModeButton";
import AddButton from "./components/AddButton";
import { RootState } from "./redux/store";
import Popup from "./components/Popup";

function App() {
  const [open, setOpen] = useState(false);
  const [newNote, setNewNote] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      dispatch(addNote(newNote));
      setNewNote("");
      setOpen(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{ marginTop: "20px", position: "relative" }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        TODO LIST
      </Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <SearchInput></SearchInput>

        <Dropdown></Dropdown>

        <DarkModeButton></DarkModeButton>
      </Box>

      <List>
        {notes.map((note) => (
          <ListItem
            key={note.id}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => dispatch(deleteNote(note.id))}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              edge="start"
              checked={note.completed}
              tabIndex={-1}
              onClick={() => dispatch(toggleNote(note.id))}
            />
            <ListItemText
              primary={note.text}
              style={{
                textDecoration: note.completed ? "line-through" : "none",
              }}
            />
          </ListItem>
        ))}
      </List>
      <AddButton handleOpen={handleOpen}></AddButton>

      <Popup open={open} handleClose={handleClose}></Popup>
    </Container>
  );
}

export default App;
