<template>
  <div>
    <h1>Login</h1>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default {
  methods: {
    async signInWithGoogle() {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log('User signed in:', result.user);
      } catch (error) {
        console.error('Error signing in:', error);
      }
    },
  },
};
</script>
