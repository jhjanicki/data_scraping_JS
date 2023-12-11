const elements = [...document.querySelectorAll("#bcd3a7869164d96f004bd1a2b9e1d26dc4bccf7f14b67f65993a4cb3f91ab859 .geolocation-location")]
function convertJsonToCsv(jsonData) {
  // Extracting keys from the first object to create CSV header
  const header = Object.keys(jsonData[0]).join(',');

  // Converting each object in the array to a CSV row
  const csvRows = jsonData.map(obj => Object.values(obj).join(','));

  // Combining header and rows to create the final CSV
  const csv = [header, ...csvRows].join('\n');

  return csv;
}

convertJsonToCsv(elements.map(element => ({
  name: element.getAttribute('data-label'),
  lng: +element.getAttribute('data-lng'),
  lat: +element.getAttribute('data-lat'),
})))





