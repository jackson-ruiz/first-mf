import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomButton = (props) => {
  const { id, testId, onClick, children } = props;
  const changeFunction = () => {
    console.log("Pasó por click interno de MF1");
    onClick();
  };
  return (
    <Button
      variant="outlined"
      // data-testid={testId}
      id={id}
      onClick={changeFunction}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CustomButton;
