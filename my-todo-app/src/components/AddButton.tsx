import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // "+" işareti ikonu

interface AddButtonProps {
  handleOpen: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ handleOpen }) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={handleOpen}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#6C63FF",
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
