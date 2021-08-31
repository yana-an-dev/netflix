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

                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch Anywhere. Cancel at anytime.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch Netflix? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Get started</OptForm.Button>
                        <OptForm.Break />
                    </OptForm>
                </Feature>

            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}