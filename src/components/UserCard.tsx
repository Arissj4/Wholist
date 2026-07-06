import { User } from "@/lib/fetchUsers";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div
      className="user-card flex m-2 p-3 border rounded-lg"
      data-testid="user-card"
    >
      <div className="w-[50%]">
        <p>Owner:</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="w-[50%]">
        Company:
        <p>City: {user.address.city}</p>
        <p>Name: {user.company.name}</p>
      </div>
    </div>
  );
}
