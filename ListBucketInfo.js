var AWS = require('aws-sdk');
var DOC = require('dynamodb-doc');
var dynamo = new DOC.DynamoDB();

exports.handler = (event, context, callback) => {
   var cb = (err, data) => {
      if(err) {
         console.log('error on ListBucketInfo: ',err);
         callback('Unable to retrieve bucket information');
      } else {
         if(data.Items) {
             callback(null, data.Items);
         } else {
             callback(null, {});
         }
      }
   };

   dynamo.scan({TableName:"BucketInfo"}, cb);
};