<template>
    <div id="modify" class="container">
      <h1 class="page-header">Modify Book</h1>
      <form v-on:submit="Add">
        <div class="form-group">
          <label>图书名称</label>
          <input type="text" class="form-control" placeholder="bookName" v-model="book.bookName">
        </div>
        <div class="form-group">
          <label>图书作者</label>
          <input type="text" class="form-control" placeholder="bookAuthor" v-model="book.bookAuthor">
        </div>
        <div class="form-group">
          <label>图书价格</label>
          <input type="text" class="form-control" placeholder="bookPrice" v-model="book.bookPrice">
        </div>
        <div class="form-group">
          <label>图书数量</label>
          <input type="text" class="form-control" placeholder="count" v-model="book.count">
        </div>
        <div class="form-group">
          <label>图书简介</label>
          <textarea class="form-control" rows="8" v-model="book.introduct">

          </textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认添加</button>
      </form>
    </div>
</template>

<script>
  import Alert from './Alert'
    export default {
      name: "modify",
      data(){
        return{
          book:{
            bookName:'',
            bookAuthor:'',
            bookPrice: '',
            count:'',
            introduct:'',

          }
        }
      },
      methods:{
        fetchBookById(id){
          this.$http.get("http://localhost:3000/books/"+id).then(function (response) {
            this.book = response.body;
          })
        },
        Add:function (e) {
          if(!this.book.bookName||!this.book.bookAuthor||!this.book.bookPrice){
            console.log("把信息添加完整");
          }else{
            let newbook ={
              bookName:this.book.bookName,
              bookAuthor: this.book.bookAuthor,
              bookPrice:this.book.bookPrice,
              count:this.book.count,
              introduct:this.book.introduct
            };
            // console.log(newbook);
            this.$http.put("http://localhost:3000/books/"+this.$route.params.id,newbook).then(function (response) {
              // console.log(response);
              this.$router.push({path:'/',query:{"alert":"图书修改成功！"}});//跳到主页
            })


          }
          e.preventDefault();
          //console.log(book);
        }
      },
      created(){
        this.fetchBookById(this.$route.params.id);
      },
      components:{
        Alert,
      }

    }
</script>

<style scoped>

</style>
