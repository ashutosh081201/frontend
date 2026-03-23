import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  //const {message, sender} = props;
  //const message = props.message;
  //const sender = props.sender;

  /*if (sender === "robot") {
          return (
            <div>
                <img src="robot.png" width="50"></img>
                {message}
            </div>
          );
        }*/

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile"></img>
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile"></img>
      )}
    </div>
  );
}
