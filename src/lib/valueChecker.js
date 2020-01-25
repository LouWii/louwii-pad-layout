export const checkValueForEvent = function(sourceState, sourceValueKey, currentValue) {
  return sourceState === null || currentValue !== sourceState[sourceValueKey]
}

export const checkValueForInit = function(sourceState, sourceValueKey, currentValue) {
  return sourceState !== null && sourceState[sourceValueKey] !== currentValue
}