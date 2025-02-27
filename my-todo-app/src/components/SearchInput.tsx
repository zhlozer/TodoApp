import React from "react";
import { Input, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Input
        placeholder="Search note..."
        fullWidth
        style={{
          border: "2px solid #6C63FF",
          borderRadius: "8px",
          padding: "5px 10px",
        }}
        startAdornment={
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon style={{ color: "#6C63FF" }} />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default SearchInput;
