<template>
    <div class="test_color">
      <h1>Header</h1>
    </div>
    
    <header >        
            <!-- <router-link to="/">home</router-link> -->
            <router-link to="/"> home</router-link>&nbsp;
            <router-link to="/posts/create"> Add Post</router-link>&nbsp;
            <router-link to="/registros/create"> Add user</router-link>&nbsp;
            <router-link to="/logininfo">   login info</router-link>&nbsp;

            <router-link to="/" v-if="user.name" :key="user.name" @click.prevent="logout"><a class="test_color_text">logout {{ user.name }}</a> </router-link>&nbsp;
            <router-link to="/loginuser" :key="user" v-else> <a class="test_color_text">login</a>  </router-link>&nbsp;
    </header>
</template>

<script>
  import axios from 'axios';
  import { ref } from 'vue'
  export default {
    name: 'Header',
    data(){
      return{
        user:{
          email:'',
          id:'',
          name:'',
        }
      }
    },

    mounted () {
      this.alguma();
    },

    methods:{
      
      logout(){
        try{
          const res =  axios.post('/api/logout');
          this.user.email = '';
          this.user.id = '';
          this.user.name = '';
          console.log('usuario saiu');
          
          // console.log(res);
        }catch(error){
          console.log(error);
          console.log('não deu certo');
        }
        
      },

      async alguma(){
        try{
        const res = await axios.get('/api/logado');
        console.log(res);
        this.user.email = res.data.email;
        this.user.name = res.data.name;
        this.user.id = res.data.id;
        console.log(this.user);
        
        }catch(error){
          console.log(error);
        }
        
      }
    },

    

  }
</script>