import { AddCircleOutlineRounded } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import React from "react";
import "./form.scss";

const marks = [
  {
    value: 5,
    label: "👍",
  },
  {
    value: 1,
    label: "👎",
  },
];

const Form = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="form">
      <form action="">
        <div className="form-container">
          <TextField
            color="primary"
            fullWidth
            id="outline-basic"
            label="Name"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              color="primary"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            color="primary"
            fullWidth
            id="outline-basic"
            label="Partner Preference"
            variant="outlined"
          />
          <div className="skill-level">
            <span className="text">Skill Level</span>
            <div className="slider">
              <Slider
                color="secondary"
                defaultValue={3}
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={1}
                max={5}
              />
            </div>
          </div>
        </div>
        <div className="button">
          <Button
            color="secondary"
            variant="contained"
            endIcon={<AddCircleOutlineRounded />}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
