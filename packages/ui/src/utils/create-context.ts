import { inject, provide } from "vue";

export const createContext = <Value>(name: string, rootComponentName: string) => {
  const key = Symbol(name);

  const provideCtx = (value: Value) => {
    provide(key, value);
  };

  const injectCtx = <Fallback = undefined>(fallback?: Fallback) => {
    const value = inject<Value | Fallback | undefined>(key, fallback);

    if (value === undefined) {
      throw new Error(
        `Injection "${key.description}" not found. Use this component within <${rootComponentName}>.`,
      );
    }

    return value;
  };

  return [provideCtx, injectCtx] as const;
};
