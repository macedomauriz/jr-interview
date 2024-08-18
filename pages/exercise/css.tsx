import Head from "next/head";
import styled from "@emotion/styled";

// Instructions:
// 1. Reproduce the sample image using CSS (let the dot be "floating" anyware)
//
// you CAN google stuff

const Main = styled.main`
  > div {
    padding: 20px;
    border-radius: 5px;
  }
  > div:first-child {
    background: #c6c6c6;
  }
`;

const Title = styled.h1`
  margin: 0 0 20px 0;
`;

const Image = styled.img`
  width: 100%;
`;

export default function Css() {
  return (
    <>
      <Head>
        <title>CSS exercise</title>
        <meta name="description" content="CSS exercise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main>
        <div>
          <Title>Sample:</Title>
          <Image src="/css-exercise-sample.png" alt="Sample" />
        </div>
        <div>
          <Title>CSS:</Title>
          <div>
            {
              // Do it here
            }
          </div>
        </div>
      </Main>
    </>
  );
}
