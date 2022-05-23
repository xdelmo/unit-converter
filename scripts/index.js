// grab the number-el element, store it in a numberToConvert variable
let numberToConvert = document.getElementById("number-el");

// initialize input variable and display it in HTML
let input = 20;
numberToConvert.textContent = input;

//LENGTH

// grab the length-el element, store it in lengthConversion variable
let lengthConversion = document.getElementById("length-el");

// make the length conversions and round at 3 decimal numbers
let resultMetersToFeet = (input * 3.28).toFixed(3);
let resultFeetToMeters = (input * 0.3048).toFixed(3);

// modify paragraph with updated conversions
lengthConversion.textContent =
  input +
  " meters = " +
  resultMetersToFeet +
  " feet | " +
  input +
  " feet = " +
  resultFeetToMeters +
  " meters ";

//VOLUME

// grab the count-el element, store it in a countEl variable
let volumeConversion = document.getElementById("volume-el");

// make the volume conversions and round at 3 decimal numbers
let resultLitersToGallons = (input * 0.264172).toFixed(3);
let resultGallonsToLiters = (input * 3.78541).toFixed(3);

// modify paragraph with updated conversions
volumeConversion.textContent =
  input +
  " liters = " +
  resultLitersToGallons +
  " gallons | " +
  input +
  " gallons = " +
  resultGallonsToLiters +
  " liters ";

//MASS

// grab the count-el element, store it in a countEl variable
let massConversion = document.getElementById("mass-el");

// make the mass conversions and round at 3 decimal numbers
let resultKilogramsToPounds = (input * 2.20462).toFixed(3);
let resultPoundsToKilograms = (input * 0.453592).toFixed(3);

// modify paragraph with updated conversions
massConversion.textContent =
  input +
  " kilograms = " +
  resultKilogramsToPounds +
  " pounds | " +
  input +
  " pounds = " +
  resultPoundsToKilograms +
  " kilograms ";
