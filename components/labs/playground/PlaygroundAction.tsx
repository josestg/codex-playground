import React from "react"
import { Button, Flex, HStack, useDisclosure } from "@chakra-ui/react"
import { VscDebugStart, VscRocket } from "react-icons/vsc"

import { LogHistory } from "./definition/types"
import { SourceCodeStorage } from "./storage/SourceCode"
import { Logger } from "./Logger"

// TODO: REMOVE THIS
export const logHistories: LogHistory[] = [
  {
    id: "1",
    status: "passed",
    log: {
      input: "2\n1 2\n3 4\n",
      output: "*##\n***####\n",
      expected: "*##\n***####\n",
    },
  },
  {
    id: "2",
    status: "passed",
    log: null,
  },
  {
    id: "3",
    status: "failed",
    log: {
      input: "1\n1 2\n",
      output: "*##\n***####\n",
      expected: "*##\n",
    },
  },
]

const PlaygroundActionComponent: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = React.useCallback(() => {
    const sourceCodeStorage = SourceCodeStorage.getInstance()
    const source = sourceCodeStorage.getSource()
    const language = sourceCodeStorage.getLanguage()
    console.log({ language, source })
  }, [])

  return (
    <Flex direction="column" background="white">
      <Flex padding="2" justify="flex-end">
        <HStack>
          <Button
            colorScheme="green"
            size="sm"
            leftIcon={<VscDebugStart />}
            onClick={onOpen}
          >
            Run
          </Button>
          <Button
            variant="outline"
            colorScheme="green"
            size="sm"
            leftIcon={<VscRocket />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </HStack>
      </Flex>
      <Logger logHistories={logHistories} isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export const PlaygroundAction = React.memo(PlaygroundActionComponent)
