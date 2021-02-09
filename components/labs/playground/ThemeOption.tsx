import React from "react"
import { VscColorMode } from "react-icons/vsc"

import { KNOW_EDITOR_THEMES } from "./definition/constants.d"
import { ThemeContext } from "./providers/ThemeProvider"
import { MenuOption } from "../../common/MenuOption"

const ThemeOptionComponent: React.FC = () => {
  const { changeTheme, theme } = React.useContext(ThemeContext)
  return (
    <MenuOption
      icon={<VscColorMode />}
      value={theme}
      onSelect={changeTheme}
      optionList={KNOW_EDITOR_THEMES}
    />
  )
}

export const ThemeOption = React.memo(ThemeOptionComponent)
