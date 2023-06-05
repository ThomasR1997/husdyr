import Seo from "@/components/seo";
import Image from "next/image";
import Link from "next/link";

import dogs from "../images/dogs.jpg";
import cats from "../images/cats.jpg";
import rabbits from "../images/rabbits.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-black border bg-slate-100">
      <Seo pageTitle="Husdyr" pageDescription="Hjemmeside" />
      <div className="flex flex-col items-center w-1/2 md:w-2/3 sm:w-4/5 xs:w-11/12">
        <h1 className="mt-10 text-4xl font-bold ">Husdyr</h1>

        <div className="my-10 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat
            pellentesque adipiscing commodo. Scelerisque eu ultrices vitae
            auctor eu. Eleifend donec pretium vulputate sapien nec sagittis
            aliquam malesuada bibendum. At tempor commodo ullamcorper a lacus
            vestibulum sed arcu non. Nibh nisl condimentum id venenatis a
            condimentum vitae sapien. Penatibus et magnis dis parturient montes
            nascetur ridiculus.
          </p>
        </div>

        <div className="flex mb-20 space-x-12 text-center md:space-x-0 md:flex-col md:items-center md:space-y-10 ">
          <div className=" md:flex md:flex-col md:items-center md:w-full">
            <h2 className="mb-5 ">Hunder</h2>
            <Link href="/hund">
              <Image
                className="rounded"
                src={dogs}
                width={300}
                height="auto"
                alt="hunder"
              />
            </Link>
          </div>

          <div className=" md:flex md:flex-col md:items-center md:w-full">
            <h2 className="mb-5">Katter</h2>
            <Link href="/katt">
              <Image
                className="rounded"
                src={cats}
                width={300}
                height="auto"
                alt="katter"
              />
            </Link>
          </div>

          <div className=" md:flex md:flex-col md:items-center md:w-full">
            <h2 className="mb-5">Kaniner</h2>
            <Link href="/kanin">
              <Image
                className="rounded"
                src={rabbits}
                width={270}
                height="auto "
                alt="kaniner"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
