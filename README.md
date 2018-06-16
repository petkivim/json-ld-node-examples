# JSON-LD Node Examples

This repository contains some very simple JSON-LD examples implemented in Node.js.
The purpose of the examples is to demonstrate how to use JSON-LD in general
rather than be a JSON-LD programming guide for Node.js.

## Prerequisites

* git
* npm (tested with v6.1.0)
* Node.js (tested with v9.8.0)

## Try it

Clone the repository:

```
git clone https://github.com/petkivim/json-ld-node-examples.git
```

Install dependencies:

```
cd json-ld-node-examples/
npm install
```

Run the examples (`example1.js`, `example2.js`, `example3.js`, `example4.js`):

```
node example1.js
```

## Example 1

[Example 1](example1.js) shows how to create a JSON-LD object that uses the Schema.org vocabulary
directly.

```
{
  "@context": "http://schema.org/",
  "alternateName": "jdoe",
  "email": "jdoe@example.com",
  "familyName": "Doe",
  "givenName": "John"
}
```

## Example 2

[Example 2](example2.js) shows how to map a JSON-LD object that uses ad hoc vocabulary to the
Schema.org vocabulary using a `@context` object. The key/value pairs defined
inside `@context` map directly to meaningful URLs at http://schema.org/.

```
{
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
```

Compacting the document according to Shema.org context translates the ad hoc
terminology to Schema.org terms.

```
{
  "@context": "http://schema.org/",
  "alternateName": "jdoe",
  "email": "jdoe@example.com",
  "familyName": "Doe",
  "givenName": "John"
}
```

## Example 3

[Example 3](example3.js) shows how to retrofit an existing API with JSON-LD without changing
the API itself. The API returns a JSON object that uses ad hoc terminology and
without defined context.

```
{
  "alias": "jdoe",
  "emailAddress": "jdoe@example.com",
  "surname": "Doe",
  "name": "John"
}
```

A separate context definition is needed for the above JSON object. Ad hoc
terminology is mapped to the Schema.org vocabulary and the key/value pairs
map directly to meaningful URLs at http://schema.org/.

```
{
  "@vocab": "http://schema.org/",
  "surname": "givenName",
  "name": "familyName",
  "alias": "alternateName",
  "emailAddress": "email"
}
```

Injecting the defined context to the object and then compacting it according
to Shema.org context translates the ad hoc terminology to Schema.org terms.

```
{
  "@context": "http://schema.org/",
  "alternateName": "jdoe",
  "email": "jdoe@example.com",
  "familyName": "John",
  "givenName": "Doe"
}
```

## Example 4

[Example 4](example4.js) shows how to map data from different sources and
translate ad hoc terminology to Schema.org terms. After the data is normalized,
it can be combined.

**Original values:**

```
Data source 1:
{
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
```

```
Data source 2:
{
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
```

```
Data source 3:
{
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
```

**Normalized values:**

```
Data source 1:
{
  "@context": "http://schema.org/",
  "addressCountry": "fi",
  "addressLocality": "Helsinki",
  "description": "Aka jdoe -=- JSON-LD enthusiast.",
  "name": "John Doe"
}
```

```
Data source 2:
{
  "@context": "http://schema.org/",
  "alternateName": [
    "Johd D.",
    "jdoe"
  ],
  "description": "Innovator and tech freak.",
  "familyName": "Doe",
  "givenName": "John",
  "location": "Helsinki, Uusimaa"
}
```

```
Data source 3:
{
  "@context": "http://schema.org/",
  "familyName": "Doe",
  "givenName": "John",
  "jobTitle": "Technology Superhero"
}
```
