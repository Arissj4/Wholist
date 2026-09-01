import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  statusFilter: "all" | "active" | "inactive";
}

export const initialState: SearchState = {
  query: "",
  statusFilter: "all",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<SearchState["statusFilter"]>) {
      state.statusFilter = action.payload;
    },
    clearFilters(state) {
      state.query = "";
      state.statusFilter = "all";
    },
  },
});

export const { setQuery, setStatusFilter, clearFilters } = searchSlice.actions;
export default searchSlice.reducer;
