import { RepoProps } from "@/types/repo";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

export function Repo({name, language, html_url, forks_count, stargazers_count}: RepoProps) {
    return (
        <div className="flex flex-col items-center gap-2  flex-1 basis-[500px]  h-56 justify-center p-4 bg-gray-800/50 rounded-md mt-4 text-xl">
            <h3 className="font-semibold text-2xl">{name}</h3>
            <p className="">
                <BsCodeSlash size={24} color="white" className="inline-block" /> {language}
            </p>
            <div className="flex gap-4 text-center">
                <div>
                    <AiOutlineStar size={24} color="white" className="inline-block" /> <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork  size={24} color="white" className="inline-block" /> <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank" className="p-4 bg-gray-800 rounded-md font-semibold hover:translate-x-4 transition-all">
                <RiGitRepositoryLine  size={24} color="white" className="inline-block" /> Ver Código</a>
        </div>
    );
}