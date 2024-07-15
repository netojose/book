import { RootState } from "@/store/store";
import { ReactElement, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { XStack } from "tamagui";

import Button from "@/components/Button";
import { increasePrecision, decreasePrecision } from "@/store/slices/orderBook";

export default function PrecisionControls(): ReactElement {
  const dispatch = useDispatch();
  const orderBookPrecision = useSelector(
    (state: RootState) => state.orderBook.precision
  );

  const increase = useCallback(() => {
    dispatch(increasePrecision());
  }, []);

  const decrease = useCallback(() => {
    dispatch(decreasePrecision());
  }, []);

  return (
    <XStack gap="$2" justifyContent="space-around">
      <Button disabled={orderBookPrecision === 0} onPress={increase}>
        -
      </Button>
      <Button disabled={orderBookPrecision === 4} onPress={decrease}>
        +
      </Button>
    </XStack>
  );
}
