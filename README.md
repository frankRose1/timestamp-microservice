# Timestamp Microservice
A backend project inspired by freeCodeCamp. The idea here was to get familiar with the backend by using Node and Express to set up a simple RESTful API. A user will use endpoint to convert a unix timestamp to a UTC format, or they can convert an ISO-8601 timestamp to both unix and UTC format. The response is in JSON.

## The project guidelines from FCC
1. The API endpoint is GET ```/api/timestamp/:date_string```
2. A date string is valid if can be successfully parsed by new Date(date_string)
    * ISO-8601 (e.g. "2016-11-20") is used because this will ensure an UTC timestamp
3. If the date string is empty it should be equivalent to trigger new Date()
4. If the date string is valid the api returns a JSON having the structure:
    * {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
5. If the date string is invalid the api returns a JSON having the structure:
    * {"error" : "Invalid Date" }

