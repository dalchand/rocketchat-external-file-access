const fileAccessTokens = new Mongo.Collection('file_access_token');
fileAccessTokens._ensureIndex({ 'token': 1, 'expiresAt': 1, 'fileId': 1 });

const EXPIRY_TIME = 1000 * 60 * 5;

FileAccessTokens = {

	findOneByFileAndToken: function(fileId, token) {
		const now = Date.now();
		return fileAccessTokens.findOne({ token: token, fileId: fileId, expiresAt: { $gt: now } });
	},

	createNewToken: function(fileId) {
		
		const now = Date.now();
		var expiresAt = now + EXPIRY_TIME;

		var token = Meteor.uuid();

		fileAccessTokens.insert({
			fileId: fileId,
			expiresAt: expiresAt,
			token: token,
			createdAt: now
		});

		return token;
	}

}