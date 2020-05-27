import React from 'react';
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { keyframes } from '@emotion/core'

const  Loader = () => (
    <MainDiv>
        <LoaderDiv>
            <span className="rounded-full bg-white h-4 w-4 mx-1 inline-block"></span>
            <span className="rounded-full bg-white h-4 w-4 mx-1 inline-block"></span>
            <span className="rounded-full bg-white h-4 w-4 mx-1 inline-block"></span>
        </LoaderDiv>
    </MainDiv>
)   


const MainDiv = styled.div`
    ${tw`flex w-full h-screen fixed left-0 top-0 z-40`}
    background-color: #6f36bc
`

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const LoaderDiv = styled.div`
    ${tw`m-auto`}
    animation: ${bounce} 1s ease infinite;
`

export default Loader;
