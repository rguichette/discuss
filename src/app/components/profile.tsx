"use client";
import { useSession } from "next-auth/react";
export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return <div>FROM CLIENT: USER SIGNED IN</div>;
  }

  <div>FROM CLIENT: user is not signed in </div>;
}
