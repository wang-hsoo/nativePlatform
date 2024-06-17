export {};

declare global {
  interface Window {
    electron?: {
      sendMessage: (channel: string, data: any) => void;
      onMessage: (channel: string, callback: (data: any) => void) => void;
    };
  }
}