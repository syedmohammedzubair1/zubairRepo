
import React, { useState } from "react";
import notificationBell3 from "../../assets/notificationBell/bell3.svg";
import "./NotificationComponent.css"; 

const messages = [
  "This is your notification message 1",
  "This is your notification message 2",
  "This is your notification message 3",
  "This is your notification message 4", 
];

const NotificationComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage); 
    
  };

  const handleClose = () => {
    setShowMessage(false); 
  };

  return (
    <div>
    <div className="notification-container">

    <div className="bell-container" onClick={handleClick}>
        <img src={notificationBell3} alt="Notification Bell" className="notification-bell" />
        {messages.length > 0 ? (<span className="notification-count">{messages.length}</span>) : setShowMessage("")}
      </div>
    
      {showMessage && (
        <div className="notification-popup">
          <h3>Notifications</h3>
          <ul className="notification-list">
            {messages.map((msg, index) => (
              <li key={index} className="notification-item">
                🔔 {msg}
              </li>
            ))}
          </ul>
          <button className="notification-close" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default NotificationComponent;
