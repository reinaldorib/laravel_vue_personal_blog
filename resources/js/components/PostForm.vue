<template>
    <div>
      <h2 v-if="isNewPost">Add Post</h2>
      <h2 v-else>Edit Post</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="title" class="form-label">title:</label>
            <input class="form-control" type="text" id="title" v-model="post.title" required />
          </div>
          <div class="mb-3">
            <label for="body" class="form-label">content:</label>
            <textarea class="form-control" id="body" v-model="post.body" required></textarea>
          </div>
          
          <button type="submit" v-if="isNewPost" class="btn btn-primary">Add post</button>
          <button type="submit" v-else class="btn btn-primary">Update post</button>
        </form>
    </div>
  </template>
  
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
          
        }
      }
    },
    computed: {
      isNewPost() {
        return !this.$route.path.includes('edit');
      }
    },
    async created() {
      if (!this.isNewPost) {
        const response = await axios.get(`/api/posts/${this.$route.params.id}`);
        this.post = response.data;
      }
    },
    methods: {
      async submitForm() {
        try {
          if (this.isNewPost) {
            await axios.post('/api/posts', this.post);
          } else {
            await axios.put(`/api/posts/${this.$route.params.id}`, this.post);
          }
          this.$router.push('/');
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>