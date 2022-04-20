const { default: axios } = require("axios");

const url = "http://ptsv2.com/t/fu807-1554722621/post"

 response;

function setResponse(resp){
  console.log("wheeeeeeee")
  response=resp;
}

function execGet(){
  axios.get(url)
  .then((response)=>{
    setResponse(response);
    console.log(response)
  },(error)=>{
    console.log(error);
  }

  ) 
}

function getGetResp(){
  execGet()
  return response;
}


module.exports = {getGetResp}