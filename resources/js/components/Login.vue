<template>
    <div>{{ user.name }} {{ user.email }} {{ user.id }}</div>
    <router-link to="/logininfo" @click.prevent="pegaruser">   getuser</router-link>
</template>

<script>
import axios from 'axios';
    export default {
    data() {
        return {
        user:{
          email:'',
          id:'',
          name:'',
        }
    }
  },
  
  methods:{
    // async created() {
    //     const response = axios.get('/api/logado');
    //     console.log(response.data);
    //     user = response.data;
    //     console.log(user);
    // },

    async pegaruser(){
      try{
        const res = await axios.get('/api/logado');
        console.log(res);
        this.user = res.data;
        console.log(this.user);
        
      }catch(error){
        console.log(error);
      }
    }
  }
  
}  
</script>