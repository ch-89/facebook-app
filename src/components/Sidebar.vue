<script setup>
import { ref } from "vue"

const links = ref([
    { title: "Watch", icon: "fa-brands fa-youtube" },
    { title: "Events", icon: "fa-solid fa-calendar-alt" },
    { title: "Friends", icon: "fa-solid fa-users" },
    { title: "Memories", icon: "fa-regular fa-clock" },
    { title: "Saved", icon: "fa-regular fa-bookmark" },
    { title: "Marketplace", icon: "fa-solid fa-store" },
])
</script>

<template>
    <div class=" hidden md:flex flex-col gap-4">
        <a href="#" v-for="{title, icon} in links" class=" flex items-center gap-4">
            <i :class="icon" class=" text-2xl text-blue-400 fa-fw"></i>
            <p class=" font-semibold">{{ title }}</p>
        </a>
    </div>
</template>