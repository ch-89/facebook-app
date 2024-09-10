<script setup>
import { getAuth, signOut } from 'firebase/auth';


const {photoURL} = getAuth().currentUser

</script>

<template>
  <nav class=" bg-white shadow sticky top-0 z-10">
    <div class=" max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 gap-4 items-center">
        <div class=" flex gap-4">
            <i class="fa-brands fa-facebook text-[40px] text-blue-400"></i>
            <div class=" bg-gray-100 px-4 flex items-center gap-2 rounded-full text-gray-400 text-sm">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Search Facebook" class=" bg-transparent outline-none">
            </div>
        </div>
        <div class=" hidden md:flex items-center justify-between text-xl">
            <button class=" text-blue-400">
                <i class="fa-solid fa-home"></i>
            </button>
            <button>
                <i class="fa-regular fa-user"></i>
            </button>
            <button>
                <i class="fa-regular fa-heart"></i>
            </button>
            <button>
                <i class="fa-regular fa-comment"></i>
            </button>
            <button>
                <i class="fa-regular fa-paper-plane"></i>
            </button>
        </div>
        <div class=" hidden md:flex items-center gap-4 justify-end">
            <button class=" bg-gray-100 size-10 rounded-full">
                <i class="fa-solid fa-plus"></i>
            </button>
            <button class=" bg-gray-100 size-10 rounded-full">
                <i class="fa-solid fa-comment"></i>
            </button>
            <button class=" bg-gray-100 size-10 rounded-full">
                <i class="fa-solid fa-bell"></i>
            </button>
            <button @click="signOut(getAuth())">
                <img :src="photoURL" class=" size-10 rounded-full object-cover">
            </button>
        </div>
    </div>
  </nav>
</template>