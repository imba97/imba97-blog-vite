export function isExternalUrl(url: string): boolean {
  return /^(?:https?:\/\/|\/\/)/.test(url)
}
