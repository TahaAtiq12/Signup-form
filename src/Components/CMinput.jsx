import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "45ch" },
        marginTop: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="John" variant="outlined" />
      <TextField id="outlined-basic" label="Doe" variant="outlined" />
    </Box>
  );
}
