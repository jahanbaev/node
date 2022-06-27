const dom = (selector) =>{
    if(selector.includes("#")){
     return  document.querySelector(selector)
    }else{
return document.querySelectorAll(selector)
    }
}

//dom("#element").style

async function requestData(type, url = '', data = {}) {

  const response = await fetch(url, {
    method: type,
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return await response;
}

//requestData('POST','//url.com', { answer: 42 }).then((data) => {console.log(data.json());});
