import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col w-full px-12">
      <div className="flex flex-row justify-end">
        <form className="mx-2" action={signIn}>
          <Button type="submit" className="p-2 my-2">
            Sign In
          </Button>
        </form>
        <form className="mx-2" action={signOut}>
          <Button type="submit" className="p-2 my-2">
            Sign Out
          </Button>
        </form>
      </div>
      {session?.user ? (
        <div>{session.user.name}</div>
      ) : (
        <div>Not signed in</div>
      )}
      <Profile />
    </div>
  );
}
