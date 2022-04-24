import { createMachine } from 'xstate';

const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'initial',
  states: {
    initial: {},
  },
});

export default fetchMachine;
