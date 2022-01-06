import { Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const formatTimer = (secs) => {
    let seconds = Math.floor(secs % 60);
    let minutes = Math.floor(secs / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return `${minutes}:${seconds}`;
  };

  let timeFormat = formatTimer(time);

  return (
    <Text pr={30} color="gray.500">
      {timeFormat}
    </Text>
  );
};

export default Timer;
