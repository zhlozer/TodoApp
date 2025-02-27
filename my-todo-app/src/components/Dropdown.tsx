import React from "react";
import { FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const Dropdown = () => {
  const [filter, setFilter] = useState("All");
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select color="primary" value={filter} onChange={handleChange}>
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"Complete"}>Complete</MenuItem>
        <MenuItem value={"Uncomplete"}>Uncomplete</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
