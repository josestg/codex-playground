import React from "react"
import {
  Collapse,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
} from "@chakra-ui/react"
import { VscChromeClose } from "react-icons/vsc"
import { LogCard } from "./LogCard"
import { LogHistory } from "./definition/types"
import { logHistories } from "./PlaygroundAction"

interface Props {
  logHistories: LogHistory[]
  isOpen: boolean
  onClose(): void
}

export const Logger: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Collapse in={isOpen}>
      <Flex
        borderRadius="10px"
        direction="column"
        overflow="hidden"
        flex="1"
        padding="2"
        position="relative"
      >
        <Flex
          maxH="320px"
          minH="320px"
          boxShadow="inner"
          background="gray.100"
          overflow="auto"
          padding="4"
          borderRadius="10px"
          direction="column"
          position="relative"
          w="100%"
        >
          <Stack width="100%" spacing="4">
            <Flex align="center" justify="space-between" px="2">
              <HStack>
                <Heading fontSize="sm" textColor="green.600">
                  Passed: 2
                </Heading>
                <Heading fontSize="sm" textColor="red.600">
                  Failed: 1
                </Heading>
              </HStack>
              <IconButton
                boxShadow="md"
                rounded="full"
                aria-label="close"
                size="xs"
                colorScheme="green"
                variant="solid"
                onClick={onClose}
                icon={<VscChromeClose />}
              />
            </Flex>
            {logHistories.map(({ id, status, log }) => (
              <LogCard
                key={id}
                label={"Test Case #" + id}
                status={status}
                log={log}
              />
            ))}
          </Stack>
        </Flex>
      </Flex>
    </Collapse>
  )
}
