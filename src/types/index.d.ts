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
