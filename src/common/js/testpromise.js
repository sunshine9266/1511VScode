   export const $http = (type,url)=>{		
  		return new Promise(function(resolve,reject){
  			 console.log(type,url)
			var xhr = new XMLHttpRequest();
			xhr.open(type, url);
			xhr.send(null);
			xhr.onreadystatechange = function () {
				console.log(xhr.readyState)
				if (xhr.status == 200 && xhr.readyState == 4) {
					var text = xhr.responseText;
					resolve(text)
				}
			}
		})
   }