

import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import Layout from './components/Layout/Layout.vue';

import App from './components/App.vue';

import Post from './components/Posts.vue';
import PostForm from './components/PostForm.vue';
import PostList from './components/PostsList.vue';
import RegistroForm from './components/RegistroForm.vue';
import LoginForm from './components/LoginForm.vue';
import LoginInfo from './components/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', component: Layout },
        // { path: '/', component: App },
        { path: '/', component: PostList },
        { path: '/posts/create', component: PostForm },
        { path: '/posts/:id', component: Post },
        { path: '/posts/:id/edit', component: PostForm },
        { path: '/registros/create', component: RegistroForm },
        { path: '/loginuser', component: LoginForm },
        { path: '/logininfo', component: LoginInfo },
    ]
});


const app = createApp(App);

app.use(router);

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);



app.mount('#app');
