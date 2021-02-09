import React from "react"
import Head from "next/head"
import styled from "@emotion/styled"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { GoArchive } from "react-icons/go"
import {
  Button,
  Flex,
  Heading,
  HStack,
  SlideFade,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  theme,
  Tr,
} from "@chakra-ui/react"

import MarkdownView from "./MarkdownView"
import { VscBook } from "react-icons/vsc"

interface Props {
  content: string
}

enum Tab {
  DESCRIPTION,
  SUBMISSION,
}

export const Explorer: React.FC<Props> = ({ content }) => {
  const navbarRef = React.useRef<HTMLDivElement>(null)

  const [tab, setTab] = React.useState<Tab>(Tab.DESCRIPTION)

  return (
    <Flex flex="1" direction="column" padding="6">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <Flex ref={navbarRef} p="4" justify="space-between">
        <Button
          leftIcon={<ArrowBackIcon />}
          size="sm"
          variant="outline"
          colorScheme="green"
        >
          Back
        </Button>
        <HStack spacing="4">
          <Button
            leftIcon={<VscBook />}
            variant={tab === Tab.DESCRIPTION ? "solid" : "ghost"}
            onClick={() => setTab(Tab.DESCRIPTION)}
            size="sm"
            colorScheme="green"
          >
            Description
          </Button>
          <Button
            leftIcon={<GoArchive />}
            variant={tab === Tab.SUBMISSION ? "solid" : "ghost"}
            onClick={() => setTab(Tab.SUBMISSION)}
            size="sm"
            colorScheme="green"
          >
            Submission
          </Button>
        </HStack>
      </Flex>

      <Flex
        as={HideScrollBar}
        onScroll={() => {
          navbarRef.current.style.boxShadow = theme.shadows.lg
        }}
        onMouseLeave={() => {
          navbarRef.current.style.boxShadow = ""
        }}
        padding="8"
        direction="column"
        fontSize="sm"
        overflow="auto"
      >
        <SlideFade
          hidden={tab !== Tab.DESCRIPTION}
          in={tab === Tab.DESCRIPTION}
        >
          <Description title="Tanda Kurung Seimbang" content={content} />
        </SlideFade>
        <SlideFade hidden={tab !== Tab.SUBMISSION} in={tab === Tab.SUBMISSION}>
          <Submission />
        </SlideFade>
      </Flex>
    </Flex>
  )
}

const Description: React.FC<{ content: string; title: string }> = ({
  content,
  title,
}) => {
  return (
    <>
      <Heading fontSize="4xl" mb="8">
        {title}
      </Heading>
      <MarkdownView
        lineMB={theme.lineHeights["4"]}
        colorMode="light"
        titleFontSize={"24px"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

const Submission: React.FC = () => {
  return (
    <>
      <Heading fontSize="3xl" mb="8">
        Submission
      </Heading>
      <Flex>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Language</Th>
              <Th isNumeric>Percentages </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{new Date().toLocaleTimeString()}</Td>
              <Td>golang</Td>
              <Td isNumeric>25.4%</Td>
            </Tr>
            <Tr>
              <Td>{new Date().toDateString()}</Td>
              <Td>java</Td>
              <Td isNumeric>30.48%</Td>
            </Tr>
            <Tr>
              <Td>{new Date().toDateString()}</Td>
              <Td>python</Td>
              <Td isNumeric>90.4%</Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </>
  )
}

const HideScrollBar = styled.div`
  &::-webkit-scrollbar {
    display: none; // hide scroll-bar
  }
`
