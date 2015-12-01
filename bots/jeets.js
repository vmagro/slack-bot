module.exports = function(message, slackMetadata, callback) {
	if (message.indexOf("yeah jeets") != -1) {
		//append the slack timestamp so it shows the preview every time
		callback({
			text: ':j1::j2::j3::j4::j5:\n:j6::j7::j8::j9::j10:\n:j11::j12::j13::j14::j15:\n:j16::j17::j18::j19::j20:\n:j21::j22::j23::j24::j25:'
		});
	} else {
		callback();
	}
};
