export function generateId(): string {
  return `e_${crypto.randomUUID().replace(/-/g, '').slice(0, 12)}`
}
