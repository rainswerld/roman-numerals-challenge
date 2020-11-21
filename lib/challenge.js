'use strict'

const conversions = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

const arabicToRoman = (num) => {
  if (num !== parseInt(num) || num < 1) {
    return null
  }

  return conversions.map((pair) => {
    const arabic = pair[0]
    const roman = pair[1]
    const str = roman.repeat(Math.floor(num / arabic))
    num %= arabic
    return str
  }).join('')
}

const romanToArabic = (numeralString) => {
  console.log(numeralString)
  if (!(typeof numeralString === 'string' || numeralString instanceof String) || // Not a string
    numeralString === '' || // Empty string
    numeralString.match(/(.)\1{3}/) || // More than three of any character
    numeralString.match(/[^MDCLXVI]/) || // Illegal characters
    numeralString.match(/(I[^XVI]|V[^I]|X[^CLXVI]|L[^XVI])/) || // Illegal sequences
    numeralString.match(/(C[^MDCLXVI]|D[^MCLXVI]|M[^MDCLXVI])/)) {
    return null
  }

  return numeralString
    .split('')
    .map((char) => conversions.find((pair) => pair[1] === char)[0])
    .map((num, i, arr) => {
      return num * (((i < arr.length - 1) && (arr[i] < arr[i + 1])) ? -1 : 1)
    })
    .reduce((a, b) => a + b)
}

module.exports = {
  arabicToRoman,
  romanToArabic
}
