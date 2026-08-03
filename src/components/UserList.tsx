"use client";

import { useGetUsersQuery } from "../../store/usersAPI";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function UserList() {
  const { data: users = [], isLoading: loading, isError } = useGetUsersQuery();
  const error = isError ? "Failed to load users" : null;
  const query = useSelector((state: RootState) => state.search.query);

  if (loading)
    return (
      <p data-testid="loading" className="h-full text-center text-[30px] mt-10">
        Loading...
      </p>
    );
  if (error) return <p data-testid="error">{error}</p>;

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchBar />
      <ul className="w-full" data-testid="user-list">
        {filtered.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
