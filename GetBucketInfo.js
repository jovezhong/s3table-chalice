var AWS = require('aws-sdk');
var DOC = require('dynamodb-doc');
var dynamo = new DOC.DynamoDB();

exports.handler = (event, context, callback) => {
   var cb = (err, data) => {
      if(err) {
         console.log('error on GetBucketInfo: ',err);
         callback('Unable to retrieve bucket information');
      } else {
         if(data.Item && data.Item.bucket) {
             callback(null, data.Item);
         } else {
             callback(null, {});
         }
      }
   };

   dynamo.getItem({TableName:"BucketInfo", Key:{bucket:event.bucket}}, cb);
};