import React from "react"

import { Flex, HStack, IconButton, Stack } from "@chakra-ui/react"

import { Workspace } from "./Workspace"
import { PlaygroundAction } from "./PlaygroundAction"
import { VscRefresh } from "react-icons/vsc"
import { FontSizeManager } from "./FontSizeManager"
import { LanguageOption } from "./LanguageOption"
import { ThemeOption } from "./ThemeOption"

export const Playground: React.FC = () => {
  console.count("Playground")
  return (
    <Flex
      flex={1}
      boxShadow="2xl"
      direction="column"
      borderRadius="8px"
      overflow="hidden"
    >
      <Flex padding="2" backgroundColor="white" justify="space-between">
        <Stack spacing="2" isInline>
          <LanguageOption />
          <ThemeOption />
          <FontSizeManager />
        </Stack>
        <HStack>
          <IconButton
            colorScheme="green"
            aria-label="reset"
            size="sm"
            icon={<VscRefresh />}
          />
        </HStack>
      </Flex>
      <Workspace />
      <PlaygroundAction />
    </Flex>
  )
}
