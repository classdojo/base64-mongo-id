# Base64 Mongo Id
This library converts mongo ids into base64 strings.  It has no dependencies and works in all browsers (because it doesn't use `atob` and `btoa`, which are not supported in <= IE9).

## Encoding
The chosen base 64 encoding uses `A-Z` for the digits `0-25`, `a-z` for the digits `26-51`, `0-9` for the digits `52-61`, `_` for `62`, and `-` for `63`.  These characters were chosen to match common base 64 encoding schemes, but to be URL-safe.

## Methods
  * `toBase64(mongoId)` - takes a Mongo id and returns a 16-character base 64 string.  Your input must match the regex `^[0-9a-f]{24}$`.
  * `toHex(shortedId)` - takes a 16-character base 64 string and returns a Mongo id.  Your input must match the regex `^[0-9a-zA-Z-_]{16}$`.