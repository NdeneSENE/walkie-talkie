<template>
  <div>
    <ul>
      <li v-for="chat of chats" :key="chat.id">
        <router-link :to="{ name: 'chat', params: { id: chat.id } }">{{
          chat.id
        }}</router-link>
      </li>
    </ul>
    <button class="button is-dark" @click="createChatRoom()">
      Créer une nouvelle Discussion secrete
    </button>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      chats: [],
    };
  },
  firestore() {
    return {
      chats: db.collection("chats").where("owner", "==", this.uid),
    };
  },
  props: ["uid"],
  methods: {
    async createChatRoom() {
      const newChat = await db.collection("chats").add({
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      });

      console.log(newChat);
    },
  },
};
</script>
