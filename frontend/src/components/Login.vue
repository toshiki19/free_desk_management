<template>
  <div>
    <h1>Login</h1>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log('User signed in:', result.user);
        router.push('/');
      } catch (error) {
        console.error('Error signing in:', error);
      }
    };

    return { signInWithGoogle };
  }
};
</script>
