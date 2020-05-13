<template>
  <div id="app" class="content">
    <header align="center">
      <h1>Ndene Telegram</h1>
      <p>RealTime Voice Chat</p>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from "./firebase";
console.log(auth);

export default {
  name: "App",
  components: {},
};
</script>

<style>
.content {
  background: #51d0de;
}
</style>
