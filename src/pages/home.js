import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header'
import { OptForm } from '../components'


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Text>Ready to watch Netflix? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Break />
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}