import { ReactElement } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { YStack } from "tamagui";

import Header from "./components/Header";
import PrecisionControls from "./components/PrecisionControls";
import Row from "./components/Row";
import { RootState } from "@/store/store";

const currencyFmt = new Intl.NumberFormat();

export default function OrderBook(): ReactElement {
  const { bottom } = useSafeAreaInsets();
  const orders = useSelector((state: RootState) => state.orderBook.items);

  return (
    <YStack>
      <PrecisionControls />
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottom }}
        alwaysBounceVertical={false}
      >
        {orders.map((order) => (
          <Row
            key={order.id}
            bidTotal={`${order.amount}`}
            bidPrice={`${currencyFmt.format(order.price)}`}
            bidBarValue={0}
            askPrice={"0"}
            askTotal={"0"}
            askBarValue={0}
          />
        ))}
      </ScrollView>
    </YStack>
  );
}
