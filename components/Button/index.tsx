import { ReactElement } from "react";

import { Button as ButtonTamagui } from "tamagui";

import { Props } from "./types";

export default function Button({
  children,
  disabled,
  onPress,
}: Props): ReactElement {
  return (
    <ButtonTamagui
      bg="$green9"
      disabledStyle={{ bg: "$gray10Light" }}
      disabled={disabled}
      onPress={onPress}
    >
      {children}
    </ButtonTamagui>
  );
}
