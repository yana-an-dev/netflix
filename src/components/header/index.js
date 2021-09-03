import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import { Link, Group, Background, Container, Text, Logo, ButtonLink } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background>
        : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}


Header.Group = function HeaderGround({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}
// create a new element called logo
//use ReactRouterLink 
//pass the children as a child to ReactRouterLink
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>)
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}
Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}