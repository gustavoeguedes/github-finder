import { UserProps } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

export function User({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) {
  return (
    <div className="flex flex-col items-center gap-2 justify-center p-4 bg-gray-800/50  rounded-md mt-4">
      <img src={avatar_url} alt={login} className="w-48 h-48 rounded-full" />
      <h2 className="text-2xl font-semibold" >{login}</h2>
      {location && (
        <p>
          <MdLocationPin size={20} color="white" className="inline-block" />
          <span>{location}</span>
        </p>
      )}
      <div className="flex gap-6 text-center">
        <div className="" >
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link href={`/repos/${login}`} className="p-4 bg-gray-800 rounded-md font-semibold hover:translate-x-4 transition-all">Ver melhores projetos</Link>
    </div>
  );
}
