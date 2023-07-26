export interface IAPI {
  chrome: Function;
  node: Function;
  electron: Function;
  setTitle: (title: string) => void;
}

declare global {
  interface Window {
    API: IAPI;
  }
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}