<template>
  <div id="searchPage" ref="bodys">
    <div class="head-ad">
      <img src="../../assets/logo.png" alt="">
    </div>
    <br>
    <div :class="searchBar" ref="searchBar">
      <input type="text" v-model="searchKeyWord" @keypress.13="searchBtn()">
      <button @click="searchBtn()">搜索</button>
    </div>
    <div class="search-condition">
      <div>
      </div>
    </div>
    <div id="goodList">
      <div v-for="(item , index) in items" class="good-info" :key="index">
        <a href="#">
            <div><img :src="item.goodsIndexImgPath" /></div>
            <div class="goods-info-dis">
              <div align="left">{{item.goodsName}}</div>
              <div class="goods-price">{{'￥'+item.goodsPrice}}<span class="old-price">{{item.goodsOldPrice}}</span></div>
              <div>{{'销量：'+item.goodsSellNum+'/月'}}</div>
            </div>
          </a>
      </div>
    </div>
    <div class="to-top" v-show="isShow()">
      <div class="to-top-a" @click="toTop()">
        <span>返回顶部</span>
      </div>
      <div class="to-top-a" @click="toTop()">
        <span>返回顶部</span>
      </div>
      <div class="to-top-a" @click="toTop()">
        <span>返回顶部</span>
      </div>
      <div class="to-top-a" @click="toTop()">
        <span>返回顶部</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      searchBar: "searchBar",
      searchKeyWord: '',
      items: [], //基本信息
      pSize: 16
    };
  },
  mounted: function() {
    window.addEventListener("scroll", this.changeSearchBar);
    window.addEventListener("scroll", this.loadingMoreGoodsInfo);
    window.addEventListener("scroll", this.isShow);
    if(this.$route.params.keyWord == null){
      this.searchKeyWord = '';
      this.loadingLoad();
    }else{
      this.searchKeyWord = this.$route.params.keyWord;
      this.loadingLoad();
    }
  },
  methods: {
    loadingMoreGoodsInfo(){
    var condit = $(document).scrollTop()>=$(document).height()-$(window).height();
     if(condit){
       this.pSize = this.pSize+16;
       this.loadingLoad(this.pSize);
     }else{
       
     }
    },
    isShow(){
      var y = window.pageYOffset;
      if (y > 300) {
        return true;
      }else{
        return false;
      }
    },
    changeSearchBar() {
      var y = window.pageYOffset;
      if (y > 300) {
        this.searchBar = "searchBar-change";
      } else {
        this.searchBar = "searchBar";
      }
    },
    loadingLoad(pSize) {
      pSize = this.pSize;
      this.$http
        .get(
          this.httpRequestAddress +
            "goodsController/getAllGoodsByCondition?keyWord=" +
            this.searchKeyWord +
            "&pSize=" +
            pSize
        )
        .then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.message;
            if (resCode === 100) {
              this.items = res.data.extend.pageInfo.list;
            } else {
              this.$toast.top(res.data.extend.msg);
            }
          },
          errres => {
            this.$toast.top("请求失败！");
          }
        );
    },
    searchBtn() {
      this.pSize = 16;
      window.scrollTo(0,350);
      this.loadingLoad(this.pSize);
    },
    toTop(){
      window.scrollTo(0,0);
    }
  }
};
</script>

<style scoped>
#searchPage {
  width: 1000px;
  max-width: 1000px;
  margin: 10px auto;
}
.head-ad {
  width: 1000px;
  height: 100px;
}
.head-ad img {
  height: 100px;
  animation: adAnimation 5s infinite;
}
@keyframes adAnimation {
  /* 0% {
    padding-left: 800px;
  }
  50% {
    padding-left: 0px;
    padding-right: 800px;
  }
  100% {
    padding-right: 0px;
    padding-left: 800px;
  } */
}
.searchBar {
  width: 700px;
  height: 50px;
  border: 1px red solid;
  margin: 10px auto;
  border-radius: 50px;
  background-color: white;
}
.searchBar-change {
  transition: 0.2s;
  width: 700px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-top: 0px;
  box-shadow: 2px 2px 50px black;
}
.all-goods-list {
  width: 1000px;
  height: 1000px;
  background-color: peru;
}
.searchBar input[type="text"] {
  width: 500px;
  height: 48px;
  border: 0px;
  outline: none;
}
.searchBar button {
  background-color: red;
  border: 0px;
  height: 35px;
  width: 100px;
  color: white;
}
.searchBar-change input[type="text"] {
  width: 500px;
  height: 48px;
  border: 0px;
  outline: none;
}
.searchBar-change button {
  background-color: red;
  border: 0px;
  height: 35px;
  width: 100px;
  color: white;
}
.search-condition {
  width: 1000px;
  height: 500px;
  border: 1px red solid;
}
.good-info {
  transition: 1s;
  width: 206px;
  height: 350px;
  display: inline-table;
  margin: 10px 20px;
  border: 1px white solid;
}
.good-info:hover {
  border: 1px red solid;
  box-shadow: 2px 2px 50px black;
}
.good-info img {
  margin-top: 10px;
  width: 180px;
  height: auto;
}
.goods-info-dis div {
  margin-left: 10px;
  display: table;
}
.good-info a {
  text-decoration: none;
}
.goods-price {
  color: red;
  font-size: 25px;
}
.old-price {
  font-size: 15px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.432);
  font-style: oblique;
  text-decoration: line-through;
}
.to-top{
  position: fixed;
  right: 5px;
  bottom: 200px;
  width: 50px;
  height: 100px;
}
.to-top-a{
  margin: 10px auto;
  box-shadow: 2px 2px 50px black;
  font-size: 10px;
  line-height: 50px;
  color: red;
  border-radius: 50px;
  cursor: pointer;
}
</style>
