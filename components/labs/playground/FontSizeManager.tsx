import React from "react"
import {
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"
import { GoTextSize } from "react-icons/go"
import { FontContext } from "./providers/FontProvider"

export const FontSizeManager: React.FC = () => {
  const { size, changeSize } = React.useContext(FontContext)

  return (
    <InputGroup variant="filled" size="sm" width="120px">
      <InputLeftAddon
        borderRadius="md"
        pointerEvents="none"
        children={<GoTextSize />}
      />
      <NumberInput
        borderRadius="md"
        min={14}
        max={32}
        value={size}
        onChange={(_, value) => changeSize(value)}
      >
        <NumberInputField borderRadius="md" borderStartRadius="0" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </InputGroup>
  )
}
