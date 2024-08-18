import Head from "next/head";
import styled from "@emotion/styled";
import Link from "next/link";

const Main = styled.main`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Interview Questions</title>
        <meta name="description" content="Interview Questions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main>
        <Link href="/exercise/greeting">1 - Greeting exercise</Link>
        <Link href="/exercise/css">2 - CSS exercise</Link>
      </Main>
    </>
  );
}
