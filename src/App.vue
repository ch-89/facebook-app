<script setup>
import Navbar from "@/components/Navbar.vue"
import Sidebar from "@/components/Sidebar.vue"
import Feed from "@/components/Feed.vue"
import Contacts from "./components/Contacts.vue";
import { ref } from "vue";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const user = ref(null)

const login = e => signInWithPopup(getAuth(), new GoogleAuthProvider)

onAuthStateChanged(getAuth(), u => user.value = u)
</script>

<template>
  <div v-if="user" class=" bg-gray-50 min-h-screen text-gray-600">
    <Navbar/>
    <main class=" max-w-7xl mx-auto p-6 grid md:grid-cols-4 gap-12">
      <Sidebar/>
      <Feed/>
      <Contacts/>
    </main>
  </div>
  <button @click="login" v-else>Login</button>
</template>