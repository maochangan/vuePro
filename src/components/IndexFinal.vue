<template>
  <div id="TestNav">
    <div class="nav-less">
      <ul class="less-left">
        <li>{{'地点：'+address}}</li>
        <li class="hover-hand" @click="toUserInfoPage()">{{loginInfo}}</li>
        <li class="hover-hand" @click="toRegisterPage()">免费注册</li>
        <li class="hover-hand" @click="toContactPage()">联系我</li>
      </ul>
      <ul class="less-right">
        <li class="hover-hand" @click="toUserCenterPage()">用户中心</li>
        <li class="hover-hand" @click="toUserMessagePage()">我的消息</li>
        <li class="hover-hand" @click="toUserCollectPage()">我的收藏</li>
        <li class="hover-hand" @click="toUserListPage()">我的订单</li>
      </ul>
    </div>
    <div class="nav">
      <div class="logo"><img class="logo-img" alt="logo.png" src="../assets/css/logo.png" /></div>  
      <router-link to="/" class="nav-btn" tag="span">主页</router-link>
      <router-link to="/second" class="nav-btn" tag="span">Second</router-link>
      <router-link to="/third" class="nav-btn" tag="span">Third</router-link>
      <router-link to="/fourth" class="nav-btn" tag="span">Fourth</router-link>
      <router-link to="/fifth" class="nav-btn" tag="span">Fifth</router-link>
      <router-link to="/sixth" class="nav-btn" tag="span">Sixth</router-link>
    </div>
    <!-- 模态框 -->
    <div class="login-div" v-show="isShow">
      <i @click="closeLoginModel()" class="glyphicon glyphicon glyphicon-remove login-close-img"></i>
      <br />
      <div>
        <ul class="login-or-regist">
          <li @click="choiceLogin()" :class="[activeOne]">登入</li>
          <li @click="choiceRegist()" :class="[activeTwo]">注册</li>
        </ul>
      </div>
      <div class="form-input" v-show="isLoginShow">
        <br />
        <br />
        <input type="text" v-model="userName" placeholder="用户名" @blur="checkUserName()"/>
        <i :class="[actTure]" id="tuer-false-img"></i>
        <br/>
        <input type="password" v-model="userPsd" placeholder="密码" />
        <br />
        <div class="user-server">
          <label><input @click ="setCookie()" type="checkbox" style="width:13px; height:13px; margin-left: -230px;"  />&nbsp;记住密码</label>
        </div>
        <br />
        <input type="button" value="登入" @click="userLoginByNameWithPsd()" />
        <br />
        <div class="login-by-another">
          <img id="qqLoginBtn" @click="toQQLogin()" class="qq">
          <img class="weixin">
          <img class="weibo">
        </div>
        <br />
        <a href="#" style="margin-left:250px">忘记密码</a>
        <br />
      </div>

      <div class="form-input" v-show="isRegistShow">
        <input type="text" v-model="userMobile" placeholder="手机号" @blur="checkMobile()"/>
        <i :class="[mobileCheck]" id="mobile-check"></i>
        <br/>
        <input type="text" v-model="mobileCode" placeholder="验证码" style="width:206px"/>
        <input id="sendCodeBtn" type="button" :value='getCode' style="width:90px ; background-color: red; opacity: 0.7;" @click="pushToGetCode()" />
        <br/>
        <input type="text" v-model="userName" placeholder="用户名" @blur="checkUserNameByRegist()"/>
        <i :class="[userNameCheck]" id="user-name-check"></i>
        <br/>
        <input type="password" v-model="userPsd" placeholder="密码" />
        <br />
        <input type="password" v-model="checkUserPsd" placeholder="确认密码" @keyup="checkPassword()"/>
        <i :class="[passwordCheck]" id="password-check"></i>
        <br />
        <div class="user-server">
          <label><input id="checkBoxChecked" type="checkbox" style="width:13px; height:13px;" /><span>&nbsp;我已仔细阅读并接受<a href="#">XXX用户服务条款</a></span></label>
        </div>
        <input type="button" value="注册" @click="toUserRegistService()"/>
        <br />
      </div>
    </div>
    <router-view/>
    <footer>
      <div class="footer-nva">
        <ul class="footer-nav-ul">
          <li><a href="#">关于我们</a></li>
          <li><a href="#">广告联合</a></li>
          <li><a href="#">免责申明</a></li>
          <li><a href="#">网站地图</a></li>
          <li><a href="#">投诉建议</a></li>
          <li><a href="#">在线投稿</a></li>
        </ul>
        <span><img src="../assets/css/logo.png" class="footer-span-img" /> &nbsp; &nbsp; 备案号: 20180312</span>
        <br />
        <br />
        <span class="footer-span">©CopyRight 2006-2018 ZGYSRC.NET Inc All Rights Reserved. XXX科技有限公司 版权所有</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TestNav",
  data() {
    return {
      loginInfo: "请登录",
      address: "",
      checkSession: false,
      isShow: false,
      userName: "",
      userPsd: "",
      userMobile: "",
      checkUserPsd: "",
      mobileCode: "",
      isRegistShow: false,
      isLoginShow: true,
      getCode: "获取验证码",
      actTure: "",
      mobileCheck: "",
      userNameCheck: "",
      passwordCheck: "glyphicon glyphicon-remove",
      activeOne: "",
      activeTwo: "",
      InterValObj: ""
    };
  },
  mounted: function() {
    this.checkSessionFun();
    this.getUserLoginAddress();
  },
  methods: {
    toQQLogin(){
      QC.Login({
        btnId:"qqLoginBtn"	//插入按钮的节点id
      });
    },
    getUserLoginAddress() {
      this.$http
        .get(this.httpRequestAddress + "userController/getUserLoginAddress")
        .then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.message;
            if (resCode === 100) {
              this.address = res.data.extend.address;
            } else if (resCode === 200) {
              this.address = res.data.extend.address;
            } else {
              this.address = "系统异常！";
            }
          },
          errres => {
            this.address = "请求失败！";
          }
        );
    },
    pushToGetCode() {
      if (this.userMobile.search(/^1[3|4|5|8][0-9]\d{4,8}$/)) {
        this.$toast.top("手机号不正确！");
      } else {
        this.getCode = 30;
        $("#sendCodeBtn").attr("disabled", "true");
        $("#sendCodeBtn").css("background-color", "white");
        $("#sendCodeBtn").css("color", "black");
        this.InterValObj = window.setInterval(this.setRemainTime, 1000);
        this.$http
          .get(
            this.httpRequestAddress +
              "userController/getMobileCodeByMobile?mobile=" +
              this.userMobile
          )
          .then(
            res => {
              var resCode = res.data.code;
              var resMsg = res.data.message;
              if (resCode === 100) {
                this.$toast.top(res.data.extend.msg);
              } else {
                this.$toast.top(res.data.extend.msg);
              }
            },
            errres => {
              this.$toast.top("请求失败！");
            }
          );
      }
    },
    setRemainTime() {
      if (this.getCode == 0) {
        window.clearInterval(this.InterValObj);
        $("#sendCodeBtn").removeAttr("disabled");
        $("#sendCodeBtn").css("color", "white");
        $("#sendCodeBtn").css("background-color", "red");
        this.getCode = "获取验证码";
      } else {
        this.getCode--;
      }
    },
    toUserInfoPage() {
      if (this.checkSession) {
        this.$http
          .get(this.httpRequestAddress + "userController/userLogout")
          .then(
            res => {
              var resCode = res.data.code;
              var resMsg = res.data.message;
              if (resCode === 100) {
                this.$toast.top("退出成功！");
                this.checkSessionFun();
              } else {
                this.$toast.top("系统异常！");
              }
            },
            errres => {
              this.$toast.top("请求失败！");
            }
          );
      } else {
        this.isShow = true;
        this.choiceLogin();
      }
    },
    closeLoginModel() {
      this.isShow = false;
    },
    toRegisterPage() {
      this.activeOne = "";
      this.activeTwo = "active-choise";
      this.isShow = true;
      this.isRegistShow = true;
      this.isLoginShow = false;
    },
    toContactPage() {
      //TODO
      this.$toast.top("跳转联系！");
    },
    toUserCenterPage() {
      if (this.checkSession) {
        //TODO
        this.$toast.top("跳转个人中心");
      } else {
        this.toUserInfoPage();
      }
    },
    toUserMessagePage() {
      if (this.checkSession) {
        //TODO
        this.$toast.top("跳转消息");
      } else {
        this.toUserInfoPage();
      }
    },
    toUserCollectPage() {
      if (this.checkSession) {
        //TODO
        this.$toast.top("跳转收藏");
      } else {
        this.toUserInfoPage();
      }
    },
    toUserListPage() {
      if (this.checkSession) {
        //TODO
        this.$toast.top("跳转订单");
      } else {
        this.toUserInfoPage();
      }
    },
    checkSessionFun() {
      this.$http
        .get(this.httpRequestAddress + "userController/getTestSession")
        .then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.message;
            if (resCode === 100) {
              this.checkSession = true;
              this.loginInfo = res.data.extend.user.userName + " 点我" + "登出";
            } else {
              this.checkSession = false;
              this.loginInfo = "请登录";
            }
          },
          errres => {
            this.$toast.top("请求失败！");
          }
        );
    },
    choiceLogin() {
      this.activeOne = "active-choise";
      this.activeTwo = "";
      this.isLoginShow = true;
      this.isRegistShow = false;
      this.userName = "";
      this.userPsd = "";
    },
    choiceRegist() {
      this.activeOne = "";
      this.activeTwo = "active-choise";
      this.isLoginShow = false;
      this.isRegistShow = true;
      this.userName = "";
      this.userPsd = "";
    },
    userLoginByNameWithPsd() {
      if (this.userName == "" || this.userPsd == "") {
        this.$toast.top("用户名密码不能空！");
      } else {
        this.$http({
          method: "post",
          url:
            this.httpRequestAddress + "userController/userLoginByNameWithPsd",
          params: {
            userName: this.userName,
            password: this.userPsd
          }
        }).then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.extend.msg;
            if (resCode === 100) {
              this.$toast.top(resMsg);
              this.checkSessionFun();
              this.isShow = false;
            } else {
              this.$toast.top(resMsg);
            }
          },
          errres => {
            this.$toast.top("请求失败！");
          }
        );
      }
    },
    setCookie() {
      var date = new Date();
      date.setDate(date.getDate() + 7);
      document.cookie = "user" + "=" + this.userName + ";expires=" + date;
      document.cookie = "psd" + "=" + this.userPsd + ";expires=" + date;
    },
    checkUserName() {
      this.$http
        .get(
          this.httpRequestAddress +
            "userController/checkUserName?userName=" +
            this.userName
        )
        .then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.message;
            if (this.userName == "") {
              this.actTure = "glyphicon glyphicon-remove";
            } else {
              if (resCode === 200) {
                this.actTure = "glyphicon glyphicon-ok";
              } else {
                this.actTure = "glyphicon glyphicon-remove";
              }
            }
          },
          errres => {
            this.$toast.top("请求失败！");
          }
        );
    },
    checkMobile() {
      if (this.userMobile.search(/^1[3|4|5|8][0-9]\d{4,8}$/)) {
        this.mobileCheck = "glyphicon glyphicon-remove";
      } else {
        this.$http
          .get(
            this.httpRequestAddress +
              "userController/checkMobileNum?mobileNum=" +
              this.userMobile
          )
          .then(
            res => {
              var resCode = res.data.code;
              var resMsg = res.data.message;
              if (this.userMobile == "") {
                this.mobileCheck = "glyphicon glyphicon-remove";
              } else {
                if (resCode === 100) {
                  this.mobileCheck = "glyphicon glyphicon-ok";
                } else {
                  this.mobileCheck = "glyphicon glyphicon-remove";
                }
              }
            },
            errres => {
              this.$toast.top("请求失败！");
            }
          );
      }
    },
    checkUserNameByRegist() {
      this.$http
        .get(
          this.httpRequestAddress +
            "userController/checkUserName?userName=" +
            this.userName
        )
        .then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.message;
            if (this.userName == "") {
              this.userNameCheck = "glyphicon glyphicon-remove";
            } else {
              if (resCode === 100) {
                this.userNameCheck = "glyphicon glyphicon-ok";
              } else {
                this.userNameCheck = "glyphicon glyphicon-remove";
              }
            }
          },
          errres => {
            this.$toast.top("请求失败！");
          }
        );
    },
    checkPassword() {
      if (this.userPsd === this.checkUserPsd && this.userPsd != "") {
        this.passwordCheck = "glyphicon glyphicon-ok";
      } else {
        this.passwordCheck = "glyphicon glyphicon-remove";
      }
    },
    toUserRegistService() {
      if (
        this.mobileCode != "" &&
        $("#checkBoxChecked").is(":checked") &&
        this.mobileCheck == "glyphicon glyphicon-ok" &&
        this.userNameCheck == "glyphicon glyphicon-ok" &&
        this.passwordCheck == "glyphicon glyphicon-ok"
      ) {
        this.$http({
          method: "post",
          url: this.httpRequestAddress + "userController/userRegister",
          params: {
            userName: this.userName,
            password: this.userPsd,
            mobile: this.userMobile,
            age: 18
          }
        }).then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.extend.msg;
            if (resCode === 100) {
              this.isShow = false;
              this.$toast.top(resMsg);
              this.checkSessionFun();
            } else {
              this.$toast.top(resMsg);
            }
          },
          errres => {
            this.$toast.top("请求失败！");
          }
        );
      } else {
        this.$toast.top("请完善信息！");
      }
    }
  }
};
</script>

<style>
@import url("../assets/css/TestNav.css");
</style>
