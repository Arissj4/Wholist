import { User } from "@/lib/fetchUsers";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div
      className="user-card flex my-4 p-3 border rounded-lg border-gray-600 bg-[#1A1A1A] shadow-md shadow-[rgba(255,255,255,0.3)]"
      data-testid="user-card"
    >
      <div className="w-[50%]">
        <p className="text-amber-200 text-[18px] mb-1">Owner</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="w-[50%]">
        <p className="text-amber-200 text-[18px] mb-1">Company</p>
        <p>City: {user.address.city}</p>
        <p>Name: {user.company.name}</p>
      </div>
    </div>
  );
}
