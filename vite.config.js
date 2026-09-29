import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ exclude: [/\/pdf\//, /\.solid\.tsx$/, /\/node_modules\//] }),
    tailwindcss(),
  ],
  server:{port:3000,
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        changeOrigin:true,
        secure:false,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  }
})
