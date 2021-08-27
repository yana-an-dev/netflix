import React from "react"
import { Container, Inner, Item, Title } from "./styles/jumbotron"

export default function Jubmotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jubmotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Jubmotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}