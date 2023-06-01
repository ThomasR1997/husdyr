import Seo from "@/components/seo";
import Image from "next/image";
import Link from "next/link";

import dogs from "../images/dogs.jpg";
import cats from "../images/cats.jpg";
import rabbits from "../images/rabbits.jpg";

export default function Home() {
  return (
    <div>
      <Seo pageTitle="Husdyr" pageDescription="Hjemmeside" />
      <h1>Husdyr</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <div>
          <h2>Hunder</h2>
          <Link href="/hund">
            <Image src={dogs} width={300} height={300} alt="hunder" />
          </Link>
        </div>

        <div>
          <h2>Katter</h2>
          <Link href="/katt">
            <Image src={cats} width={300} height={300} alt="katter" />
          </Link>
        </div>

        <div>
          <h2>Kaniner</h2>
          <Link href="/kanin">
            <Image src={rabbits} width={300} height={300} alt="kaniner" />
          </Link>
        </div>
      </div>
    </div>
  );
}
