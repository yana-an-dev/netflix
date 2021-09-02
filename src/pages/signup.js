import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')

    const isInValid = emailAddress === '' || password === '' || firstName === ''

    const handleSignup = (event) => {
        event.preventDefault()
        //call in here to firebase to authenticate the user
        //if there's an error, populate the error state 

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,

                    })
                    .then(() => {
                        setEmailAddress('')
                        setPassword('')
                        setError('')
                        history.push(ROUTES.BROWSE)
                    })
            ).catch((error) => setError(error.message))

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