import React from "react";
import TextField from "@mui/material/TextField";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;  
  helperText?: string;  
}

const Index: React.FC<TextFieldProps> = ({ label, value, onChange, error, helperText }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}  
      onChange={onChange}
      error={error}  
      helperText={helperText}  
      sx={{
        "& label.Mui-focused": { color: "green" }, 
        "& .MuiOutlinedInput-root": {
          fontFamily: "Arial, sans-serif", 
          fontSize: "16px", 
          "&.Mui-focused fieldset": { borderColor: "green" }, 
        },
        "& input": {
          fontFamily: "Poppins", 
          fontSize: "16px",
          color: "black", 
          "& .MuiFormHelperText-root": {
          color: "red", 
          fontSize: "16px", 
          fontFamily: "Poppins", 
        },
        },
      }}
    />
  );
};

export default Index;
