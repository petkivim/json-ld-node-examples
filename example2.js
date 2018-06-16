const jsonld = require('jsonld')

// A JSON object using ad hoc terminology.
// Ad hoc terminology is mapped to the Schema.org vocabulary using a
// "@context" object. The key/value pairs defined inside @context map directly
// to meaningful URLs at http://schema.org/.
const doc = {
  "@context": {
    "@vocab": "http://schema.org/",
    "first_name": "givenName",
    "last_name": "familyName",
    "alias": "alternateName",
    "email": "email"
  },
  "alias": "jdoe",
  "email": "jdoe@example.com",
  "last_name": "Doe",
  "first_name": "John"
}

// Print out the orignal object
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
