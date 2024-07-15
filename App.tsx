import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { View } from "tamagui";

import WsHandler from "@/components/WsHandler";
import AppProviders from "@/components/AppProviders";
import OrderBook from "@/components/OrderBook";

export default function App() {
  return (
    <AppProviders>
      <WsHandler />
      <View flex={1} bg="$green12Light">
        <StatusBar style="auto" />
        <SafeAreaView style={{ flex: 1 }}>
          <OrderBook />
        </SafeAreaView>
      </View>
    </AppProviders>
  );
}
