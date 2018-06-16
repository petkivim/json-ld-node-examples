const jsonld = require('jsonld')

// Retrofitting an Existing API with JSON-LD.
// A JSON object using ad hoc terminology and without defined context.
const doc = {
  "alias": "jdoe",
  "emailAddress": "jdoe@example.com",
  "surname": "Doe",
  "name": "John"
}

// Separate context definition for the above JSON object.
// Ad hoc terminology is mapped to the Schema.org vocabulary and the key/value
// pairs map directly  to meaningful URLs at http://schema.org/.
const context = {
  "@vocab": "http://schema.org/",
  "surname": "givenName",
  "name": "familyName",
  "alias": "alternateName",
  "emailAddress": "email"
}

// Inject the defined context to the object.
doc["@context"] = context

// Print out the object with injected context.
console.log("------ORIGINAL_BEGINS------")
console.log(JSON.stringify(doc, null, 2))
console.log("------ORIGINAL_ENDS------\n")

// Compacting the document according to Shema.org context translates
// the ad hoc terminology to Schema.org terms.
jsonld.compact(doc, "http://schema.org/", function(err, compacted) {
  console.log("------COMPACTED_BEGINS------")
  console.log(JSON.stringify(compacted, null, 2))
  console.log("------COMPACTED_ENDS------")
})
