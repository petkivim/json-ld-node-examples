const jsonld = require('jsonld')

// Normalize data from three different people-information-providers.
// Each provider uses different ad hoc key names. Site-specific custom @context
// is used to map their key names to the Schema.org standard URLs.
const doc1 = {
  "@context": {
    "@vocab": "http://schema.org/",
    "city": "addressLocality",
    "country": "addressCountry",
    "bio": "description",
    "name": "name"
  },
  "name": "John Doe",
  "country": "fi",
  "bio": "Aka jdoe -=- JSON-LD enthusiast.",
  "city": "Helsinki"
}

const doc2 = {
  "@context": {
    "@vocab": "http://schema.org/",
    "first_name": "givenName",
    "last_name": "familyName",
    "nickname": "alternateName",
    "screen_name": "alternateName",
    "description": "description",
    "location": "location"
  },
  "first_name": "John",
  "last_name": "Doe",
  "nickname": "Johd D.",
  "screen_name": "jdoe",
  "location": "Helsinki, Uusimaa",
  "description": "Innovator and tech freak."
}

const doc3 = {
  "@context": {
    "@vocab": "http://schema.org/",
    "firstName": "givenName",
    "lastName": "familyName",
    "headline": "jobTitle"
  },
  "firstName": "John",
  "headline": "Technology Superhero",
  "lastName": "Doe"
}

async function compact(doc, name) {
  const compacted = await jsonld.compact(doc, "http://schema.org/")
  console.log(`------COMPACTED_BEGINS (${name})------`)
  console.log(JSON.stringify(compacted, null, 2))
  console.log("------COMPACTED_ENDS------")
  return compacted
}

const doc1Compacted = compact(doc1, "doc1")
const doc2Compacted = compact(doc2, "doc2")
const doc3Compacted = compact(doc3, "doc3")
