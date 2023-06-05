import Seo from "@/components/seo";
import Image from "next/image";
import Link from "next/link";

import dogs from "../images/dogs.jpg";
import cats from "../images/cats.jpg";
import rabbits from "../images/rabbits.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 border">
      <Seo pageTitle="Husdyr" pageDescription="Hjemmeside" />
      <h1 className="mt-10">Husdyr</h1>

      <div className="w-1/2 my-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat
          pellentesque adipiscing commodo. Scelerisque eu ultrices vitae auctor
          eu. Eleifend donec pretium vulputate sapien nec sagittis aliquam
          malesuada bibendum. At tempor commodo ullamcorper a lacus vestibulum
          sed arcu non. Nibh nisl condimentum id venenatis a condimentum vitae
          sapien. Penatibus et magnis dis parturient montes nascetur ridiculus.
        </p>
      </div>

      <div className="flex mb-20 space-x-12 border">
        <div className="border">
          <h2>Hunder</h2>
          <Link href="/hund">
            <Image src={dogs} width={300} height={300} alt="hunder" />
          </Link>
        </div>

        <div className="border">
          <h2>Katter</h2>
          <Link href="/katt">
            <Image src={cats} width={300} height={300} alt="katter" />
          </Link>
        </div>

        <div className="border">
          <h2>Kaniner</h2>
          <Link href="/kanin">
            <Image src={rabbits} width={300} height={300} alt="kaniner" />
          </Link>
        </div>
      </div>
    </div>
  );
}
