import React from "react"
import { createGlobalStyle } from "styled-components"
import { GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
