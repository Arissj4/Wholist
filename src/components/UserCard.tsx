import { User } from "@/lib/fetchUsers";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div className="user-card">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.company.name}</p>
    </div>
  );
}
