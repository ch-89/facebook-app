<script setup>
defineProps(["story"])
</script>

<template>
  <button class=" shadow rounded-xl overflow-hidden hover:scale-105 hover:shadow-lg transition relative">
    <img :src="story.photo" class=" aspect-[9/16] object-cover">
    <img :src="story.photoURL" class=" size-10 rounded-full object-cover absolute top-2 left-2 border-2 border-blue-400">
    <p class=" absolute bottom-2 text-white text-sm left-2 font-semibold drop-shadow text-left">{{ story.displayName }}</p>
  </button>
</template>