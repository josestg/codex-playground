import { ProgrammingLanguage } from "../definition/types.d"

// SINGLETON
export class SourceCodeStorage {
  private static instance: SourceCodeStorage = null
  private language: ProgrammingLanguage
  private source: string

  constructor(language: ProgrammingLanguage, source: string) {
    this.language = language
    this.source = source
  }

  public static initialize(language: ProgrammingLanguage, source: string) {
    SourceCodeStorage.instance = new SourceCodeStorage(language, source)
  }

  public static getInstance(): SourceCodeStorage {
    if (SourceCodeStorage.instance === null) {
      SourceCodeStorage.initialize("golang", "")
    }

    return SourceCodeStorage.instance
  }

  public setSource(source: string) {
    this.source = source
  }

  public setLanguage(language: ProgrammingLanguage) {
    this.language = language
  }

  public getSource(): string {
    return this.source
  }

  public getLanguage(): string {
    return this.language
  }

  public reset() {
    this.source = ""
    this.language = "golang"
  }
}
