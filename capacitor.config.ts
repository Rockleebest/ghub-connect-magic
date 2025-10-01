import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8995db20a20e427382afc610784d8dee',
  appName: 'oferta-flash-landing',
  webDir: 'dist',
  server: {
    url: 'https://8995db20-a20e-4273-82af-c610784d8dee.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    },
    StatusBar: {
      style: 'LIGHT_CONTENT',
      backgroundColor: '#ea580c'
    }
  }
};

export default config;