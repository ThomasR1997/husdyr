import Seo from "@/components/seo";
import Image from "next/image";

import labrador from "../../../images/labrador.jpg";

export default function Labrador() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-black border bg-slate-100">
      <Seo pageTitle="Labrador" pageDescription="Informasjon om labrador" />
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
          <h1 className="font-bold text-center">Viktig informasjon:</h1> <br />
          <ul className="space-y-10">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
          </ul>
        </div>

        <Image
          className="mb-10 rounded"
          src={labrador}
          width={500}
          height="auto"
          alt="labrador"
        />
      </div>
    </div>
  );
}
