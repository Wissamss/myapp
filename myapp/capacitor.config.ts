import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myapp',
  appName: 'myapp',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  },
}

export default config;
