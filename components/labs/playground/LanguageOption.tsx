import React from "react"
import { GoCode } from "react-icons/go"

import { MenuOption } from "../../common/MenuOption"
import { SyntaxContext } from "./providers/SyntaxProvider"
import { KNOW_PROGRAMMING_LANGUAGES } from "./definition/constants.d"

export const LanguageOption: React.FC = () => {
  const { syntax, changeSyntax } = React.useContext(SyntaxContext)
  console.count("LANGUAGE SELECTOR")
  return (
    <MenuOption
      icon={<GoCode />}
      value={syntax}
      onSelect={changeSyntax}
      optionList={KNOW_PROGRAMMING_LANGUAGES}
    />
  )
}
