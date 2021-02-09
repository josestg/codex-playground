import React from "react"
import { Flex, Stack, Text } from "@chakra-ui/react"
import { CopyButton } from "../../common/CopyButton"

interface LogItemProps {
  label: string
  content: string
  isCopyable?: boolean
}
export const LogItem: React.FC<LogItemProps> = ({
  label,
  content,
  isCopyable,
}) => {
  return (
    <Stack>
      <Text fontWeight="bold">{label}</Text>
      <Flex boxShadow="inner" bg="gray.100" padding="2" borderRadius="md">
        <Flex direction="column" flex="1">
          {createMultilineText(content)}
        </Flex>
        {isCopyable && <CopyButton content={content} />}
      </Flex>
    </Stack>
  )
}

const createMultilineText = (content: string) =>
  content.split(/\n/).map((line, index) => <Text key={index}>{line}</Text>)
