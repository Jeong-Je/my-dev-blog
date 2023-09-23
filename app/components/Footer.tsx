import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineHome
} from "react-icons/ai";

export default function Footer() {
  const style = {color:"#6b7280"}
  return (
    <footer className="mt-10 max-w-[650px] max-sm:max-w-[90%] mx-auto  bottom-0 bg-gray-200 rounded-lg shadow m-4">
      <div className="max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
            JeongJeSon
          . Developed with NextJS
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="md:ml-5">
            <a href="/">
              <AiOutlineHome size={20} style={style} />
            </a>
          </li>
          <li className="ml-5">
            <a href="mailto:jeongjeson656@gmail.com">
              <AiOutlineMail size={20} style={style}/>
            </a>
          </li>
          <li className="ml-5">
            <a href="https://github.com/Jeong-Je" target="_blank">
              <AiOutlineGithub size={20} style={style} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
