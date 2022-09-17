import functions_framework
import json
import requests

@functions_framework.http
## Get weather information for Ang Mo Kio
def hello_get(request):
    res = requests.get("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
    headers = {
        'Access-Control-Allow-Origin' : '*'
    }
    
    if res.ok :
        return (res.json()["items"][0]["forecasts"][0], 200, headers)
    else :
        return ({"error": "weather not found"}, 500, headers)

    """HTTP Cloud Function.
    Args:
        request (flask.Request): The request object.
        <https://flask.palletsprojects.com/en/1.1.x/api/#incoming-request-data>
    Returns:
        The response text, or any set of values that can be turned into a
        Response object using `make_response`
        <https://flask.palletsprojects.com/en/1.1.x/api/#flask.make_response>.
    Note:
        For more information on how Flask integrates with Cloud
        Functions, see the `Writing HTTP functions` page.
        <https://cloud.google.com/functions/docs/writing/http#http_frameworks>
    """


    return 'Hello World!'