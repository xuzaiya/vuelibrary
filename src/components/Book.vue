<template>
    <div id="book" class="container">
      <alert v-if="alert" v-bind:message="alert"></alert>
      <h1 class="page-header">图书列表</h1>
      <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>序号</th>
            <th>图书名称</th>
            <th>图书作者</th>
            <th>图书价格</th>
            <th>图书数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filterBook(books,filterInput)">
            <td>{{book.id}}</td>
            <td>{{book.bookName}}</td>
            <td>{{book.bookAuthor}}</td>
            <td>{{book.bookPrice}}</td>
            <td>{{book.count}}</td>

            <td><router-link v-bind:to="'/detailBook/'+book.id" class="btn btn-danger">详情</router-link></td>

          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    import Alert from "./Alert";
    export default {
        name: "book",
      components: {Alert},
      data(){
          return {
            books:[],
            alert:'',
            filterInput:'',
          }
      },
      methods:{
          filterBook(books,value){
            return books.filter(function (book) {
              return book.bookName.match(value);
            })

          },
          fetchBook:function () {
            this.$http.get("http://localhost:3000/books").then((response)=>{

               this.books = response.body;
            })
          }
      },
      created(){
          if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
          }
          this.fetchBook();
      },
      components:{
          Alert,
      },
      updated(){

 
        this.fetchBook();

      },
    }
</script>

<style scoped>
  input{
    margin-bottom: 10px;
  }
</style>
