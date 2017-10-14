<template>
    <div id="add-blog" class="single-blog">
        <center><h1>Add a New Blog Post</h1></center>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input class="textbox" type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea class="textbox" v-model.lazy.trim="blog.content" required></textarea>
            <div id="checkboxes">
                <p>Blog Categories:</p>
                <label> Knowlage:</label>
                <input type="checkbox" value="knowlage" v-model="blog.categories" />
                <label> Food:</label>
                <input type="checkbox" value="food" v-model="blog.categories" />
                <label> Etc:</label>
                <input type="checkbox" value="etc" v-model="blog.categories" />
            </div>

            <label>Author:</label>
            <input class="textbox" type="text" v-model.lazy="blog.author" required/>


            <hr />
            <center><button v-on:click.prevent="post">Add Blog</button></center>


        </form>

        <div id="preview">
            <center><h2>Preview blog</h2></center>
            <p><h3>Blog title:</h3>{{ blog.title }}</p>
            <p><h3>Blog content:</h3></p>
            <p style="white-space: pre">{{ blog.content | snippest }}</p>
            <p><h3>Blog Categories:</h3></p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p><h3>Author:</h3> {{ blog.author }}</p>
        </div>
    </div>

</template>

<script>
// Imports

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['Moshi', 'Other'],
            submitted: false
        }
    },
    methods: {
      post: function(){
        if (this.blog.title == "" || this.blog.content == "" || this.blog.author == "" || this.blog.categories == "" ) {
           alert('check your data before add blog\n กรอกให้ครบด้วยยยยยยย');


        }else{
          alert('Success to create your blog \nกรอกข้อมูลเสร็จแล้ววววววว');
            this.$http.post('https://vueblog-587c3.firebaseio.com//posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
                console.log("ERROR");
              }
          );
       }
    }
}
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
.textbox {
    background: #333;
    color: #ccc;
    width: 100%;
    padding: 6px 15px 6px 35px;
    border-radius: 20px;
    box-shadow: 0 1px 0 #ccc inset;
    transition: 500ms all ease;
    outline: 0;
}
.textbox:hover {
    width: 270px;
}
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
}
button {
  background: #ffffff;
  background-image: -webkit-linear-gradient(top, #ffffff, #969899);
  background-image: -moz-linear-gradient(top, #ffffff, #969899);
  background-image: -ms-linear-gradient(top, #ffffff, #969899);
  background-image: -o-linear-gradient(top, #ffffff, #969899);
  background-image: linear-gradient(to bottom, #ffffff, #969899);
  -webkit-border-radius: 12;
  -moz-border-radius: 12;
  border-radius: 12px;
  text-shadow: 0px 1px 3px #000000;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 9px 20px 10px 20px;
  border: solid #ffffff 1px;
  text-decoration: none;
}

button:hover {
  background: #e3e3e3;
  background-image: -webkit-linear-gradient(top, #e3e3e3, #6b696b);
  background-image: -moz-linear-gradient(top, #e3e3e3, #6b696b);
  background-image: -ms-linear-gradient(top, #e3e3e3, #6b696b);
  background-image: -o-linear-gradient(top, #e3e3e3, #6b696b);
  background-image: linear-gradient(to bottom, #e3e3e3, #6b696b);
  text-decoration: none;
}

</style>
