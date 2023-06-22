<template>
    <div>
        <h5 id="associating-form-text-with-form-controls">title:</h5>
        <h6>{{ post.title }}</h6>
        <h5 id="associating-form-text-with-form-controls">body:</h5>
        <p>{{ post.body }}</p>

        <router-link :to="`/posts/${post.id}/edit`" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            post: {}
        }
    },
    async created() {
        try {
            const response = await axios.get(`/api/posts/${this.$route.params.id}`);
             this.post = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>