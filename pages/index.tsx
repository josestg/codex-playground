import { Flex } from "@chakra-ui/react"
import React from "react"
import { GetServerSideProps } from "next"

import { Explorer, Layout } from "../components"

import { Playground } from "../components/labs"

import { parseMarkdownToHtmlString } from "../libs/markdown/parser"

interface Props {
  htmlString: string
}

const Labs: React.FC<Props> = ({ htmlString }) => {
  return (
    <Layout height="100vh" direction="row" bg="gray.50">
      <Explorer content={htmlString} />
      <Flex flex={1} padding="6">
        <Playground fontSize={16} syntax="golang" theme="gruvbox" />
      </Flex>
    </Layout>
  )
}

export default Labs

import { Q1 } from "../question"

export const getServerSideProps: GetServerSideProps = async () => {
  const buff = Buffer.from(Q1, "base64")
  const markdown = buff.toString("utf-8")
  const htmlString = parseMarkdownToHtmlString(markdown)
  return {
    props: { htmlString },
  }
}
