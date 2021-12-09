import React from "react";
import PropTypes from "prop-types";

export default function Loading({ text = "Loading", speed = 300 }) {
  const [message, setMessage] = React.useState(text);
  React.useEffect(() => {
    const id = window.setInterval(() => {
      message === text + "..."
        ? setMessage(text)
        : setMessage((prevMessage) => prevMessage + ".");
    }, speed);
    return () => window.clearInterval(id);
  }, [message, text, speed]);
  return <>{message}</>;
}
Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
