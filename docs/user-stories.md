
User Stories
------------
How would KarmaNotes interact with the KarmaServer?
Three upload methods:
1: async fileupload
   a: Dropzone.js
   b: ajaxuploader
2: dropbox
3: no-js fallback
4: [bonus] Google Drive share

Async:

User clicks upload and picks a file
the file multipart upload is pointed at:
$SERVER/api/v1/upload
    --post-file=:/path/to/file
    --post-data= 'name=:filename&pub_date:1999&client=:karmanotes&copyright=private'

After user chooses file, before submit, generate a file-hash-id
this hash identifies the KS file with the KN file
parameter that points to an API endpoint on karmanotes
that karmanotes URL is in the KarmaServer whitelist

KS handles chunked mutli-part upload and writes it to mongodb
KS figures out filetype and uploads file to gDrive
KS wait for gDrive to process file
KS downloads html/text [pdf, &etc]

Server should return to the karmanotes API endpoint
    {file id, secret id, filetype, filename, filesize, 
        html/pdf/text conversion status, file-hash-id}
karmanotes checks the file-hash-id against db Note
If found, combines user-supplied metadata with KS post info
If not found, makes a new 'draft' Note




How would Annotorious / Marginalias interact with the KarmaServer
