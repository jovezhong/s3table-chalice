var AWS = require('aws-sdk');
var DOC = require('dynamodb-doc');
var dynamo = new DOC.DynamoDB();
exports.handler = (event, context,callback) => {
    var item = { bucket: event.bucket,
                 owner:  event.owner || '',
                 note:   event.note || ''
            };

    var cb = (err, data) => {
        if(err) {
            console.log(err);
            callback('unable to update bucket info at this time');
        } else {
            console.log(data);
            callback(null, data);
        }
    };
    dynamo.putItem({TableName:"BucketInfo", Item:item}, cb);
};