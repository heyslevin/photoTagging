import { Box, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

import beach from "../../img/beach.jpg";

function ImageView() {
  return <Image src={beach} />;
}

export default ImageView;
