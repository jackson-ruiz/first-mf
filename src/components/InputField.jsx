import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  const { id, testId, defaultLabel, type, required } = props;
  return (
    <TextField
      id={id}
      // data-testId={testId}
      label={defaultLabel}
      type={type} // search, number, password, text; https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
      variant="filled"
      required={required && required}
    />
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  defaultLabel: PropTypes.string,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputField;
