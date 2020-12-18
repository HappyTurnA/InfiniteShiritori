// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAgNtCVnShtIyrfzSwHhFLgTO5tIfrfRq4",
    authDomain: "infinite-shiritori-4cfaa.firebaseapp.com",
    projectId: "infinite-shiritori-4cfaa",
    storageBucket: "infinite-shiritori-4cfaa.appspot.com",
    messagingSenderId: "81650059711",
    appId: "1:81650059711:web:77c0c09ca6cec9eda6f90a",
    measurementId: "G-DN4BENXWW2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
