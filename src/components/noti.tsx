import React, { useState } from 'react';

const Notification = ({ message, type }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null; // Don't render the component if it is closed
  }

  return (
    <div className={`notification ${type}`}>
      <span className="message">{message}</span>
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default Notification;
