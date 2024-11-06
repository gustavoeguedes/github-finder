"use client";
import { BackBtn } from "@/app/componets/backBtn";
import { Repo } from "@/app/componets/repo";
import { RepoProps } from "@/types/repo";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Repos() {
  const { username }: {username: string} = useParams();
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  useEffect(() => {
    const loadRepos = async (username: string) => {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();
      console.log(data);
      setRepos(data);
    };
    if (username) {
      loadRepos(username);
    }
  }, []);

  return (
    <div>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios!</p> }
      {repos && repos.length > 0 && (
        <div>
            {repos.map((repo: RepoProps) => (
                <Repo key={repo.name} {...repo}/>
            ))}
        </div>
      )}
    </div>
  );
}
