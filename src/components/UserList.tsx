"use client";

import { useUsers } from "@/hooks/useUsers";
import UserCard from "./UserCard";
import { useState } from "react";

export function UserList() {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");

  if (loading)
    return (
      <p data-testid="loading" className="h-full text-center text-[30px] mt-10">
        Loading...
      </p>
    );
  if (error) return <p data-testid="error">{error}</p>;

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="bg-white text-black mb-2 p-1 rounded-sm"
        data-testid="search-input"
        type="text"
        placeholder="Search users ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
