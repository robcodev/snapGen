import { defineConfig, loadEnv } from 'vite'
//import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // Carga las variables de entorno
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    define: {
      'process.env': env
    }
  });
};


// https://vite.dev/config/
/* export default defineConfig({
  plugins: [react()],
}) */
