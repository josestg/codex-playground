export function encode(text: string): string {
  return atob(text)
}

export function decode(base64Text: string): string {
  return btoa(base64Text)
}
