import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><AiOutlineHome /></Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
