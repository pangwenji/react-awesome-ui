export type State<T> = {
  enabled: T
  disabled: T
}

export type StatedAttribute<T> = T | State<T>

export function isState<T>(state: any): state is State<T> {
  const _state = state as State<T>
  return _state?.enabled != undefined && _state?.disabled != undefined
}

export function resolveState<T>(state: State<T>, disabled?: boolean): T {
  return disabled ? state.disabled : state.enabled
}

export function resolveAttribute<T>(
  attribute: StatedAttribute<T>,
  disabled?: boolean,
): T {
  return isState(attribute) ? resolveState(attribute, disabled) : attribute
}
