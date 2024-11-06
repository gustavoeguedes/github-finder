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
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin size={20} />
          <span>{location}</span>
        </p>
      )}
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link href={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
}
