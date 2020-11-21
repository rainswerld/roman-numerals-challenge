require_relative '../lib/challenge.rb'
# frozen_string_literal:true

RSpec.describe 'Challenge: ' do
  describe 'arabic_to_roman' do
    it 'produces simple roman numerals' do
      [3, 20, 100].zip(%w[III XX C]).each do |arabic, roman|
        expect(arabic_to_roman(arabic)).to eql(roman)
      end
    end

    it 'produces non-subtractive roman numerals' do
      [15, 6, 123, 71].zip(%w[XV VI CXXIII LXXI]).each do |arabic, roman|
        expect(arabic_to_roman(arabic)).to eql(roman)
      end
    end

    it 'produces subtractive roman numerals' do
      [4, 9, 99, 405].zip(%w[IV IX XCIX CDV]).each do |arabic, roman|
        expect(arabic_to_roman(arabic)).to eql(roman)
      end
    end

    it 'handles bad input by returning nil' do
      [0, 0.5, -1, -0.5, '3', nil].each do |bad_input|
        expect(arabic_to_roman(bad_input)).to be_nil
      end
    end
  end

  xdescribe 'roman_to_arabic' do
    it 'converts simple roman numerals into arabic numbers' do
      [3, 20, 100].zip(%w[III XX C]).each do |arabic, roman|
        expect(roman_to_arabic(roman)).to eql(arabic)
      end
    end

    it 'converts non-subtractive roman numerals into arabic numbers' do
      [15, 6, 123, 71].zip(%w[XV VI CXXIII LXXI]).each do |arabic, roman|
        expect(roman_to_arabic(roman)).to eql(arabic)
      end
    end

    it 'converts subtractive roman numerals into arabic numbers' do
      [4, 9, 99, 405].zip(%w[IV IX XCIX CDV]).each do |arabic, roman|
        expect(roman_to_arabic(roman)).to eql(arabic)
      end
    end

    it 'handles bad input by returning nil' do
      ['', 'IIII', 'IM', 'VL', 9, '9', nil].each do |bad_input|
        expect(roman_to_arabic(bad_input)).to be_nil
      end
    end
  end
end
