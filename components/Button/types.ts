import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
};
