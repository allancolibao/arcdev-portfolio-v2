import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import tw from 'twin.macro'
import { keyframes } from '@emotion/core'


const Skeleton = ({count, layout}) => {

    let i;
    let elements = [];
    for (i = 0; i < count; i++) {
        elements.push(  
            <Loaderbar key={i} className={layout}>
                <LoaderEffect></LoaderEffect>
            </Loaderbar> 
        )
    }

    return(
        <>
           {elements}
        </>
    )
}

const LoaderEffectColorOne = "#BCBCBC42"

const LoaderEffectColorTwo = "#E3E3E3"

const loadingEffect = keyframes`
    0% {
        transform: translateX(0);
    }
    50%,
    100% {
        transform: translateX(15rem);
    }
`

const glowEffect = keyframes`
    0% {
        opacity:50%;
    }
    50%{
        opacity:75%;
    }
    100% {
        opacity:100%;
    }
`

const Loaderbar = styled.div`
    ${tw`bg-gray-500 
    my-2
    w-full
    relative 
    overflow-hidden
    `}
    animation: ${glowEffect} 
    1s 
    linear 
    alternate
    infinite;
`

const LoaderEffect = styled.div`
    ${tw`absolute
    z-20 
    w-8 
    h-4
    opacity-25`}
    background-image: 
        linear-gradient(to right, 
        ${LoaderEffectColorOne}, 
        ${LoaderEffectColorTwo}, 
        ${LoaderEffectColorOne});
    animation: ${loadingEffect} 
    2s 
    infinite 
    linear;
`

Skeleton.propTypes = {
    count: PropTypes.number,
    layout: PropTypes.string
};

export default Skeleton