const formatStringToTitleCase = (text: string): string =>
  text
    .replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2')
    .replace(/([-,_,~,=,+])/g, ' ') // replace unwanted characters with spaces
    .split(' ')
    .map((label: string) => label.charAt(0).toUpperCase() + label.slice(1))
    .join(' ') // make first letters upper case

export default formatStringToTitleCase
