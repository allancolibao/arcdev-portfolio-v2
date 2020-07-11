import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Notifications, {notify} from 'react-notify-toast';
import { InputText, TextAreaInput, StyledButton } from "../components/contact/input"
import styled from "@emotion/styled"
import { keyframes } from '@emotion/core'
import tw from 'twin.macro'

import SEO from "../components/seo"
import LogoMessage from "../components/contact/logo"
import Loader from "../components/loader"
import MessageButton from "../components/contact/button"
import SocialIcon from "../components/social" 

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
        <SEO title="Contact" bodyBackground="#211c42" />
        <MainDiv>
            <Notifications />
            <SocialIcon/>
            <MessageButton location={location}/>
            <div className="px-4 md:px-8">
                <div className="flex py-2 md:py-3">
                    <LogoMessage />
                </div>
                <div className="container mx-auto">
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
    ${tw`w-full mb-6 md:mb-0`}
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

export default Contact;
