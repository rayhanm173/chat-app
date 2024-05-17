'use client'
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Dashboard from "@/component/dashboard/Dashboard";

export default function Home() {
  const {data:session}= useSession()

  if(session && session.user)
    {
      return(<>
            <Dashboard />
        </>
        )
    }
  return (
    <div className="container">
      Welcome, It's time to sign in.
      <button onClick={()=>signIn('google')}>Sign in</button>
    </div>
  );
}
