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
        bg-purple-900 
        border-2 
        border-purple-900 
        w-full
        text-purple-200
        py-2
        px-2 
        md:px-4 
        leading-tight 
        focus:outline-none 
        focus:text-purple-200
        focus:bg-purple-900
        focus:border-purple-900`}
`

const TextArea = styled.textarea`
    ${tw`bg-gray-100 
        appearance-none 
        text-sm
        md:text-base
        text-purple-200
        border-2
        bg-purple-800 
        border-purple-800 
        w-full
        py-2 
        px-2 
        md:px-4 
        leading-tight 
        focus:outline-none 
        focus:text-purple-200 
        focus:bg-purple-800
        focus:border-purple-800`}
`

const Button = styled.button`
    ${tw`text-white
        shadow-sm
        text-sm
        md:text-base
        appearance-none 
        py-2
        md:py-3 
        px-4 
        leading-tight 
        focus:outline-none
        focus:border-purple-700
        bg-gray-500
        hover:bg-gray-600`}
`

export {
    InputText,
    TextAreaInput,
    StyledButton
}
