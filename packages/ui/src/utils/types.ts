/** `T[]` when `M` is `true`, `T` otherwise. */
export type SingleOrMultiple<M extends boolean, T> = M extends true ? T[] : T;
