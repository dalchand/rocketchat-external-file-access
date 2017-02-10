const external_url_prefix = '_external-file-access_';

WebApp.connectHandlers.use('/' + external_url_prefix, function(req, res, next) {
			
	var file;

	var match = /^\/([^\/]+)\?/.exec(req.url);

	if (match[1]) {

		file = RocketChat.models.Uploads.findOneById(match[1]);

		if (file) {

			if(typeof req !== 'undefined' && typeof req.query !== 'undefined') {
				
				var access_token = req.query.access_token;

				if(!(access_token && FileAccessTokens.findOneByFileAndToken(file._id, access_token))) {
					res.writeHead(403);
					res.end();
					return false;
				}

			}

			return FileUpload.get(file, req, res, next);
		}
	}

	res.writeHead(404);
	res.end();
	return;
});

ExternalFileAccess = {
	getFileAccessPath: function(fileId) {
		var token = FileAccessTokens.createNewToken(fileId);
		return external_url_prefix + '/' + fileId + '?access_token=' + encodeURIComponent(token);
	}
}