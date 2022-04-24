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

type InitialContext = { value: 'initial'; context: InitialContext };
type ReadyContext = { value: 'ready'; context: ReadyContext };
type LoadingContext = { value: 'loading'; context: LoadingContext };
type SuccessContext = { value: 'success'; context: SuccessContext };
type FailureContext = { value: 'failure'; context: FailureContext };

type FetchState =
  | InitialContext
  | ReadyContext
  | LoadingContext
  | SuccessContext
  | FailureContext;

type FecthEvent = { type: 'FETCH' } | { type: 'RETRY' };

const fetchMachine = createMachine<FetchContext, FecthEvent, FetchState>({
  id: 'fetch',
  initial: 'initial',
  context: {
    restaurants: undefined,
    error: undefined,
  },
  states: {
    initial: {},
  },
});

export default fetchMachine;
