import { ReactElement, PropsWithChildren } from "react";

import { TamaguiProvider } from "tamagui";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { tamaguiConfig } from "@/tamagui.config";

import { store } from "@/store/store";

export default function AppProviders({
  children,
}: PropsWithChildren): ReactElement {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
