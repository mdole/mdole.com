import React from "react"
import styled from "styled-components"
import {
  Box,
  Grid,
  Theme,
  injectGlobalStyles,
  Row,
  Col,
  Serif,
} from "@artsy/palette"
import SEO from "../components/seo"
import { morningCode } from "../poems/code/morning.jsx"
import { morningText } from "../poems/text/morning.jsx"

const { GlobalStyles } = injectGlobalStyles(`
  body {
    background: #000;
  }
`)

const StyledGrid = styled(Grid)`
  color: #fff;
`

const CodePoem = () => (
  <Theme>
    <>
      <GlobalStyles />
      <SEO title="CODE/POEM" />
      <StyledGrid fluid>
        <Row my={4}>
          <Col mx={2}>
            <Box>
              <Serif size={8}>CODE/POEM</Serif>
            </Box>
          </Col>
        </Row>
        <Row my={2}>
          <Col sm={5} mx={2}>
            <Serif size={4}>{morningCode()}</Serif>
          </Col>
          <Col sm={5} mx={2}>
            <Serif size={4}>{morningText()}</Serif>
          </Col>
        </Row>
        <Row my={4}>
          <Col mx={2}>
            <Box>
              This project was presented at the 2019 Artsy salon and was
              inspired by <a href="https://laiyiohlsen.com/">Lai Yi Ohlsen's</a>{" "}
              talk at{" "}
              <a href="https://pioneerworks.org/programs/software-for-artists-day-5/">
                Software for Artists Day 5.
              </a>
            </Box>
          </Col>
        </Row>
      </StyledGrid>
    </>
  </Theme>
)

export default CodePoem
