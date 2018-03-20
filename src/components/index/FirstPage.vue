<template>
  <div id="firstPage">
      <div class="search-bar">
        <input id="searchKeyWordInput" type="text" :value="[searchKeyWord]"/>
        <input type="button" value="搜索" @click="findBysearchKeyWord()"/>
      </div>
      <div class="classify">
        <ul style="padding-left:0px;width:300px;height:51px;">
          <li>
            <div>
              <strong class="next-strong">平台</strong>
              <br />
              <ul class="next-ul">
                <li><a @click="findBysearchKeyWord('平面设计')">平面设计</a></li>
                <li><a @click="findBysearchKeyWord('美术设计')">美术设计</a></li>
                <li><a @click="findBysearchKeyWord('服装设计')">服装设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <strong class="next-strong">企业</strong>
              <br />
              <ul class="next-ul">
                <li><a @click="findBysearchKeyWord('平面设计')">平面设计</a></li>
                <li><a @click="findBysearchKeyWord('美术设计')">美术设计</a></li>
                <li><a @click="findBysearchKeyWord('服装设计')">服装设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <strong class="next-strong">个人</strong>
              <br />
              <ul class="next-ul">
                <li><a @click="findBysearchKeyWord('平面设计')">平面设计</a></li>
                <li><a @click="findBysearchKeyWord('美术设计')">美术设计</a></li>
                <li><a @click="findBysearchKeyWord('服装设计')">服装设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <strong class="next-strong">个人</strong>
              <br />
              <ul class="next-ul">
                <li><a @click="findBysearchKeyWord('平面设计')">平面设计</a></li>
                <li><a @click="findBysearchKeyWord('美术设计')">美术设计</a></li>
                <li><a @click="findBysearchKeyWord('服装设计')">服装设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
              </ul>
            </div>
          </li>
          <li style="border-bottom:0px">
            <div>
              <strong class="next-strong">个人</strong>
              <br />
              <ul class="next-ul">
                <li><a @click="findBysearchKeyWord('平面设计')">平面设计</a></li>
                <li><a @click="findBysearchKeyWord('美术设计')">美术设计</a></li>
                <li><a @click="findBysearchKeyWord('服装设计')">服装设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
                <li><a @click="findBysearchKeyWord('其他设计')">其他设计</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="carousel">
          <slider :pages="pages" :sliderinit="sliderinit">
            <!-- slot  -->
          </slider>
        <br />
        <h1>{{information}}</h1>
      </div>
      <hr style="margin-top:550px" />
      <div id="goodList">
        <div v-for="(item , index) in items" class="good-info" :key="index">
          <a :href="'#/Goods/'+ item.id ">
            <div><img :src="item.goodsIndexImgPath" /></div>
            <div class="goods-info-dis">
              <div align="left">{{item.goodsName}}</div>
              <div class="goods-price">{{'￥'+item.goodsPrice}}<span class="old-price">{{item.goodsOldPrice}}</span></div>
              <div>{{'销量：'+item.goodsSellNum+'/月'}}</div>
            </div>
          </a>
        </div>
        <div>
          <ul class="pager">
            <li><a @click="toPreviousPage()">上一页</a></li>
            <li v-for="(pages , index) in navigatepageNums" :key="index"><a @click="toWantPage(pages)">{{pages}}</a></li>
            <li><a @click="toNextPage()" >下一页</a></li>
          </ul>
        </div>
      </div>
      <router-view />
  </div>
</template>

