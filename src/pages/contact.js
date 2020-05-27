import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Notifications, {notify} from 'react-notify-toast';
import { InputText, TextAreaInput, StyledButton } from "../components/contact/input"
import styled from "@emotion/styled"
import { keyframes } from '@emotion/core'
import tw from 'twin.macro'

import SEO from "../components/seo"
import LogoMessage from "../components/contact/logo"
import ToggleSwitch from "../components/toggleSwitch"
import Loader from "../components/loader"
import MessageButton from "../components/contact/button"

const Contact = ({ location }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        const serviceId = process.env.GATSBY_EMAILJS_SERVICE_ID
        const templateId = process.env.GATSBY_EMAILJS_TEMPLATE_ID
        const userId = process.env.GATSBY_EMAILJS_USER_ID

        sendFeedback(serviceId, templateId, {
          message_html: message,
          from_name: name,
          reply_to: email
        }, userId)

        setName("")
        setEmail("")
        setMessage("")
    }

    const sendFeedback = (serviceId, templateId, variables, userId) => {
        emailjs
          .send(serviceId, templateId, variables, userId)
          .then(res => {
            setLoading(false)
            notify.show("Message sent, Thank you for reaching out :)", "success");
          })
          .catch(err => {
            console.error(
              "Failed. Here some thoughts on the error that occured:",
              err
            )
            setLoading(false)
            notify.show("Error occured while sending, Please try again :(", "error");
          })
    }

    if (isLoading) {
        return <Loader/>
    }
    
    return (
        <>
        <SEO title="Contact" />
        <MainDiv>
            <Notifications />
            <MessageButton location={location}/>
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex pt-1 md:pt2">
                    <LogoMessage />
                    <GrayIcon>
                        <ToggleSwitch layout="w-6 sm:w-8"/>
                    </GrayIcon>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Heading>Let's talk</Heading>
                    <StyedDiv>
                        <InputText 
                            id="name"
                            name="name"
                            type="text"
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            required={true}
                            placeholder="Name"
                        />
                    </StyedDiv>
                    <StyedDiv>
                        <InputText 
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required={true}
                            placeholder="Email"
                        />
                    </StyedDiv>
                    <StyedDiv>
                        <TextAreaInput 
                            id="message"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required={true}
                            placeholder="Message"
                            rows="7"
                        />
                    </StyedDiv>
                    <StyedDiv>
                        <StyledButton 
                            id="send-btn" 
                            type="submit" 
                            label="Send" 
                        />
                    </StyedDiv>
                </Form>
            </div>
        </MainDiv>
        </>
    )   
}

const fadeIn = keyframes`
    from {
    opacity: 0
    }

    to {
    opacity: 1
  }
`

const MainDiv = styled.div`
    ${tw`w-full h-screen`}
    background-color: #6f36bc
`

const Heading = styled.h1`
    ${tw`py-2 md:py-4 lg:py-6 text-xl md:text-2xl lg:text-3xl font-semibold text-white`}
`

const Form = styled.form`
    ${tw`flex flex-col items-center justify-center my-0 md:my-16`}
    opacity: 0;
    animation: ${fadeIn} ease-in 1;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 0.5s;
`

const StyedDiv = styled.div`
    ${tw`py-2 md:py-4 w-full md:w-1/2`}
`

const GrayIcon = styled.div`
    filter: grayscale();
`

export default Contact;
