import { KNOW_EDITOR_THEMES, KNOW_PROGRAMMING_LANGUAGES } from "./constant"

export type LogStatus = "passed" | "failed"

export type Log = {
  input: string
  output: string
  expected: string
}

export type LogHistory = {
  id: string
  status: LogStatus
  log: Log | null // null when test case is private.
}

export type Config = {
  fontSize: number
  theme: EditorTheme
  syntax: ProgrammingLanguage
}

export type ProgrammingLanguage = typeof KNOW_PROGRAMMING_LANGUAGES[number]
export type EditorTheme = typeof KNOW_EDITOR_THEMES[number]
