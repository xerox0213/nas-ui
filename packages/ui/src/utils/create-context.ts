import { inject, type InjectionKey, provide } from "vue";

export const createContext = <T>(name: string, rootComponentName: string) => {
  const key = Symbol(name) as InjectionKey<T>;

  const provideCtx = (value: T) => {
    provide(key, value);
  };

  const injectCtx = () => {
    const value = inject(key);

    if (value === undefined) {
      throw new Error(
        `Injection "${key.description}" not found. Use this component within <${rootComponentName}>.`,
      );
    }

    return value;
  };

  return [provideCtx, injectCtx] as const;
};
