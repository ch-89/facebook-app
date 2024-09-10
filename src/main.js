import './assets/main.css'
import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import App from './App.vue'

initializeApp({
    apiKey: "AIzaSyBNQX4M-pcie46-WvVJ9jeBfqaFVxIK-xg",
    authDomain: "facebook-clone-7d809.firebaseapp.com",
    projectId: "facebook-clone-7d809",
    storageBucket: "facebook-clone-7d809.appspot.com",
    messagingSenderId: "868487725188",
    appId: "1:868487725188:web:addc9356b55926334682d1",
    measurementId: "G-1MS1WFPC4C"
})

createApp(App).mount('#app')
