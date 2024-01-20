// JavaScript code from the previous response (convertYear function) goes here
function convertYear(year, toJapanese) {
  // Check for valid year input
  if (isNaN(year) || year < 1) {
    return "Invalid year input";
  }
  
  // Conversion logic
  if (toJapanese) {
    // Convert Western year to Japanese year
    // Japanese year starts from 1989-01-08, which is year 1 in the Japanese calendar
    const japaneseEraStart = 1989;
    const japaneseEraOffset = 1988; // Offset for Japanese era starting from 1 instead of 0
    const japaneseYear = year - japaneseEraStart + japaneseEraOffset;
    return japaneseYear;
  } else {
    // Convert Japanese year to Western year
    const japaneseEraStart = 1989;
    const japaneseEraOffset = 1988; // Offset for Japanese era starting from 1 instead of 0
    const westernYear = year - japaneseEraOffset + japaneseEraStart;
    return westernYear;
  }
}

// Event listeners for buttons
document.getElementById("convertToJapanese").addEventListener("click", function() {
  const year = document.getElementById("year").value;
  const convertedYear = convertYear(year, true); // Convert to Japanese
  document.getElementById("result").textContent = "Japanese year: " + convertedYear;
});

document.getElementById("convertToWestern").addEventListener("click", function() {
  const year = document.getElementById("year").value;
  const convertedYear = convertYear(year, false); // Convert to Western
  document.getElementById("result").textContent = "Western year: " + convertedYear;
});
