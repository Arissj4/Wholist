// test-utils/renderWithStore.tsx
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../../store/searchSlice";

export function renderWithStore(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { search: searchReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
