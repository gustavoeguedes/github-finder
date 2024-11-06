"use client";
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

export function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");
  const handlekeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-md  bg-gray-800">
      <p className="text-xl">Conheça os melhores repositórios</p>
      <div className="bg-gray-950/30">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handlekeyDown}
          value={userName}
          className="bg-transparent outline-none p-2"
        />
        <button onClick={() => loadUser(userName)} className="p-2">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
