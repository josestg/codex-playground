import React from "react"
import dynamic from "next/dynamic"

import { PlaygroundSkeleton } from "./playground/PlaygroundSkeleton"
import { FontProvider } from "./playground/providers/FontProvider"
import { SyntaxProvider } from "./playground/providers/SyntaxProvider"
import { ThemeProvider } from "./playground/providers/ThemeProvider"
import { Config } from "./playground/definition/types.d"

const DynamicPlayground = dynamic(
  () => import("./playground/Playground").then((mod) => mod.Playground),
  {
    ssr: false,
    loading: ({ error }) => {
      console.log(error)
      return <PlaygroundSkeleton />
    },
  }
)

export const Playground: React.FC<Config> = ({ fontSize, syntax, theme }) => (
  <SyntaxProvider value={syntax}>
    <FontProvider size={fontSize}>
      <ThemeProvider value={theme}>
        <DynamicPlayground />
      </ThemeProvider>
    </FontProvider>
  </SyntaxProvider>
)
