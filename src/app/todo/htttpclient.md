HttpClient
1. we use hhtpClient to make request and process response of http calls.
2. we make http calls to server - endpoints or apis.
3. To work with HttpClient we need to import HttpClientModule in our app module - Without this step - our Http will not work
4. we will need to import httpclient in our component if we want to make http calls.
5. as best practice - we usually make Http calls in our services
6. setup a mock server fpr our examples and app
7. to work with json server
 - mock dtaa file

HttpClient

1. HttpClient is used for performing HTTP request and response.
2. service is available in the @angualr/common/http package
3. new httpClient service is included in http Client module which is used to initiate http request and responses in ng apps.
4. httpClientModule needs to be inmported into module. Usually app module.
5.  httpClient also gives other useful funtionality like insecptors, header etc.

HttpClient GET Method
1. Making api calls to retrive data is get method
2. To make call all we need is a endpoint or an API URL
 -get('api-endpoint')
3. we can also pass varoius parameters as option to GET call
 -get('url', options: {});
4. We will use options to pass paramteres like headers, params, responseType, withCredentials etc 
- Get('url', options: {headers: {}, params: {}}) 
5. The response type will be an observable
6. As we have learned in earlier episodes, whenever the response is observable- we have to usbscribe to it in order tp read values 

HttpClient Methods Options

Headers: is of type HttpHeaders
Params: is of type HttpParams


HTTP GET

1. Make usre you have an endpoint/api or an URL which returns u a response data.
2. Import HttpClientModule into our AppMdolue
- if u dont do this step correclty http wont work


HTTP POST METHOD

1. We will use the contact component which we created in previous tutorial

