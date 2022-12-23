// TODO make it so it takes the array of higher level first
// for example:
// Now if you pass {foo: { bar: []}, blah: []} it will return value of bar, but it should return blah as it is higher in order
const traverseObjectForArray = (
  data: unknown,
  defaultReturn: object[] | boolean = [],
): object[] | boolean => {
  if (Array.isArray(data)) return data
  if (typeof data !== 'object') return defaultReturn // || false // <-- I think this false is never reached

  for (const key in data) {
    if (Array.isArray(data[key])) {
      return data[key]
    } else if (typeof data[key] === 'object') {
      const what = traverseObjectForArray(data[key], false) // pass false for defaultReturn so we know it is recursive call and we do not break early
      if (Array.isArray(what)) {
        return what
      }
    }
  }
  return defaultReturn
}

export default traverseObjectForArray
