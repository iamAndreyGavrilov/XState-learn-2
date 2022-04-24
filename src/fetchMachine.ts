import { createMachine } from 'xstate';

interface FetchContext {
  restaurants?: Restaurant[];
  error?: Error;
}

type InitialContext = FetchContext & {
  restaurants: undefined;
  error: undefined;
};

type ReadyContext = FetchContext & {
  restaurants: Restaurant[];
  error: undefined;
};
type LoadingContext = FetchContext & {
  restaurants: Restaurant[];
  error: undefined;
};
type SuccessContext = FetchContext & {
  restaurants: Restaurant[];
  error: undefined;
};

type FailureContext = FetchContext & {
  restaurants: undefined;
  error: Error;
};

type InitialState = { value: 'initial'; context: InitialContext };
type ReadyState = { value: 'ready'; context: ReadyContext };
type LoadingState = { value: 'loading'; context: LoadingContext };
type SuccessState = { value: 'success'; context: SuccessContext };
type FailureState = { value: 'failure'; context: FailureContext };

type FetchState =
  | InitialState
  | ReadyState
  | LoadingState
  | SuccessState
  | FailureState;

type FecthEvent = { type: 'FETCH' } | { type: 'RETRY' };

const fetchMachine = createMachine<FetchContext, FecthEvent, FetchState>({
  id: 'fetch',
  initial: 'initial',
  context: {
    restaurants: undefined,
    error: undefined,
  },
  states: {
    initial: {
      on: {
        FETCH: 'loading',
      },
    },
    ready: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {},
    success: {
      after: {
        2500: 'ready',
      },
    },
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});

export default fetchMachine;
