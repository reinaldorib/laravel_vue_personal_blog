<template>
    <div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">content</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                    <td>
                      <div class="row gap-3">
                        <router-link :to="`/posts/${post.id}`" class="p-2 col border btn btn-primary">View</router-link>
                        <router-link :to="`/posts/${post.id}/edit`" class="p-2 col border btn btn-success">Edit</router-link>
                        <button @click="deletePost(post.id)" type="button" class="p-2 col border btn btn-danger">Delete</button>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: []
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/posts');
      this.posts = response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async deletePost(id) {
      try {
        await axios.delete(`/api/posts/${id}`);
        this.posts = this.post.filter(posts => posts.id !== id);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>