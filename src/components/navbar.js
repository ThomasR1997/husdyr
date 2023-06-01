import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-5 border ">
      <div className="flex space-x-20">
        <h1>Logo</h1>
        <Link href="/">Husdyr</Link>
      </div>
      <div className="space-x-20 border">
        <Link href="/hund">Hunder</Link>
        <Link href="/katt">Katter</Link>
        <Link href="/kanin">Kaniner</Link>
      </div>
    </div>
  );
}
