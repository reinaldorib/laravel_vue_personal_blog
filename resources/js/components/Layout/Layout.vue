<template>
    <!-- <Header />

    <div class="container">
      <h1>Arquivo App.vue</h1>
        <div class="card">
            <div class="card-body">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
            </div>
        </div>
    </div>

    <Footer /> -->
</template>

<script>
import Header from './Header/Header.vue'
import Footer from './Footer/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  // data(){
  //     return{
  //       user:{
  //         email:'',
  //         id:'',
  //         name:'',
  //       }
  //     }
  // },

  // mounted () {
  //   // axios
  //   //   .get('/api/logado')
  //   //   .then(response => (this.user = response.data))
  //   try{
  //     axios
  //       .get('/api/logado')
  //       .then(response => (this.user = response.data));
  //       console.log('usuario logado');
  //   }catch(error){
  //     console.log('Ainda não há usuários logados');
  //     console.log(error);
  //   }
    
  // }
  
}
</script>