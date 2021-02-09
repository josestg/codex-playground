import React from "react"
import { ProgrammingLanguage } from "../definition/types.d"

type Context = {
  syntax: ProgrammingLanguage
  changeSyntax(syntax: ProgrammingLanguage): void
}

export const SyntaxContext = React.createContext<Context>({
  syntax: "golang",
  changeSyntax: (s) => {},
})

export const SyntaxProvider: React.FC<{ value: ProgrammingLanguage }> = ({
  value,
  children,
}) => {
  const [syntax, setSyntax] = React.useState<ProgrammingLanguage>(value)

  const changeSyntax = React.useCallback((newSyntax: ProgrammingLanguage) => {
    setSyntax(newSyntax)
  }, [])

  return (
    <SyntaxContext.Provider value={{ syntax, changeSyntax }}>
      {children}
    </SyntaxContext.Provider>
  )
}
