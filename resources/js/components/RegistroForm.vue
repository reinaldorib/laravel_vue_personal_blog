<template>
    <div>
        <div>testando alguma resposta</div>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">nome:</label>
            <input class="form-control" type="text" id="name" v-model="user.name" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">email:</label>
            <input class="form-control" type="email" id="email" v-model="user.email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">password:</label>
            <input class="form-control" type="password" id="password" v-model="user.password" required />
          </div>
          
          <button type="submit" class="btn btn-primary">registrar</button>
          
        </form>
    </div>
  </template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        
      }
    }
  },

  methods: {
    async submitForm() {
      try {
        await axios.post('/api/registros', this.user);
      } catch (error) {
        console.error(error);
      }
      this.$router.push('/');
    }
  }
}
</script>

//   computed: {
  //     isNewPost() {
  //       return !this.$route.path.includes('edit');
  //     }
  //   },
  //   async created() {
  //     const response = await axios.get(`/api/registros/${this.$route.params.id}`);
  //     this.user = response.data;
  //   },