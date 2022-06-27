const dom = (selector) =>{
    if(selector.includes("#")){
     return  document.querySelector(selector)
    }else{
return document.querySelectorAll(selector)
    }
}
