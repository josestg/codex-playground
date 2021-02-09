import React from "react"
import { Flex, FlexProps } from "@chakra-ui/react"

interface Props extends FlexProps {}

export const Layout: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Flex direction="column" {...rest}>
      {children}
    </Flex>
  )
}
