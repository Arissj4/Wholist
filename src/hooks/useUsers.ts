'use client'

import { fetchUsers, User } from "@/lib/fetchUsers";
import { useEffect, useState } from "react";

type State = {
  users: User[];
  loading: boolean;
  error: string | null;
};

export function useUsers() {
  const [state, setState] = useState<State>({
    users: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchUsers()
      .then((users) => setState({ users, loading: false, error: null }))
      .catch(() => {
        setState({ users: [], loading: false, error: "Failed to load users" });
      });
  }, []);

  return state;
}
