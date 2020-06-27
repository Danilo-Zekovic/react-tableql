import { formatStringToTitleCase, traverseObjectForArray } from '../src/utils'

describe('Utils Functions', () => {
  it('formatStringToTitleCase', () => {
    const finalResult = 'Foo Bar'
    expect(formatStringToTitleCase('Foo Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('fooBar')).toBe(finalResult)
    expect(formatStringToTitleCase('FooBar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('Foo bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo_Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo-Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo=Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo+Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo~Bar')).toBe(finalResult)
  })

  it('traverseObjectForArray', () => {
    const emptyArr = []
    const fullArr = [
      { id: 1, text: 'Foo' },
      { id: 2, text: 'Bar' },
    ]
    const objWithNoArr = { id: 3, text: 'Blah' }
    const objWithEmptyArr = { foo: emptyArr }
    const objWithFullArr = { foo: fullArr }
    const objWithNullValue = { id: 'null', foo: fullArr }
    const objWithNestedArr = {
      id: 'null',
      i: { am: { a: { decoy: 'hahaha' } } },
      blah: { bar: { foo: fullArr } },
    }

    expect(traverseObjectForArray(emptyArr)).toBe(emptyArr)
    expect(traverseObjectForArray(fullArr)).toBe(fullArr)
    expect(traverseObjectForArray(objWithEmptyArr)).toBe(emptyArr)
    expect(traverseObjectForArray(objWithFullArr)).toBe(fullArr)
    expect(traverseObjectForArray(objWithNoArr, emptyArr)).toBe(emptyArr)
    expect(traverseObjectForArray(objWithNullValue)).toBe(fullArr)
    expect(traverseObjectForArray(objWithNestedArr)).toBe(fullArr)
    expect(traverseObjectForArray(undefined, emptyArr)).toBe(emptyArr)
    expect(traverseObjectForArray('I am cool', emptyArr)).toBe(emptyArr)
    expect(traverseObjectForArray(1234567890, emptyArr)).toBe(emptyArr)
    expect(traverseObjectForArray(null, emptyArr)).toBe(emptyArr)
  })
})
