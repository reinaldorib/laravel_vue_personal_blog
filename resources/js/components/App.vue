<template>

    <div class="container">
        <header>
            <h1>Arquivo App.vue</h1>
            <router-link to="/">
                home
            </router-link>
            <router-link to="/posts"> mostrar Posts</router-link>
            <router-link to="/posts/create"> Add Post</router-link>
            <router-link to="/registros/create"> Add user</router-link>
            <router-link to="/loginuser">   login</router-link>
            <router-link to="/logininfo">   login info</router-link>
            <router-link to="/" @click.prevent="logout">   logout</router-link>
            <div>{{ user.email }}</div>
            
        </header>
        <div class="card">
            <div class="card-body">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'App',
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
      created(){
        pegaruser();{
          try{
            const res = axios.get('/api/logado');
            console.log(res);
            this.user = res.data;
            console.log(this.user.name);
            
          }catch(err){
            console.log(err);
          }
        }
      },

    logout(){
      try{
        const res =  axios.post('/api/logout');
        // console.log(res);
      }catch(err){
        console.log(err);
      }
    }
  }
  }

  
  
  
</script>