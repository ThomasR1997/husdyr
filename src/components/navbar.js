import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <Link href="/">Logo</Link>
        <h1>Husdyr</h1>
      </div>
      <div>
        <Link href="/hund">Hund</Link>
        <Link href="/katt">Katt</Link>
        <Link href="/kanin">Kanin</Link>
      </div>
    </div>
  );
}
