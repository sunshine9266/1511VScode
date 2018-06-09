<template>
  <div class="login">
    <div class="login_tltle">
      <img src="../../../../static/back.png" alt="" srcset="">
      <h4>注册</h4>
    </div>
    <form class="" onsubmit="return false">
      <div class="login_Ver">
        <input type="text" class="Verification" placeholder="验证码" v-model.trim="inputPiccode">
        <div class="Ver-num">
          <img data-v-439fd8e1="" :src="picCode" @click="changePicCode">
        </div>
      </div>

      <div class="login_Ver">
        <input type="text" class="tel_num" v-model.trim="inputPhone" placeholder="手机号">
        <button class="btn" @click="getPhoneCode()">获取短息验证码</button>
      </div>

      <div class="login_Ver">
        <input type="text" class="Verification" v-model.trim="inputPhoneCode" placeholder="输入获取短息验证码">
      </div>

      <div class="login_Ver">
        <input type="text" class="Verification" v-model="passwords" placeholder="密码">
      </div>
      <div class="login_Ver">
        <button type="text" class="Verification zc" @click="register()">注册</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  data () {
    return {
			picCode:"",
			inputPiccode:'',
			inputPhone:'',
			flag:false,
			inputPhoneCode:"",
			passwords:''
    }
  },
  created(){
  	//页面刚加载时首次加载图文验证码
	this.picCode = this.config.reqdomain+this.config.picCode+this.config.token;
		console.log(this.picCode);
  },
  methods: {
  	//点击注册的事件
  	register(){
			if(this.passwords==""){
				this.$toast("密码不能为空")
				return;
			}
			this.checkPicCode(()=>{
				if(this.inputPhoneCode!=localStorage.getItem("PhoneCode")){
	  			this.$toast("手机验证码不正确");
					return;
	  		}
	  		this.$router.push({name:"index"});
			});
  	},
  	//检验验证码是否正确的方法
  	checkPicCode(callback){
  		if(this.inputPhone==""){
  			this.$toast("手机号不能为空")
				return;
  		}
  		var phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
			if(!phoneReg.test(this.inputPhone)){
				this.$toast("手机号格式错误")
				return;
			}	
//		判断验证码是否输入正确
			if(this.inputPiccode==""){
				this.$toast("图文验证码不能为空");
				this.flag=false;
				return;
			}else{
				let checkPicCodeUrl = this.config.reqdomain+this.config.checkPicCode+this.config.token;
				//检测验证码的参数
				const params = {vcode:this.inputPiccode};
				console.log(params)
				this.$http(checkPicCodeUrl,'post',(data)=>{
					console.log(data.data.code);
					if(data.data.code==201){
//							图文验证码正确
//							this.$toast("图文验证码输入正确");
								this.flag=true;			
					}
					if(data.data.data.code==200){
//							图文验证码不正确
							this.$toast("图文验证码输入不正确");
							this.flag=false;
							return;
					}
					callback()
					
				},params)
			}	
  	},
  	//点击获取手机验证码的方法
  	getPhoneCode(){
  			this.checkPicCode(()=>{
//				回调函数是在判断完图文验证码是否正确的基础上,进来
  				console.log(this.flag);
					//要在图文验证码正确的前提下,触发我这个方法
					if(!this.flag){
					//果我图文验证码是错误的就退出这个给手机发送短信的方法
						return;
					}
					//发送axios请求给手机发短信
		  		console.log("点击获取手机验证码的方法");
//		  		生成随机数
						var PhoneCode = Math.floor(Math.random()*9000)+1000 ;
						alert("手机验证码为:"+PhoneCode)
						localStorage.setItem("PhoneCode",PhoneCode);
  			})
  			
  	},
//  	判断手机号是否注册过
  	//点击切换图片验证码的方法
		changePicCode(){
			this.picCode = this.config.reqdomain+this.config.picCode+this.config.token +"&time="+ Date.now();
		}
  },
  mounted () {
  }
}
</script>

<style scoped>
.login_tltle {
	border-bottom: 1px solid rgb(240, 240, 240);
}
.login_tltle img {
	position: absolute;
	top: 0.1rem;
	width: 0.8rem;
	height: 0.8rem;
	float: left;
}
h4 {
	text-align: center;
	font-size: 0.35rem;
	line-height: 1rem;
}
form {
	margin-top: 0.5rem;
}
.login_Ver {
	width: 100%;
	height: 0.8rem;
	margin-top: 0.3rem;
}
.Verification {
font-size: .3rem;
text-indent: 1em;
	margin-left: 0.35rem;
	float: left;
	width: 90%;
	height: 100%;
	border: 1px solid #ccc;
	outline: none;
}
.Ver-num {
	position: absolute;
	right: 0.4rem;
	line-height: 0.1rem;
	padding: 0.1rem 0.2rem;
	border-left: 1px solid #e6e6e6;
}
.tel_num {
	margin-left: 0.35rem;
	float: left;
	width: 60%;
	height: 100%;
	border: 1px solid #ccc;
	outline: none;
  text-indent: 1em;
}
.btn {
	width: 30%;
	font-size: 0.3rem;
	height: 0.8rem;
	margin-left: 0.1rem;
	border: none;
	outline: none;
}
.zc {
  font-size: .4rem;
	background: #eb1625;
	color: #ffffff;
}
</style>
