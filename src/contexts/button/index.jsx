import React, { useContext } from "react"
import { ThemeContext } from "../themes.jsx"
import styled from "styled-components"

const TogglerButton = styled.button`
    transition: 500ms ease-in;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};

    &:hover {
        background-color: ${({ theme }) => theme.hoverBTNbg};
        color: ${({ theme }) => theme.hoverBTNcolor}
    }
`

export const Button = (props) => {
    const {theme} = useContext(ThemeContext)

    return (
        <TogglerButton {...props}/>
    )
}