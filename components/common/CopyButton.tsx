import React from "react"
import { CopyIcon } from "@chakra-ui/icons"
import { Button, ButtonProps, useClipboard } from "@chakra-ui/react"

interface Props extends ButtonProps {
  content: string
}

export const CopyButton: React.FC<Props> = ({ content, ...btnProps }) => {
  const { hasCopied, onCopy } = useClipboard(content)
  return (
    <Button
      leftIcon={<CopyIcon />}
      variant="solid"
      ml="2"
      size="xs"
      {...btnProps}
      onClick={onCopy}
    >
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  )
}
