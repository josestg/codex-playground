import React from "react"
import { EditorTheme } from "../definition/types.d"

type Context = {
  theme: EditorTheme
  changeTheme(theme: EditorTheme): void
}

export const ThemeContext = React.createContext<Context>({
  theme: "dracula",
  changeTheme: (t) => {},
})

export const ThemeProvider: React.FC<{ value: EditorTheme }> = ({
  value,
  children,
}) => {
  const [theme, setTheme] = React.useState<EditorTheme>(value)

  const changeTheme = React.useCallback(
    (theme: EditorTheme) => setTheme(theme),
    []
  )

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
