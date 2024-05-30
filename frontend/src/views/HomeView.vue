<template>
  <div>
    <h1>Home</h1>
    <div v-if="user">
      <p>Welcome, {{ user.displayName }}</p>
      <img :src="user.photoURL" alt="User profile picture">
      <button @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export default {
  setup() {
    const user = ref(null);

    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });

    const signOutUser = async () => {
      await signOut(auth);
    };

    return {
      user,
      signOut: signOutUser
    };
  }
};
</script>
