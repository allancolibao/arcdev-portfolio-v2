import React from 'react'
import styled from "@emotion/styled"
import tw from 'twin.macro'

const InputText = ({id, name, type, value, onChange, required, placeholder}) => (
    <Input 
        id={id} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        required={required}
        placeholder={placeholder}
    />
)

const TextAreaInput = ({id, name, value, onChange, required, placeholder, rows}) => (
    <TextArea 
        id={id} 
        name={name} 
        value={value} 
        onChange={onChange} 
        required={required}
        placeholder={placeholder}
        rows={rows}
    />
)

const StyledButton = ({id, label, type}) => (

    <Button id={id} 
        type={type} 
    >
        {label}
    </Button>
)

const Input = styled.input`
    ${tw`bg-gray-100 
        text-sm
        md:text-base
        appearance-none 
        border-2 
        border-gray-200 
        rounded
        md:rounded-md 
        w-full
        py-2
        px-2 
        md:px-4 
        text-gray-700 
        leading-tight 
        focus:outline-none 
        focus:bg-white 
        focus:border-purple-500`}
`

const TextArea = styled.textarea`
    ${tw`bg-gray-100 
        appearance-none 
        text-sm
        md:text-base
        border-2 
        border-gray-200 
        rounded-md 
        w-full
        py-2 
        px-2 
        md:px-4 
        text-gray-700 
        leading-tight 
        focus:outline-none 
        focus:bg-white 
        focus:border-purple-500`}
`

const Button = styled.button`
    ${tw`text-white
        shadow-sm
        text-sm
        md:text-base
        appearance-none 
        rounded-md 
        w-full
        py-2
        md:py-3 
        px-4 
        leading-tight 
        focus:outline-none
        focus:border-purple-800`}
    background-color: #361e66;
    border: 1px solid #361e66;
    &:hover {
        background-color: #2d204f
    }
    &:focus {
        background-color: #2d204f
    }
`

export {
    InputText,
    TextAreaInput,
    StyledButton
}
