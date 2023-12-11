# Example of how to use the browser to get datasets from a website

## Example website
### Description
The government of Guyana released data on the list of oil wells.  However there is no option to download the oil blocks as seen on the map, and the data released does not include the latitude and longitude.
### URL
https://petroleum.gov.gy/well-activities

## Oil bloacks geojson
This one is more straightforward. Use devtools, under the Network tab, go to Fetch/XHR, and there is a file called Oil-Blocks-merged.geojson, you can click on it to go to this url: https://petroleum.gov.gy/sites/default/files/geojson/Oil-Blocks-merged.geojson

## Data points lat / lon
Use the code in the script file in this repo, type it directly in the console to get an outputed csv file including name, latitude and longitude.
Note that the ID may vary depending on when you access the site, so make sure to replace the id with the parent element of the ".geolocation-location" data points
