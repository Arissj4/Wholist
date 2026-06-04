'use client'

import { useUsers } from "@/hooks/useUsers"
import UserCard from "./UserCard";

export function UserList (){

  const { users, loading, error} = useUsers();

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p data-testid="error">{error}</p>;

  return(
    <ul data-testid="user-list">
      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  )
}