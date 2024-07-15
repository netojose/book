import { ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { WS_URL } from "@/utils/constants";
import { addEntry, addEntries } from "@/store/slices/orderBook";
import { RootState } from "@/store/store";

export default function WsHandler(): ReactNode {
  const dispatch = useDispatch();
  const orderBookPrecision = useSelector(
    (state: RootState) => state.orderBook.precision
  );
  const socket = useRef<WebSocket>();

  useEffect(
    function handleWs() {
      socket.current = new WebSocket(WS_URL);
      socket.current.addEventListener("message", ({ data }) => {
        try {
          const parsed = JSON.parse(data);
          if (!Array.isArray(parsed)) {
            return;
          }
          const payload = parsed[1];
          if (Array.isArray(payload[0])) {
            dispatch(
              addEntries(
                payload.map((item: number[]) => ({
                  price: item[0],
                  count: item[1],
                  amount: item[2],
                }))
              )
            );
          } else {
            const [price, count, amount] = payload;
            dispatch(addEntry({ price, count, amount }));
          }
        } catch (e) {}
      });
      const data = JSON.stringify({
        event: "subscribe",
        channel: "book",
        prec: `P${orderBookPrecision}`,
        freq: "F1",
        symbol: "tBTCUSD",
      });

      socket.current.addEventListener("open", () => {
        socket?.current?.send(data);
      });

      return () => {
        socket.current?.close();
      };
    },
    [orderBookPrecision]
  );

  return null;
}
