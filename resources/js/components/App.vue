<template>
  <Header/>
      <div class="container">
          <div class="card">
              <div class="card-body">
              <div class="container-fluid">
                  <router-view></router-view>
              </div>
              </div>
          </div>
      </div>

  <Footer/>
</template>

<script>
import axios from 'axios';
// import Layout from '../components/Layout/Layout.vue';
import Header from '../components/Layout/Header/Header.vue'
import Footer from '../components/Layout/Footer/Footer.vue'
  export default {
    name: 'App',
    components:{
      Header,
      Footer
    },
  
}

  
  
  
</script>