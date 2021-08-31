import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header'
import { OptForm, Feature } from '../components'


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <Feature>
                        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                        <Feature.Subtitle>Watch Anywhere. Cancel at anytime.</Feature.Subtitle>


                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch Netflix? Enter your email to create or restart your membership.</OptForm.Text>
                    </Feature>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}