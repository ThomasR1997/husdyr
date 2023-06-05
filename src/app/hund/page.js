import Seo from "@/components/seo";
import Image from "next/image";
import Link from "next/link";

import labrador from "../../images/labrador.jpg";

export default function Hund() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-black border bg-slate-100">
      <Seo pageTitle="Hunder" pageDescription="Side om hunderaser" />
      <div className="flex flex-col items-center w-1/2 md:w-2/3 sm:w-4/5 xs:w-11/12">
        <h1 className="mt-10 text-4xl font-bold ">Labrador</h1>

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
            <h2 className="mb-5 ">Labrador</h2>
            <Link href="/hund/labrador">
              <Image src={labrador} width={300} height="auto" alt="labrador" />
            </Link>
          </div>

          <div className=" md:flex md:flex-col md:items-center md:w-full">
            <h2 className="mb-5">Chiuaua</h2>

            <Image src={labrador} width={300} height="auto" alt="Chiuaua" />
          </div>

          <div className=" md:flex md:flex-col md:items-center md:w-full">
            <h2 className="mb-5">Shiba Inu</h2>

            <Image src={labrador} width={300} height="auto " alt="Shiba Inu" />
          </div>
        </div>
      </div>
    </div>
  );
}
