'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return <div>CLIENT: {session.data.user.name}</div>;
  } else {
    return <div>CLIENT: Not signed in</div>;
  }
}
