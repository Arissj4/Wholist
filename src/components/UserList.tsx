"use client";

import { useUsers } from "@/hooks/useUsers";
import UserCard from "./UserCard";
import { useState } from "react";

export function UserList() {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p data-testid="error">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search users ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="w-full" data-testid="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
