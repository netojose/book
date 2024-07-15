import { ReactElement } from "react";

import { View } from "tamagui";

import { Props } from "./types";

export default function Bar({ value, type }: Props): ReactElement {
  return (
    <View
      bg={type === "bid" ? "$green9" : "$red9"}
      height="100%"
      width={`${value}%`}
      left={type === "ask" ? 0 : undefined}
      right={type === "bid" ? 0 : undefined}
      position="absolute"
    />
  );
}
