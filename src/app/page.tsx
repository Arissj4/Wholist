import { UserList } from "@/components/UserList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <main className="w-[50%]">
        <h1 className="text-center text-[30px] m-4">Users List</h1>
        <UserList />
      </main>
    </div>
  );
}
