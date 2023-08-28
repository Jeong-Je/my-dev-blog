import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineHome
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="max-w-[650px] mx-auto  bottom-0 bg-white rounded-lg shadow m-4">
      <div className="max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
            JeongJeSon
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="md:ml-5">
            <a href="/">
              <AiOutlineHome size={20} />
            </a>
          </li>
          <li className="ml-5">
            <a href="mailto:jeongjeson656@gmail.com">
              <AiOutlineMail size={20}/>
            </a>
          </li>
          <li className="ml-5">
            <a href="https://github.com/Jeong-Je" target="_blank">
              <AiOutlineGithub size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
