<template>
    <div>
        <div>Página de login</div>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="email" class="form-label">email:</label>
            <input class="form-control" type="email" id="email" v-model="user.email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">password:</label>
            <input class="form-control" type="password" id="password" v-model="user.password" required />
          </div>
          
          <button type="submit" class="btn btn-primary">logar</button>
          
        </form>
    </div>
  </template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        
      }
    }
  },

  methods: {

    async submitForm() {
      try {
        await axios.post('/api/auth', this.user);
        console.log('funcionou');
        // alert("funcionou");
      } catch (error) {
        console.error(error);
        console.log('falhou');
        // alert("falhou");
      }
      this.$router.push('/')
    }
  }
}



</script>

// async submitForm() {
    //   try {
    //     await axios.post('/api/auth', this.user)
    //     .then(
    //       ({user})=>{
    //         try
    //         {
    //           alert("funcionou");  
    //         }
    //         catch(err)
    //         {
    //           alert("falhou");
    //         }
    //       }
    //     )
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   this.$router.push('/');
    // }

//   computed: {
  //     isNewPost() {
  //       return !this.$route.path.includes('edit');
  //     }
  //   },
  //   async created() {
  //     const response = await axios.get(`/api/registros/${this.$route.params.id}`);
  //     this.user = response.data;
  //   },