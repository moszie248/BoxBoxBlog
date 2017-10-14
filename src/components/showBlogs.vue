<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input class="textbox" type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to = "'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase}}</h2></router-link>
            <article snippet>{{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://vueblog-587c3.firebaseio.com//posts.json').then(function(data){
          return data.json();
        }).then(function(data){
          var blogsArray = [];
          for(let key in data){
            data[key].id = key
            blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
        })
    },
    mixins: [searchMixin]
}
</script>

<style>
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
A:link {COLOR: #46453F; TEXT-DECORATION: none}
/*A:visited {COLOR: #660000; TEXT-DECORATION: none}*/
A:hover {COLOR: #ACA42F; TEXT-DECORATION: none}
.textbox {
    background: #333;
    color: #ccc;
    width: 100px;
    padding: 6px 15px 6px 35px;
    border-radius: 20px;
    box-shadow: 0 1px 0 #ccc inset;
    transition: 150ms all ease;
    outline: 0;
}
.textbox:hover {
    width: 270px;
}
</style>
