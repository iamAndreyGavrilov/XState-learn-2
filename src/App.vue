<template>
  <div>Restaurants</div>
  <button
    @click="send('FETCH')"
    :disabled="!(state.matches('ready') || state.matches('initial'))"
  >
    Fetch
  </button>

  <button @click="send('RETRY')" :disabled="!state.matches('failure')">
    Retry
  </button>

  <div><span v-show="state.matches('loading')">... Loading ...</span></div>

  <div
    v-if="
      state.matches('ready') ||
      state.matches('loading') ||
      state.matches('success')
    "
  >
    <div :key="restaurant.id" v-for="restaurant in state.context.restaurants">
      <h3>{{ restaurant.name }}</h3>
      <p>Rating - {{ restaurant.rating }} stars</p>
      <p>{{ restaurant.review }}</p>
    </div>
  </div>

  <div v-if="state.matches('failure')">
    <h4>Error loading restaurants</h4>
    <p>{{ state.context.error.message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMachine } from '@xstate/vue';
import fetchMachine from './fetchMachine';

export default defineComponent({
  name: 'App',
  setup() {
    const { state, send } = useMachine(fetchMachine, { devTools: true });

    return {
      state,
      send,
    };
  },
});
</script>

<style>
button {
  margin: 10px;
}
</style>
