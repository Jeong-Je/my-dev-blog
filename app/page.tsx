import { IoBulbOutline } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <div className="pt-32 mx-auto prose prose-a:no-underline max-sm:mx-5">
      <div className="rounded-lg p-4 bg-gray-200">
        ℹ️ 이 곳은 제가 공부한 내용을 정리하고 기록하는 공간입니다.🚀✨
      </div>

      <br />
      <br />
      <br />

      <div className="flex items-center">
        <IoBulbOutline className="text-amber-300 text-5xl" />
        <p className="ml-2">해당 블로그는 아래 기술들로 만들어졌습니다.</p>
      </div>
      <SiTailwindcss color="#06B6D4" size={50} />
      

    </div>
  );
}
