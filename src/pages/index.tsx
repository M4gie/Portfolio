import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const Title = styled.h1`
  font-size: 4em;
`

export default function Home() {
  return (
    <Layout>
      <Helmet title="M4gie" />
      <Title>🚧 Build in progress 🚧</Title>
    </Layout>
  )
}
