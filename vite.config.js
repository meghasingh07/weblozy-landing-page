import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';

// Custom plugin to remove "use client" from Framer Motion files
const stripUseClient = () => ({
  name: 'strip-use-client',
  transform(code, id) {
    if (id.includes('framer-motion') && code.includes('"use client"')) {
      return code.replace('"use client";', '').replace("'use client';", '');
    }
    return code;
  }
});

export default defineConfig({
  plugins: [
    tailwindcss(),
    stripUseClient(), 
  ],
});
