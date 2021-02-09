import React from "react"
import { Flex, HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react"

interface Props {}

export const PlaygroundSkeleton: React.FC<Props> = () => {
  return (
    <Flex
      flex="1"
      boxShadow="2xl"
      direction="column"
      borderRadius="8px"
      overflow="hidden"
    >
      <Flex padding="2" backgroundColor="white" justify="space-between">
        <Stack spacing="2" isInline>
          <Skeleton height="30px" width="80px" />
          <Skeleton height="30px" width="100px" />
          <Skeleton height="30px" width="60px" />
        </Stack>
        <HStack>
          <Skeleton
            height="30px"
            width="30px"
            startColor="green.500"
            endColor="teal.500"
          />
        </HStack>
      </Flex>
      <Flex bg="gray.800" direction="column" flex="1" padding="6">
        <SkeletonText
          noOfLines={4}
          w="40%"
          startColor="pink.400"
          endColor="orange.400"
        />
        <SkeletonText
          ml="5%"
          mt={6}
          noOfLines={3}
          w="50%"
          startColor="yellow.400"
          endColor="pink.400"
        />
        <SkeletonText
          ml="10%"
          mt={6}
          noOfLines={4}
          w="30%"
          startColor="blue.400"
          endColor="green.400"
        />
        <SkeletonText
          ml="5%"
          mt={6}
          noOfLines={3}
          w="60%"
          startColor="purple.400"
          endColor="blue.400"
        />
        <SkeletonText
          mt={4}
          noOfLines={2}
          w="40%"
          startColor="green.400"
          endColor="teal.400"
        />
      </Flex>
      <Flex padding="2" backgroundColor="white" justify="space-between">
        <Stack spacing="2" isInline>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
        <HStack>
          <Skeleton
            height="30px"
            width="80px"
            startColor="green.200"
            endColor="green.400"
          />
          <Skeleton
            height="30px"
            width="80px"
            startColor="green.500"
            endColor="teal.500"
          />
        </HStack>
      </Flex>
    </Flex>
  )
}
