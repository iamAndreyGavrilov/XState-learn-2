<template>
  <div>Restaurants</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMachine } from '@xstate/vue';
import fetchMachine from './fetchMachine';

export default defineComponent({
  name: 'App',
  setup() {
    const { state, send } = useMachine(fetchMachine, { devTools: true });
  },
});
</script>

<style></style>
