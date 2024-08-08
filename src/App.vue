<script setup>
import { useCounterStore } from '../stores/counter.js';

const counterStore = useCounterStore()


</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <br>
    <RouterLink to="/slot">Go to Default Slot</RouterLink>
    <br>
    <RouterLink to="/named">Go to Named</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>