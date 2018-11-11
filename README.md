# Athene

Night watch driver.

api routes are exported through `/athene`

_Generate certificates for https_
`openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`

## Routes

POST `/athene/text`

```json
{
  "number": "7869543051",
  "data": "bien super nice"
}
```
