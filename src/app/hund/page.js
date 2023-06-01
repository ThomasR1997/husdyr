import Seo from "@/components/seo";
import Link from "next/link";

export default function Hund() {
  return (
    <div>
      <Seo pageTitle="Hunder" pageDescription="Side for hunderaser" />
      <h1>Hunder</h1>
      <Link href="/hund/labrador">Labrador</Link>
      <p>Chiuaua</p>
      <p>Shiba Inu</p>
    </div>
  );
}
