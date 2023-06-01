import Head from "next/head";

export default function Seo({ pageTitle, pageDescription }) {
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
  </Head>;
}
