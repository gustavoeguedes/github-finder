import { RepoProps } from "@/types/repo";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

export function Repo({name, language, html_url, forks_count, stargazers_count}: RepoProps) {
    return (
        <div>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash /> {language}
            </p>
            <div>
                <div>
                    <AiOutlineStar /> <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork /> <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank">
                <RiGitRepositoryLine /> Ver Código</a>
        </div>
    );
}