<script>
import slider from "vue-concise-slider"; // 引入slider组件
export default {
  components: {
    slider: slider
  },
  data() {
    return {
      pages: [
        {
          html:
            '<a href="#/sixth" style=" width: 600px; height: 350px; display:block"></a>',
          style: {
            background:
              "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521106488818&di=9c3e15f3a56986cd557899ec5243801c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F568cd27741af5.jpg)"
          }
        },
        {
          html:
            '<a href="#/sixth" style=" width: 600px; height: 350px; display:block"></a>',
          style: {
            background:
              "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521106488817&di=3fe3c945af4c816c3264ced2d663ab33&imgtype=0&src=http%3A%2F%2F4493bz.1985t.com%2Fuploads%2Fallimg%2F161014%2F3-161014103341.jpg)"
          }
        },
        {
          html:
            '<a href="#/sixth" style=" width: 600px; height: 350px; display:block"></a>',
          style: {
            background:
              "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521106488816&di=6911e876c3d473f9a77a298663083a8c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F5680dbe8250ca.jpg%3Fdown)"
          }
        }
      ],
      //滑动配置[obj]
      sliderinit: {
        currentPage: 0, //当前页码
        thresholdDistance: 500, //滑动判定距离
        thresholdTime: 100, //滑动判定时间
        autoplay: 5000, //自动滚动[ms]
        loop: true, //循环滚动
        direction: "horizontal", //方向设置，垂直滚动
        infinite: 1, //无限滚动前后遍历数
        slidesToScroll: 1 //每次滑动项数
      },
      searchKeyWord: "",
      information: "活动结束还有30天",
      //pageInfo
      pn: 1,
      pageNum: null,
      lastPage: null,
      hasNextPage: null,
      hasPreviousPage: null,
      isFirstPage: null,
      isLastPage: null,
      total: null,
      navigatepageNums: null,
      //goods-info
      items: [], //基本信息
    };
  },
  mounted: function() {
    this.loadGetGoodsFun(1);
  },
  methods: {
    toPreviousPage(){
      if(this.hasPreviousPage){
        this.loadGetGoodsFun(this.pageNum-1);
        window.scrollTo(0,600);
      }else{
        this.$toast.center("没有啦！！！");
      }
    },
    toNextPage(){
      if(this.hasNextPage){
        this.loadGetGoodsFun(this.pageNum+1);
        window.scrollTo(0,600);
      }else{
        this.$toast.center("没有啦！！！");
      }
    },
    toWantPage(pn){
      this.loadGetGoodsFun(pn);
      window.scrollTo(0,600);
    },
    loadGetGoodsFun(pn) {
      this.pn = pn;
      this.$http
        .get(
          this.httpRequestAddress +
            "goodsController/getIndexGoods?pn=" +
            this.pn
        )
        .then(
          res => {
            var resCode = res.data.code;
            var resMsg = res.data.message;
            var pageInfo = res.data.extend.pageInfo;
            this.pageNum = pageInfo.pageNum;
            this.lastPage = pageInfo.lastPage;
            this.hasNextPage = pageInfo.hasNextPage;
            this.hasPreviousPage = pageInfo.hasPreviousPage;
            this.isFirstPage = pageInfo.isFirstPage;
            this.isLastPage = pageInfo.isLastPage;
            this.total =pageInfo.total;
            this.navigatepageNums = pageInfo.navigatepageNums;
            if (resCode === 100) {
              this.items = res.data.extend.pageInfo.list;
            }
          },
          errres => {
            this.$toast.top("请求失败！");
          }
        );
    },
    findBysearchKeyWord(res) {
      if (res == null) {
        this.searchKeyWord = $("#searchKeyWordInput").val();
        this.$router.push({
          name: "Search",
          path: "/Search",
          params: {
            keyWord: this.searchKeyWord
          }
        });
      } else {
        this.$router.push({
          name: "Search",
          path: "/Search",
          params: {
            keyWord: res
          }
        });
      }
    }
  }
};
</script>

<style scoped>
#firstPage {
  width: 1000px;
  max-width: 1000px;
  margin: 10px auto;
}
.classify {
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.171);
  float: left;
  width: 300px;
  height: 500px;
}
.classify li {
  list-style-type: none;
  float: left;
  margin: 5px 10px;
  border-bottom: 1px red solid;
}
.classify a {
  cursor: pointer;
}
.carousel {
  margin-top: 50px;
  float: right;
  width: 600px;
  height: 350px;
  position: relative;
  box-shadow: 2px 2px 50px black;
}
.pager a{
  cursor: pointer;
}
.img-div {
  width: 600px;
  height: 350px;
}
.img-div img {
  margin-top: 10px;
}
.next-strong {
  float: left;
  margin-left: 10px;
  font-size: 20px;
}
.next-ul {
  margin-top: 10px;
  padding-left: 0px;
}
.next-ul li {
  border-bottom: 0px;
}
.search-bar {
  margin: 10px;
  margin-left: 500px;
}
.search-bar input {
  border: 1px red solid;
  width: 300px;
  height: 30px;
}
.search-bar input[type="button"] {
  width: 100px;
  height: 30px;
  background-color: red;
  padding-top: 2px;
  margin-left: 10px;
  color: white;
}
.good-info {
  transition: 1s;
  width: 206px;
  height: 350px;
  max-width: 206px;
  max-height: 350px;
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
  width: 100%;
  height: 100%;
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
  color: black;
  opacity: 0.5;
  font-style: oblique;
  text-decoration: line-through;
}
</style>
