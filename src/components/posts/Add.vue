<template>
  <div>
    <form action="#" @submit.prevent>
      <div class="form-group">
        <label for="">Title</label>
        <input type="text" id="title" class="form-control" v-model="post.title">
      </div>
      <div class="forn-group">
        <label for="">Description</label>
        <textarea name="" id="" cols="10" rows="5" class="form-control" v-model="post.description"></textarea>
      </div>
      <button @click="postSubmit()" class="btn btn-success mt-3">Submit</button>
    </form>
  </div>
</template>

<script>
import PostService from '../../services/PostService'

export default {
  name: "post-add",
  data() {
    return {
      post:{
        id: null,
        title: "",
        description: "",
        published: false
      }
    }
  },

  methods: {
    postSubmit() {
      let data = {
        title: this.post.title,
        description: this.post.description
      };

      PostService.create(data).then((result) => {
        this.post.id = result.data.id;
        this.$router.push({
          name: "posts"
        });
        console.log(result.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>
