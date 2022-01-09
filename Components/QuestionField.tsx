//React Componenten
import React from "react";

//Material UI
import TextField from "@material-ui/core/TextField";

export default function QuestionField() {
  return (
    <TextField
      label="Frage"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  );
}
