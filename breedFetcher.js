const request = require('request');

const getArguements = function() {
  const arg = process.argv.slice(2);
  if (arguments.length > 1) {
    console.log("Pls enter only one string");
    process.exit();
  }
  return arg;
};

const requestBreed = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
    if (error) {
      console.log(`Error: ${error}`);
    }
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    if (body === '[]') {
      console.log(`Sorry, ${breed} was not found.`);
      return;
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
    return;
  });
};

const arg = getArguements();
const results = requestBreed(arg[0]);
console.log(results);