import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
      style={{marginTop: "2rem", marginBottom: "2rem", position: "absolute", right: "10%"}}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
