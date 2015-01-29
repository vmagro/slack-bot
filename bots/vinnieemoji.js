module.exports = function (message, slackMetadata, callback) {
    if (message.indexOf('vinnie') == message.length - 1) {
        var newMessage = ':v1::v2::v3::v4::v5:\n:v6::v7::v8::v9::v10:\n:v11::v12::v13::v14::v15:\n:v16::v17::v18::v19::v20:\n:v21::v22::v23::v24::v25:\n';
        callback({
            text: newMessage
        });
    }
    callback();
};
