import React from 'react';
import { Button } from 'react-bootstrap';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <Button
      variant="outline-success"
      style={{marginLeft:'30px'}}
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </Button>
  );
};
export default Trigger;


 