<script setup>
import { ref } from 'vue';

const users = ref([
    { id: 1, displayName: "Sailor Moon", photoURL: "/images/sailor.png", online: true },
    { id: 2, displayName: "Yoda", photoURL: "/images/yoda.png", online: true },
    { id: 3, displayName: "Pikachu", photoURL: "/images/pikachu.png", online: false },
    { id: 4, displayName: "Harry Potter", photoURL: "/images/harry.png", online: true },
    { id: 5, displayName: "Jack Skellington", photoURL: "/images/jack.png", online: false },
])
</script>

<template>
    <div class=" hidden md:flex flex-col gap-4">
        <div class=" flex justify-between text-gray-400">
            <h2 class=" font-semibold">Contact</h2>
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div v-for="{id, displayName, photoURL, online} in users" :key="id" class=" flex items-center gap-4">
            <div class="relative">
                <img :src="photoURL" :alt="displayName" class=" size-10 rounded-full object-cover">
                <div :class="online ? 'bg-emerald-400' : 'bg-red-400'" class="size-4 absolute bottom-0 -right-2 rounded-full border-2 border-gray-50"></div>
            </div>
            <h3 class=" font-semibold text-sm">{{ displayName }}</h3>
        </div>
    </div>
</template>