export type ServerActionType<T = void> = (args?: T) => Promise<{
  error?: string;
  message?: string;
  success?: string;
}>;
