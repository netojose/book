import { ReactElement } from "react";

import { XStack, ZStack } from "tamagui";

import Bar from "../Bar";
import Cell from "../Cell";

import { Props } from "./types";

export default function Row({
  bidTotal,
  bidPrice,
  askPrice,
  askTotal,
  bidBarValue,
  askBarValue,
}: Props): ReactElement {
  return (
    <XStack
      justifyContent="space-between"
      borderBottomColor="$black"
      borderBottomWidth="$0.5"
    >
      <ZStack flex={1} height={45} width="50%">
        <Bar value={bidBarValue} type="bid" color="green" />
        <XStack flex={1}>
          <Cell value={bidTotal} />
          <Cell value={bidPrice} align="right" />
        </XStack>
      </ZStack>
      <ZStack flex={1}>
        <Bar value={askBarValue} type="ask" color="red" />
        <XStack flex={1}>
          <Cell value={askPrice} />
          <Cell value={askTotal} align="right" />
        </XStack>
      </ZStack>
    </XStack>
  );
}
