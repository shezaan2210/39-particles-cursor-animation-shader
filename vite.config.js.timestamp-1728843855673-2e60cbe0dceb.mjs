// vite.config.js
import restart from "file:///Users/shezaan/Desktop/three-js-journey/shaders/39-particles-cursor-animation-shader/node_modules/vite-plugin-restart/dist/index.js";
import glsl from "file:///Users/shezaan/Desktop/three-js-journey/shaders/39-particles-cursor-animation-shader/node_modules/vite-plugin-glsl/src/index.js";
var vite_config_default = {
  root: "src/",
  publicDir: "../static/",
  base: "./",
  server: {
    host: true,
    // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env)
    // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist",
    // Output in the dist/ folder
    emptyOutDir: true,
    // Empty the folder first
    sourcemap: true
    // Add sourcemap
  },
  plugins: [
    restart({ restart: ["../static/**"] }),
    // Restart server on static file change
    glsl()
    // Handle shader files
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2hlemFhbi9EZXNrdG9wL3RocmVlLWpzLWpvdXJuZXkvc2hhZGVycy8zOS1wYXJ0aWNsZXMtY3Vyc29yLWFuaW1hdGlvbi1zaGFkZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zaGV6YWFuL0Rlc2t0b3AvdGhyZWUtanMtam91cm5leS9zaGFkZXJzLzM5LXBhcnRpY2xlcy1jdXJzb3ItYW5pbWF0aW9uLXNoYWRlci92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2hlemFhbi9EZXNrdG9wL3RocmVlLWpzLWpvdXJuZXkvc2hhZGVycy8zOS1wYXJ0aWNsZXMtY3Vyc29yLWFuaW1hdGlvbi1zaGFkZXIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVzdGFydCBmcm9tICd2aXRlLXBsdWdpbi1yZXN0YXJ0J1xuaW1wb3J0IGdsc2wgZnJvbSAndml0ZS1wbHVnaW4tZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3Q6ICdzcmMvJyxcbiAgICBwdWJsaWNEaXI6ICcuLi9zdGF0aWMvJyxcbiAgICBiYXNlOiAnLi8nLFxuICAgIHNlcnZlcjpcbiAgICB7XG4gICAgICAgIGhvc3Q6IHRydWUsIC8vIE9wZW4gdG8gbG9jYWwgbmV0d29yayBhbmQgZGlzcGxheSBVUkxcbiAgICAgICAgb3BlbjogISgnU0FOREJPWF9VUkwnIGluIHByb2Nlc3MuZW52IHx8ICdDT0RFU0FOREJPWF9IT1NUJyBpbiBwcm9jZXNzLmVudikgLy8gT3BlbiBpZiBpdCdzIG5vdCBhIENvZGVTYW5kYm94XG4gICAgfSxcbiAgICBidWlsZDpcbiAgICB7XG4gICAgICAgIG91dERpcjogJy4uL2Rpc3QnLCAvLyBPdXRwdXQgaW4gdGhlIGRpc3QvIGZvbGRlclxuICAgICAgICBlbXB0eU91dERpcjogdHJ1ZSwgLy8gRW1wdHkgdGhlIGZvbGRlciBmaXJzdFxuICAgICAgICBzb3VyY2VtYXA6IHRydWUgLy8gQWRkIHNvdXJjZW1hcFxuICAgIH0sXG4gICAgcGx1Z2luczpcbiAgICBbXG4gICAgICAgIHJlc3RhcnQoeyByZXN0YXJ0OiBbICcuLi9zdGF0aWMvKionLCBdIH0pLCAvLyBSZXN0YXJ0IHNlcnZlciBvbiBzdGF0aWMgZmlsZSBjaGFuZ2VcbiAgICAgICAgZ2xzbCgpIC8vIEhhbmRsZSBzaGFkZXIgZmlsZXNcbiAgICBdXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUE4YSxPQUFPLGFBQWE7QUFDbGMsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVE7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTSxFQUFFLGlCQUFpQixRQUFRLE9BQU8sc0JBQXNCLFFBQVE7QUFBQTtBQUFBLEVBQzFFO0FBQUEsRUFDQSxPQUNBO0FBQUEsSUFDSSxRQUFRO0FBQUE7QUFBQSxJQUNSLGFBQWE7QUFBQTtBQUFBLElBQ2IsV0FBVztBQUFBO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FDQTtBQUFBLElBQ0ksUUFBUSxFQUFFLFNBQVMsQ0FBRSxjQUFnQixFQUFFLENBQUM7QUFBQTtBQUFBLElBQ3hDLEtBQUs7QUFBQTtBQUFBLEVBQ1Q7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
