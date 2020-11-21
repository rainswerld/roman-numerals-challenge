'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const romanNumerals = require('../lib/challenge.js')

describe('Challenge: ', () => {
  describe('arabicToRoman', () => {
    const arabicToRoman = romanNumerals.arabicToRoman

    it('produces simple roman numerals', () => {
      [
        [3, 'III'],
        [20, 'XX'],
        [100, 'C']
      ].forEach((pair) => {
        const arabic = pair[0]
        const roman = pair[1]
        expect(arabicToRoman(arabic)).to.equal(roman)
      })
    })

    it('produces non-subtractive roman numerals', () => {
      [
        [15, 'XV'],
        [6, 'VI'],
        [123, 'CXXIII'],
        [71, 'LXXI']
      ].forEach((pair) => {
        const arabic = pair[0]
        const roman = pair[1]
        expect(arabicToRoman(arabic)).to.equal(roman)
      })
    })

    it('produces subtractive roman numerals', () => {
      [
        [4, 'IV'],
        [9, 'IX'],
        [99, 'XCIX'],
        [405, 'CDV']
      ].forEach((pair) => {
        const arabic = pair[0]
        const roman = pair[1]
        expect(arabicToRoman(arabic)).to.equal(roman)
      })
    })

    it('handles bad input by returning null', () => {
      [0, 0.5, -1, -0.5, '3', null].forEach((badInput) => {
        expect(arabicToRoman(badInput)).to.be.null
      })
    })
  })

  xdescribe('romanToArabic', () => {
    const romanToArabic = romanNumerals.romanToArabic

    it('handles simple roman numerals', () => {
      [
        [3, 'III'],
        [20, 'XX'],
        [100, 'C']
      ].forEach((pair) => {
        const arabic = pair[0]
        const roman = pair[1]
        expect(romanToArabic(roman)).to.equal(arabic)
      })
    })

    it('handles non-subtractive roman numerals', () => {
      [
        [15, 'XV'],
        [6, 'VI'],
        [123, 'CXXIII'],
        [71, 'LXXI']
      ].forEach((pair) => {
        const arabic = pair[0]
        const roman = pair[1]
        expect(romanToArabic(roman)).to.equal(arabic)
      })
    })

    it('handles subtractive roman numerals', () => {
      [
        [4, 'IV'],
        [9, 'IX'],
        [99, 'XCIX'],
        [405, 'CDV']
      ].forEach((pair) => {
        const arabic = pair[0]
        const roman = pair[1]
        expect(romanToArabic(roman)).to.equal(arabic)
      })
    })

    it('handles bad input by returning null', () => {
      ['', 'IIII', 'IM', 'VL', 9, '9', null].forEach((badInput) => {
        expect(romanToArabic(badInput)).to.be.null
      })
    })
  })
})
