import React from "react"
import {
  Collapse,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

import {
  ArrowUpDownIcon,
  CheckCircleIcon,
  LockIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons"

import { LogItem } from "./LogItem"
import { Log, LogStatus } from "./definition/types.d"

interface LogCardProps {
  label: string

  status: LogStatus
  log: Log
}

export const LogCard: React.FC<LogCardProps> = ({ status, label, log }) => {
  const { isOpen, onToggle } = useDisclosure()

  const isPassed = status === "passed"
  const textColor = isPassed ? "green.600" : "red.500"
  const icon = isPassed ? CheckCircleIcon : WarningTwoIcon

  return (
    <Flex bg="white" boxShadow="md" padding="1" borderRadius="8px">
      <Flex direction="column" padding="1" paddingX="3" flex="1">
        <Flex align="center" justify="space-between">
          <HStack color={textColor}>
            <Icon as={icon} spacing={2} />
            <Heading fontSize="sm">{label}</Heading>
          </HStack>
          {!!log ? (
            <IconButton
              aria-label="toggle logs"
              size="xs"
              variant="ghost"
              onClick={onToggle}
              icon={<ArrowUpDownIcon />}
            />
          ) : (
            <Icon as={LockIcon} padding="1px" mx="1" size="xs" />
          )}
        </Flex>

        {!!log && (
          <Collapse in={isOpen}>
            <Stack spacing="2" mt="2" fontSize="sm">
              <LogItem label="Input:" content={log.input} isCopyable />
              <LogItem label="Output:" content={log.output} />
              {!isPassed && !!log.output && (
                <LogItem label="Expected:" content={log.expected} />
              )}
            </Stack>
          </Collapse>
        )}
      </Flex>
    </Flex>
  )
}
