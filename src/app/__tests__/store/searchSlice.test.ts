import reducer, {
  setQuery,
  setStatusFilter,
  clearFilters,
  initialState,
} from "../../../../store/searchSlice";

describe("searchSlice", () => {
  it("returns the initial state", () => {
    const res = reducer(initialState, { type: "unknown" });
    expect(res).toEqual(initialState);
  });
});
