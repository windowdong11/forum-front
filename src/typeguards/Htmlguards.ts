export function isChangeEvent(e: any): e is React.ChangeEvent {
  return 'target' in e
}