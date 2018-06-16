const jsonld = require('jsonld')

// A JSON object using Schema.org terms directly.
const doc = {
  "@context": "http://schema.org/",
  "alternateName": "jdoe",
  "email": "jdoe@example.com",
  "familyName": "Doe",
  "givenName": "John"
}

// Print out the object
console.log(JSON.stringify(doc, null, 2))
