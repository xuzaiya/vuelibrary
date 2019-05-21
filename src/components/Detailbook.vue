<template>
    <div id="detail" class="container">
      <router-link to="/" class="btn btn-default">返回主页</router-link>
      <h1 class="page-header">
        图书详情
        <span class="pull-right">
          <router-link class="btn btn-primary" v-bind:to="'/modify/'+book.id">修改</router-link>
          <button class="btn btn-danger" v-on:click="deleteBook(book.id)">删除</button>
        </span>

      </h1>

      <div class="form-group">
        <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-education">图书名称：{{book.bookName}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-calendar">图书作者：{{book.bookAuthor}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-fire">图书价格：{{book.bookPrice}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-hand-right">图书数量{{book.count}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-hand-right">图书简介：{{book.introduct}}</span></li>
        </ul>


      </div>

    </div>
</template>

<script>
    export default {
        name: "Detailbook",
      data(){
          return{
            book:'',

          }
      },
      methods:{
          fetchBookById(id){
            this.$http.get("http://localhost:3000/books/"+id).then(function (response) {
              this.book = response.body;
            })
          },
        deleteBook(id){
            this.$http.delete("http://localhost:3000/books/"+id)
              .then(function (response) {
                this.$router.push({path:'/'});
              })
        }

      },
      created(){
          this.fetchBookById(this.$route.params.id);
      }
    }
</script>

<style scoped>

</style>
