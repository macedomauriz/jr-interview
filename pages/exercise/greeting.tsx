import Head from "next/head";
import styled from "@emotion/styled";

// Instructions:
// 1. Be able to write your name in the input field
// 2. When you click the button, the greeting should be displayed in the page
// 3. The greeting should be "Hello, <your name>"
// 4. The name should be capitalized
// 5. The greeting should be displayed in a <h2> tag with a font weight of 900
//
// you CAN google stuff

const Main = styled.main`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: #8ca8ff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Greeting() {
  return (
    <>
      <Head>
        <title>Greeting exercise</title>
        <meta name="description" content="Greeting exercise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <input type="text" placeholder="Enter your name" />
        <Button onClick={() => { }}>Submit</Button>
        {
          // HINT: greeting && <>{}</>
        }
      </Main>
    </>
  );
}
