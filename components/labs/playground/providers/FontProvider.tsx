import React from "react"

type Context = {
  size: number
  changeSize(size: number): void
}

export const FontContext = React.createContext<Context>({
  size: 16,
  changeSize: (s) => {},
})

export const FontProvider: React.FC<{ size: number }> = ({
  size,
  children,
}) => {
  const [fontSize, setFontSize] = React.useState<number>(size)

  const changeSize = React.useCallback((size: number) => setFontSize(size), [])

  return (
    <FontContext.Provider value={{ size: fontSize, changeSize }}>
      {children}
    </FontContext.Provider>
  )
}
