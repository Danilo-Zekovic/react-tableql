export const formatStringToTitleCase = (text: string) =>
  text
    .replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2') // insert spaces in between words in case of camel case
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2')
    .replace(/([-,_,~,=,+])/g, ' ') // replace unwanted characters with spaces
    .replace(
      /\w\S*/g,
      word => `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`,
    ) // make first letters upper case
