<script setup>
import { onUnmounted, ref } from "vue";
import Story from "./Story.vue"
import Post from "./Post.vue";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, collection, serverTimestamp, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadString, getDownloadURL } from "firebase/storage";

const stories = ref([
    { id: 1, displayName: "Sailor Moon", photoURL: "/images/sailor.png", photo: "/images/story1.png" },
    { id: 2, displayName: "Yoda", photoURL: "/images/yoda.png", photo: "/images/story2.png" },
    { id: 3, displayName: "Pikachu", photoURL: "/images/pikachu.png", photo: "/images/story3.png" },
    { id: 4, displayName: "Harry Potter", photoURL: "/images/harry.png", photo: "/images/story4.png" },
    { id: 5, displayName: "Jack Skellington", photoURL: "/images/jack.png", photo: "/images/story5.png" },
])

const {displayName, photoURL, uid} = getAuth().currentUser
const posts = ref([])
const message = ref("")
const photo = ref(null)
const loading = ref(false)

const reader = new FileReader
reader.addEventListener("load", e => photo.value = reader.result)
const preview = e => reader.readAsDataURL(e.target.files[0])

const add = async e => {
    const docRef = doc(collection(getFirestore(), "posts"))
    const photoRef = storageRef(getStorage(), docRef.id)

    loading.value = true

    await uploadString(photoRef, photo.value, "data_url")

    await setDoc(docRef, {
        uid,
        displayName,
        photoURL,
        message: message.value,
        photo: await getDownloadURL(photoRef),
        timestamp: serverTimestamp()
    })

    message.value = ""
    photo.value = null
    loading.value = false
}

const unsubscribe = onSnapshot(
    query(
        collection(getFirestore(), "posts"),
        orderBy("timestamp", "desc"),
        // where("uid", "==", uid)
    ),
    snapshot => posts.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
)

onUnmounted(unsubscribe)
</script>

<template>
    <div class="col-span-2 grid gap-6">
        <div class=" hidden md:grid grid-cols-5 gap-4">
            <Story v-for="story in stories" :key="story.id" :story="story"/>
        </div>
        <form @submit.prevent="add" class=" bg-white shadow rounded-xl px-4 divide-y">
            <div class=" py-4 flex gap-4">
                <img :src="photoURL" class=" size-12 rounded-full object-cover">
                <div class="bg-gray-100 flex-1 px-4 rounded-full text-sm flex gap-4">
                    <input v-model.trim="message" required :placeholder="`What's on your mind, ${displayName}?`" class=" outline-none flex-1 bg-transparent">
                    <button :disabled="loading" class=" text-gray-400">
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            <img :src="photo" v-if="photo" @click="photo = null" class=" rounded-xl w-full cursor-pointer">
            <div class=" py-4 flex justify-evenly">
                <button class=" flex items-center gap-2">
                    <i class="fa-solid fa-video text-xl text-red-400"></i>
                    <p class=" text-sm font-semibold">Video</p>
                </button>
                <label class=" flex items-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-camera text-xl text-emerald-400"></i>
                    <p class=" text-sm font-semibold">Photo</p>
                    <input type="file" accept="image/*" hidden required @change="preview">
                </label>
                <button class=" flex items-center gap-2">
                    <i class="fa-regular fa-smile text-xl text-yellow-400"></i>
                    <p class=" text-sm font-semibold">Feeling</p>
                </button>
            </div>
        </form>
        <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>