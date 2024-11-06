'use client'
import { useState } from "react";
import { Search } from "./componets/search";
import { UserProps } from "@/types/user";
import { User } from "./componets/user";
import {Error} from "./componets/error";
import next from "next";



export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const loadUser = async(userName: string) => {
    setError(false)
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if(res.status === 404) {
      setError(true);
      setUser(null)
      return;
    }
    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setUser(userData)
  }
  return (
   <div>
    <Search loadUser={loadUser} />
    {user && <User {...user} />}
    {error && <Error />}
   </div>
  );
}
