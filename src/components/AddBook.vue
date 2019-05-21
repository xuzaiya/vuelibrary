<template>
    <div class="addbook container">
      <h1 class="page-header">Add Book</h1>
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
    export default {
        name: "addBook",
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
            this.$http.post("http://localhost:3000/books",newbook).then(function (response) {
             // console.log(response);
              this.$router.push({path:'/',query:{alert:'图书添加成功！'}});//跳到主页
            })


          }
          e.preventDefault();
          //console.log(book);
        }
      }

    }
</script>

<style scoped>

</style>
