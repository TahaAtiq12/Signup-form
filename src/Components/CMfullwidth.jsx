import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FullWidthTextField(props) {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        marginTop: "20px",
      }}
    >
      <TextField fullWidth label={props.type} id="fullWidth" />
    </Box>
  );
}
