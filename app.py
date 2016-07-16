import json
import boto3
from botocore.exceptions import ClientError
from chalice import Chalice

app = Chalice(app_name='s3table-chalice')
app.debug = True


@app.route('/')
def index():
    #return {'hello': 'world'}
    s3=boto3.resource('s3')
    buckets=[]
    for bucket in s3.buckets.all():
        buckets.append({'name':bucket.name})
    return buckets


# The view function above will return {"hello": "world"}
# whenver you make an HTTP GET request to '/'.
#
# Here are a few more examples:
#
# @app.route('/hello/{name}')
# def hello_name(name):
#    # '/hello/james' -> {"hello": "james"}
#    {'hello': name}
#
# @app.route('/users/', methods=['POST'])
# def create_user():
#     # This is the JSON body the user sent in their POST request.
#     user_as_json = app.json_body
#     # Suppse we had some 'db' object that we used to
#     # read/write from our database.
#     # user_id = db.create_user(user_as_json)
#     return {'user_id': user_id}
#
# See the README documentation for more examples.
#
