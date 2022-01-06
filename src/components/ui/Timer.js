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

  return (
    <Text pr={30} color="gray.500">
      {time}
    </Text>
  );
};

export default Timer;
