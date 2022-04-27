// const requestor = require("../tryjson")
const { default: axios } = require("axios");
const Ajv = require("ajv");

jasmine.defaultTimeoutInterval = 30000;  // see also back/spec/support/jasmine.spec
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000

const url = "http://ptsv2.com/t/fu807-1554722621/post"
const wrongUrl = "http://ptsv2.com/t/fu807-1554722621/posts"



global.username;
global.password;
global.responseGet;
global.responsePost;

// const schema = {
//     type: "object",
//     properties: {
//       username: {
//         type: "string"
//       },
//       password: {
//         type: "string"
//       },
//       targetUrl: {
//         type: "string"
//       },
      
//     },
//     required: [
//         "username",
//         "password",
//         "targetUrl"
//       ],
//       additionalProperties: false
    
//   };

    

describe('api exists', () => {
    it('GET should return 200 response', (done) => {
        console.log("GET should return 200 response")
      axios.get(url)
       .then((response) => {
           responseGet = response.data
           username=response.data.username
           password = response.data.password
            console.log(response.data); 
            expect(response.status).toBe(200); 
            done();
       }),(error)=>{
            console.log(error.data)
        };
    });

    it('GET should return 404 response in case of wrong url', (done) => {
        console.log("GET should return 404 response in case of wrong url")
        axios.get(wrongUrl)
         .then((response) => {
             console.log(response)
         },
         (error) => {
            console.log(error.response.status); 
            console.log(error.response.data); 
            expect(error.response.status).toBe(404); 
            expect(error.response.data).toBe("404 page not found\n")
            done();
         });
      });
      

    it('Post should return 200 in case of right user name and passowrd', (done) =>
    {
        console.log("Post should return 200 in case of right user name and passowrd")
        const data = {
            username: username,
            password: password
        };
        const headers = { 
            'username': username,
            'password': password
        };
        axios.post(url, data, { headers })
            .then((response) => {
                responsePost = response.data
                console.log(response.data); 
                expect(response.status).toBe(200); 
                done();
            }),(error)=>{
                console.log(error.data)
            };
    });

    it('Post should return 403 in case of wrong username and passowrd', (done) =>
    {
        console.log("Post should return 403 in case of wrong username and passowrd")
        const data = {
            username:"mange",
            password:"boss"
        };
        const headers = { 
            'username': "mange",
            'password': "boss"
        };
        axios.post(url, data, { headers })
            .then((response) => {
                console.log(response.data); 
                expect(response.status).toBe(403); 
                done();
            }),(error)=>{
                console.log(error.data)
            };
    });

    it('response body should contain username parameter in case of successful post request', (done) =>
    {
        console.log("response body should contain username parameter in case of successful post request")
        const data = {
            username: username,
            password: password
        };
        const headers = { 
            'username': username,
            'password': password
        };
        axios.post(url, data, { headers })
            .then((response) => {

                
                console.log(response.data.hasOwnProperty("username")); 
                expect(response.data.hasOwnProperty("username")).toBe(true); 

                done();
            }),(error)=>{
                console.log(error.data)
            };
    });

    it('response body should contain password parameter in case of successful post request', (done) =>
    {
        console.log("response body should contain password parameter in case of successful post request")
        const data = {
            username: username,
            password: password
        };
        const headers = { 
            'username': username,
            'password': password
        };
        axios.post(url, data, { headers })
            .then((response) => {

                
                console.log(response.data.hasOwnProperty("password")); 
                expect(response.data.hasOwnProperty("password")).toBe(true); 

                done();
            }),(error)=>{
                console.log(error.data)
            };
    });

    it('response body should contain targetUrl parameter in case of successful post request', (done) =>
    {
        console.log("response body should contain targetUrl parameter in case of successful post request")
        const data = {
            username: username,
            password: password
        };
        const headers = { 
            'username': username,
            'password': password
        };
        axios.post(url, data, { headers })
            .then((response) => {
                
                console.log(response.data.hasOwnProperty("targetUrl")); 
                expect(response.data.hasOwnProperty("targetUrl")).toBe(true); 
                
                done();
            }),(error)=>{
                console.log(error.data)
            };
    });

    

    //   it('GET should return a valid json response', (done) => {
    //     console.log("case 8")
    //     const ajv = new Ajv({allErrors: true});
    //     const validate = ajv.compile(schema)
    //     const valid = validate(responseGet)
    //     console.log(responseGet)
    //     if (!valid) console.log(validate.errors)
        
    // });
})
