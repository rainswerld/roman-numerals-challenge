# frozen_string_literal:true

LEGEND = %w[M CM D CD C XC L XL X IX V IV I]
         .zip([1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1])

def arabic_to_roman(num)
  return nil if !(num.is_a? Integer) || num <= 0

  result = ''
  LEGEND.each do |roman, arabic|
    while num >= arabic
      result += roman
      num -= arabic
    end
  end
  result
end

def roman_regex
  /(
  (.)\2{3}               # More than three of any character
  |[^MDCLXVI]                           # Illegal characters
  |I[^XVI]|V[^I]|X[^CLXVI]|L[^XVI]       # Illegal sequences
  |C[^MDCLXVI]|D[^MCLXVI]|M[^MDCLXVI]
  )/x
end

def invalid_numeral_string?(numeral_string)
  !(numeral_string.is_a? String) ||
    numeral_string == '' ||
    numeral_string.match(roman_regex)
end

# converts the roman numerals [I, V, X] into their numeric values [1, 5, 10]
def nums_from(numeral_string)
  numeral_string.chars.map { |char| LEGEND.find { |pair| pair[0] == char }[1] }
end

def roman_to_arabic(numeral_string)
  return nil if invalid_numeral_string?(numeral_string)

  nums = nums_from(numeral_string)
  nums.map.with_index do |num, i|
    num * (i < (nums.length - 1) && num < nums[i + 1] ? -1 : 1)
  end.reduce(:+)
end
