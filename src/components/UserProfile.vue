<template>
  <div>
    Vous etes connecté en tant que {{ user.uid }}<br />
    <button @click="auth.signOut()" class="button">Se deconnecter</button>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      auth,
    };
  },
  props: ["user"],
};
</script>
