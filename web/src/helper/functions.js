const axios = require('axios');

export function removeLastSlash(){
        var url = process.env.REACT_APP_API_BASE_URL;
        if (url.charAt(url.length - 1) === "/"){
            url = url.substr(0, url.length - 1);
        } 
        return url;
}

export async function postAddUrl(data){
    const url = removeLastSlash()+'/add';
      const result =   await axios.post(url, data, {
            'methos': 'POST',
            'Accept': 'application/json',
            'content-type': 'application/json',
        })
        .then(response => { 
            return response.data;
        })
        .catch(error => {
            return {message: error.message, success: false};
        });
        return result;
}

export async function postUniqueCode(data){
    const url = removeLastSlash()+'/add_traffic';
    const result =   await axios.post(url, data, {
          'methos': 'POST',
          'Accept': 'application/json',
          'content-type': 'application/json',
      })
      .then(response => { 
          return response.data;
      })
      .catch(error => {
          return {message: error.message, success: false};
      });
      return result;
}

export function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

export async function getVisitorInfo(data){
    const result = await axios({
        method: 'get',
        url: 'https://ipapi.co/json/'
    })
    .then(function (response) {
         return response.data;
    });
    return result;
}

export async function statsList(data){
    const url = removeLastSlash()+'/stats';
    const result =   await axios.post(url, data, {
          'methos': 'POST',
          'Accept': 'application/json',
          'content-type': 'application/json',
      })
      .then(response => { 
          return response.data;
      })
      .catch(error => {
          return {message: error.message, success: false};
      });
      return result;
}