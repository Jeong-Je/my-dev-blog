import {
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiCplusplus,
  SiCsharp,
  SiCsswizardry,
  SiHtml5,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="pt-32 mx-auto prose prose-a:no-underline max-sm:mx-5">
      <div className="rounded-lg p-4 bg-gray-200">
        ℹ️ 이 곳은 제가 공부한 내용을 정리하고
        기록하는 공간입니다.🚀✨
      </div>

      {/* <div className="pt-12">
        <p className="text-sky-400 text-xl my-1">Favorite Langauge</p>
        <div className="flex justify-center space-x-8 max-sm:space-x-1">
          <SiNestjs color="#C93F50" size={50} />
          <SiTypescript color="#4973BD" size={50} />
          <SiJavascript color="#E9D83E" size={50} />
          <SiReact color="#8AD7F9" size={50} />
          <SiCplusplus color="#759AD1" size={50} />
          <SiCsswizardry color="#62AADC" size={50} />
          <SiHtml5 color="#D06036" size={50} />
        </div>
        <p className="text-sky-400 text-xl my-1">Interested Langauge</p>
        <SiCsharp color="#642879" size={50} />
      </div> */}
    </div>
  );
}
