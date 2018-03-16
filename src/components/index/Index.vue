<template>
  <div class="hello">
    <h1 id="test">{{ msg }}</h1>
      <div class="panel-body">
          <table class="table table-striped table-bordered" id="dataTables-example">
            <thead>
              <tr>
                <th>图书馆名称</th>
                <th>类型</th>
                <th>作者</th>
                <th>点击量</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
  <div @click="test()">text</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome Datatables With Vue"
    };
  },
  mounted: function() {
    this.$http.get(this.httpRequestAddress + "userController/getAllUser").then(
      res => {
        var list = res.data.extend.list;
        $.each(list, function(i, item) {
          var fTr = $("<tr></tr>");
          var nameTd = $("<td></td>").append(item.userName);
          var typeTd = $("<td style='text-align: center;'></td>").append(
            item.password
          );
          var IndustryTd = $("<td style='text-align: center;'></td>").append(
            item.id
          );
          var acTd = $("<td style='text-align: center;'></td>").append(
            item.age
          );
          fTr
            .append(nameTd)
            .append(typeTd)
            .append(IndustryTd)
            .append(acTd);
          $("#dataTables-example tbody").append(fTr);
        });
        $("#dataTables-example").DataTable({});
      },
      errres => {
        this.$toast.top("请求失败！");
      }
    );
  },
  methods: {
    test() {
      if (this.$parent.checkSession) {
        //TODO
        this.$toast.top("测试");
      } else {
        this.$parent.toUserInfoPage();
      }
    }
  }
};
</script>

<style scoped>
.hello {
  margin: 0 auto;
  width: 1000px;
}
</style>
