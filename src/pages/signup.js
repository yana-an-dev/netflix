import React, { useState } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')

    const isInValid = emailAddress === '' || password === '' || firstName === ''

    const handleSignup = (event) => {
        event.preventDefault()
        //call in here to firebase to authenticate the user
        //if there's an error, populate the error state 

    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Text>
                            Create a Password to start your membership.
                        </Form.Text>

                        <Form.Input
                            placeholder="FirstName"
                            type="name"
                            value={firstName}
                            autoComplete="off"
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="password"
                            type="password"
                            value={password}
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit disabled={isInValid} type="submit">
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user? <Form.Link to='/sign in'>Sign in here.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            Just a few more steps and you're finished!<br />
                        We hate paperwork, too.
                        </Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )

}