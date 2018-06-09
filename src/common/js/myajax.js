import Axios from 'axios'
function myAjax(url,type,callback,data=''){
  let params;
  if(data!=''){
  	//URLSearchParams插件    处理请求参数的
    params = new URLSearchParams();
    for(let i in data){
      params.append(i,data[i]);
    }
  }
  Axios({
    method: type,
    url: url,
    data:params
  }).then((res)=>{
    if(res.request.readyState==4&&res.status==200) {
        callback(res)
    }
  });
}
export{
  myAjax
}
