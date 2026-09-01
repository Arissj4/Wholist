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

  it("updates query on setQuery", () => {
    const res = reducer(initialState, setQuery("Lemme"));
    expect(res.query).toEqual("Lemme");
    expect(res.statusFilter).toEqual("all");
  });

  it("Updated statusFilter on setStatusFilter", () => {
    const res = reducer(initialState, setStatusFilter("active"));
    expect(res.statusFilter).toEqual("active");
    expect(res.query).toEqual("");
  });
});
