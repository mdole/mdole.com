import React from "react"
import styled from "styled-components"
import { Box, Grid, Theme, injectGlobalStyles, Row, Col } from "@artsy/palette"
import SEO from "../components/seo"
import { morningCode } from "../poems/code/morning"
import { morningText } from "../poems/text/morning"

const { GlobalStyles } = injectGlobalStyles(``)
const StyledGrid = styled(Grid)`
  background-color: #000;
  color: #fff;
`

const CodePoem = () => (
  <Theme>
    <>
      <GlobalStyles />
      <SEO title="CODE/POEM" />
      <StyledGrid>
        <Row my={4}>
          <Col>
            <Box>CODE/POEM</Box>
          </Col>
        </Row>
        <Row my={2}>
          <Col sm={6}>{morningCode()}</Col>
          <Col sm={6}>{morningText()}</Col>
        </Row>
        <Row my={4}>
          <Col>
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
