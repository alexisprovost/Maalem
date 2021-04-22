import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
      style={{float: 'right',margin: '3rem'}}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
