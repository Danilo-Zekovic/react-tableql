export const formatStringToTitleCase = (text: string) =>
  text
    .replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2') // insert spaces in between words in case of camel case
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2')
    .replace(/([-,_,~,=,+])/g, ' ') // replace unwanted characters with spaces
    .replace(
      /\w\S*/g,
      (word) =>
        `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`,
    ) // make first letters upper case

// TODO make it so it takes the array of higher level first
// for example:
// Now if you pass {foo: { bar: []}, blah: []} it will return value of bar, but it should return blah as it is higher in order
export const traverseObjectForArray = (
  data: unknown,
  defaultReturn: any[] | boolean = [],
) => {
  if (Array.isArray(data)) return data
  if (typeof data !== 'object') return defaultReturn // || false // <-- I think this false is never reached

  for (let key in data) {
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
