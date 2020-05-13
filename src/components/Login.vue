<template>
  <aside class="section">
    <h3>Connectez vous de façon anonyme</h3>
    <button class="button" @click="auth.signInAnonymously()">
      Se connecter anonymement
    </button>

    <div v-if="newUser">
      <h3>Inscrivez-vous pour un nouveau compte</h3>
      <a href="#" @click="newUser = false">Déja inscrit?</a>
    </div>

    <div v-else>
      <h3>Connectez-vous par e-mail</h3>
      <a href="#" @click="newUser = true">Pas encore de compte?</a>
    </div>

    <label for="email">Email</label>
    <br />
    <input v-model="email" placeholder="Email" type="email" class="input" />

    <label for="password">Password</label>
    <br />
    <input
      v-model="password"
      placeholder="Password"
      type="password"
      class="input"
    />

    <br />

    <button
      class="button is-info"
      :class="{ 'is-loading': loading }"
      @click="signInOrCreateUser()"
    >
      {{ newUser ? "S'inscrire" : "Se connecter" }}
    </button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      auth,
      newUser: false,
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },

  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = "";
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }

      this.loading = false;
    },
  },
};
</script>
