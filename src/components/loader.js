import React from 'react';
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { keyframes } from '@emotion/core'

import ArcdevLogo from "../images/svgs/arcdev-logo.svg";

const  Loader = () => (
    <MainDiv>
        <LoaderDiv>
            <ArcdevLogo className="w-16 md:w-24"/>
        </LoaderDiv>
    </MainDiv>
)   


const MainDiv = styled.div`
    ${tw`flex w-full h-screen fixed left-0 top-0 z-40`}
    background-color: #211c42;
`

const beat = keyframes`
  {
    0%
    {
      transform: scale( .85 );
    }
    20%
    {
      transform: scale( 1 );
    }
    40%
    {
      transform: scale( .85 );
    }
    60%
    {
      transform: scale( 1 );
    }
    80%
    {
      transform: scale( .85 );
    }
    100%
    {
      transform: scale( .85 );
    }
  }
`

const LoaderDiv = styled.div`
    ${tw`m-auto`}
    animation: ${beat} 2s ease infinite;
`

export default Loader;
