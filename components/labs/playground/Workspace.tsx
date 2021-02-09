import React from "react"
import CodeEditor from "react-ace"

import { SourceCodeStorage } from "./storage/SourceCode"

import {
  KNOW_EDITOR_THEMES,
  KNOW_PROGRAMMING_LANGUAGES,
} from "./definition/constants.d"

import { SyntaxContext } from "./providers/SyntaxProvider"
import { ThemeContext } from "./providers/ThemeProvider"
import { FontContext } from "./providers/FontProvider"

KNOW_EDITOR_THEMES.forEach((name) =>
  require("ace-builds/src-noconflict/theme-" + name)
)
KNOW_PROGRAMMING_LANGUAGES.forEach((name) =>
  require("ace-builds/src-noconflict/mode-" + name)
)

export const Workspace: React.FC = () => {
  const { theme } = React.useContext(ThemeContext)
  const { syntax } = React.useContext(SyntaxContext)
  const { size } = React.useContext(FontContext)

  console.count("WORKSPACE")

  const storage = SourceCodeStorage.getInstance()
  storage.setLanguage(syntax)

  return (
    <CodeEditor
      name="SANDBOX_CODE_EDITOR"
      mode={syntax}
      theme={theme}
      width="100%"
      height="100%"
      fontSize={`${size}px`}
      editorProps={{ $blockScrolling: true }}
      setOptions={{ useWorker: false, showPrintMargin: false }}
      onChange={(val) => storage.setSource(val)}
    />
  )
}
