import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{
          width: "100%", // Set the width to 100%
          padding: "12px", // Adjust padding as needed
          boxSizing: "border-box", // Include padding in the width
          textAlign: "center",
        }}
        variant="contained"
      >
        Signup
      </Button>
    </Stack>
  );
}
