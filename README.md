# Book

## Used technologies:

- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Tamagui](https://tamagui.dev)

## Architectural decisions

The websocket connection/handling is inside `<WsHandler />` component. But in my opinion, the websocket could to be placed inside `<OrderBook />` component (since the data provided by websocket is used only inside OrderBook component) and the Redux could to be unecessary on this project. But, to use Redux according to challenge specifications, I put data retrivarl in a component (WsHandler) and the data display in another component (OrderBook) just to describe how interact between data across different components (_WsHandler_, _OrderBook_ and _PrecisionControls_).

## Important information about missing tasks

I had no time to implement the change the bars scaling feature (but I did the change precision column, and this is basically has the same complexity). About the bar, I also didn't set the bar width, because [the documentation](https://docs.bitfinex.com/reference/ws-public-books#book-entry) is not clear about the values is used to set the bar width.
About the table, I filled the bids (left area), but the ask side (right side), I couldn't because once again, the API is not clear about what the values are from the left (greeen), and what the values are from the right (left).

I also hadn't time to implement connect/disconnec connection buttons, handle socket reconnection, install lint rules, implement unit tests, etc.

I sent an email asking about the questions above (as recomendend by the challenge instructions), but I didn't have the support.

If I have more time, and the answers for the missing information, I can finish 100% of the challenge, but I believe the finished pars are more complex than missing parts and can demonstrate I can the do the rest.

:warning: :warning: :warning:

> PS.: I sent all my challenge code before the time limit, but I'm sending more one commit just with these README.md changes to explain the missing points.

:warning: :warning: :warning:

## Screenshot

![Screenshot](https://iili.io/dBvOBql.png)
