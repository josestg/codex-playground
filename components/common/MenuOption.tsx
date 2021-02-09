import React from "react"
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react"

interface MenuOptionProps {
  value: string
  optionList: readonly string[]
  icon: React.ReactElement
  onSelect(value: string): void
}
export const MenuOption: React.FC<MenuOptionProps> = ({
  value,
  optionList,
  onSelect,
  icon,
}) => {
  return (
    <Flex zIndex="100" fontSize="sm">
      <Menu>
        <MenuButton size="sm" fontWeight="600" as={Button} leftIcon={icon}>
          {value}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            title="Language"
            type="radio"
            defaultValue={value}
            onChange={onSelect}
          >
            {optionList.map((option) => (
              <MenuItemOption key={option} value={option}>
                {option}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}
