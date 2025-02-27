import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, toggleNote, deleteNote } from "../redux/notesSlice"; // Redux işlemleri için not ekleme action'ını burada kullanacağız

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface PopupProps {
  open: boolean;
  handleClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ open, handleClose }) => {
  const [newNote, setNewNote] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (newNote.trim()) {
      dispatch(addNote(newNote));
      setNewNote("");
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Note</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="New Note"
          fullWidth
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddNote} color="primary">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
