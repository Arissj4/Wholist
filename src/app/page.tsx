import { UserList } from "@/components/UserList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>User List</h1>
        <UserList />
      </main>
    </div>
  );
}
