"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setQuery } from "../../store/searchSlice";

export default function SearchBar() {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  return (
    <input
      className="bg-white text-black mb-2 p-1 rounded-sm"
      data-testid="search-input"
      id="search-bar"
      type="text"
      placeholder="Search users ..."
      value={query}
      onChange={(e) => dispatch(setQuery(e.target.value))}
    />
  );
}
