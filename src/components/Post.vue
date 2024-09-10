<script setup>
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import moment from 'moment';

const {post} = defineProps(["post"])

const remove = e => {
    deleteObject(ref(getStorage(), post.id))
    deleteDoc(doc(getFirestore(), `posts/${post.id}`))
}
</script>

<template>
  <div class=" bg-white shadow rounded-xl">
    <div class=" p-4 grid gap-4">
        <div class=" flex items-start gap-4">
            <img :src="post.photoURL" class=" size-12 rounded-full object-cover">
            <div>
                <h3 class=" font-semibold">{{ post.displayName }}</h3>
                <p class=" text-sm text-gray-400">{{ moment(post.timestamp?.toDate()).fromNow() }}</p>
            </div>
            <button @click="remove" class=" ml-auto text-xl">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
        </div>
        <p>{{ post.message }}</p>
    </div>
    <img :src="post.photo" class=" w-full">
    <div class=" p-4 flex justify-evenly">
        <button class=" flex items-center gap-2">
            <i class="fa-regular fa-thumbs-up text-lg"></i>
            <p class=" text-sm font-semibold">Like</p>
        </button>
        <button class=" flex items-center gap-2">
            <i class="fa-regular fa-comment text-lg"></i>
            <p class=" text-sm font-semibold">Comment</p>
        </button>
        <button class=" flex items-center gap-2">
            <i class="fa-solid fa-share text-lg"></i>
            <p class=" text-sm font-semibold">Share</p>
        </button>
    </div>
  </div>
</template>