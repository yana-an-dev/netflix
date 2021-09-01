import React, { useState } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'


export default function Signin() {
    const [error, setError] = useState('')

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}