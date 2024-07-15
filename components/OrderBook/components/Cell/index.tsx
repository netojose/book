import { ReactElement } from "react";

import { View, Text } from "tamagui";

import { Props } from "./types";

export default function Cell({
  value,
  type = "contents",
  align = "left",
}: Props): ReactElement {
  return (
    <View flex={1}>
      <Text
        textAlign={align}
        fontSize="$1"
        color={type === "contents" ? "$white1" : "$gray10Light"}
        textTransform={type === "contents" ? undefined : "uppercase"}
        p="$3"
      >
        {value}
      </Text>
    </View>
  );
}
