# Rocketchat External File Access

This package provide file access tokens for external services for rocketchat. The way it works is it appends a token to file url which can be shared with external service. I use this with rocketchat-facebookbridge.

## Usage

The package provides single methods to get access url for an uploaded file

```
var path = ExternalFileAccess.getFileAccessPath("<fileId>");
var accessUrl = Meteor.absoluteUrl(path);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
