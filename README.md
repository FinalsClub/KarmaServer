KarmaServer
===========
TODO: Change the name of this repo

A RESTful document processing server that accepts documents and uses Google Drive to process and return html content


## Installation

    npm install
    
    TODO: Note the issue with creating a token upon file selection to match the request doc and response data

## Documentation

You're reading it!

## Configuration

TODO: Add config instructions for users who setup their own server

Things to include:
   - Whitelist of request / response servers
   - How to register google api auth credentials

### Examples

#### Fetch document html

```bash
wget documents.karmanotes.org/api/v1/:ID.html
```

#### Fetch document text

```bash
wget documents.karmanotes.org/api/v1/:ID.txt
```

#### Fetch document stub (1000 plaintxt characters)

```bash
wget documents.karmanotes.org/api/v1/:ID.stub
```

#### Fetch original document

```bash
wget documents.karmanotes.org/api/v1/:ID
```

#### Upload a document

```bash
wget
    --post-file=:/path/to/file
    --post-data= 'name=:filename&pub_date:1999&client=:karmanotes&copyright=private'
    documents.karmanotes.org/api/v1/upload
```

#### Update a document

```bash
wget
    --post-data='copyright=CC0'
    documents.karmanotes.org/api/v1/update/:ID/:SECRET
```

#### Delete a document

```bash
wget
    documents.karmanotes.org/api/v1/delete/:ID/:SECRET
```

#### List documents

TODO: design the app to this point, see what metadata we want to provide, and then list by that
```bash
wget
```
TODO: there needs to be a list for a given file, reporting what export formats are available along with other relevant meta-data

## Versioning

This library aims to adhere to [Semantic Versioning 2.0.0][semver]. Violations
of this scheme should be reported as bugs. Specifically, if a minor or patch
version is released that breaks backward compatibility, that version should be
immediately yanked and/or a new version should be immediately released that
restores compatibility. Breaking changes to the public API will only be
introduced with new major versions.

[semver]: http://semver.org/

## Contributors

* [Andrew](http://github.com/AndrewMagliozzi)
* [Seth](http://github.com/sethwoodworth)
* [Bob](http://github.com/bobcall)


## Inspiration


## Copyright

Copyright (c) 2013 FinalsClub INC
See [LICENSE][] for details.

[license]: LICENSE.md
