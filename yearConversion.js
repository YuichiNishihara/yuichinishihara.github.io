// JavaScript code from the previous response (convertYear function) goes here
function convertYear(year, era) {
  // Check for valid year input
  if (isNaN(year) || year < 1) {
    return "Invalid year input";
  }
  
  // Conversion logic
  if (era == "western") {
    // Convert Western year to Japanese year
    // Showa starts on 1926 and ends on 1989
    if (year >= 1926 && year <= 1988) {
      const convertedYear = year - 1925;
      return "昭和" + convertedYear + "年";
    // Heisei starts on 1989 and ends on 2019
    } else if (year >= 1989 && year <= 2018) {
      const convertedYear = year - 1988;
      return "平成" + convertedYear + "年";
    } else {
      const convertedYear = year - 2018;
      return "令和" + convertedYear + "年";
    }
  } else if (era == "showa") {
    // Convert Showa to Western year
    const convertedYear = +year + +1926;
    return "西暦" + convertedYear + "年";
  } else if (era == "heisei") {
    // Convert Heisei to Western year
    const convertedYear = +year + +1989;
    return "西暦" + convertedYear + "年";
  } else if (era == "reiwa") {
    // Reiwa to Western year
    const convertedYear = +year + +2019;
    return "西暦" + convertedYear + "年";
  }
}
