import { ReactElement } from "react";

import { XStack } from "tamagui";

import Cell from "../Cell";

export default function Header(): ReactElement {
  return (
    <XStack justifyContent="space-between">
      <Cell value="Total" type="title" />
      <Cell value="Price" align="right" type="title" />
      <Cell value="Price" type="title" />
      <Cell value="Total" align="right" type="title" />
    </XStack>
  );
}
