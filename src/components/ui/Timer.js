import { Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

const Timer = ({ allFound }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (allFound) {
      return;
    }

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
  let finalTimer;
  if (allFound) {
    finalTimer = "";
  } else {
    finalTimer = (
      <Text pr={30} color="gray.500">
        {timeFormat}
      </Text>
    );
  }
  return finalTimer;
};

export default Timer;
