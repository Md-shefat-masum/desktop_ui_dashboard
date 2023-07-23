// vite.config.js
import { defineConfig } from "file:///G:/projects/dashboard/dashboard_laravel_10/node_modules/vite/dist/node/index.js";
import laravel from "file:///G:/projects/dashboard/dashboard_laravel_10/node_modules/laravel-vite-plugin/dist/index.mjs";
import vue from "file:///G:/projects/dashboard/dashboard_laravel_10/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/dashboard/main.js"],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          // The Vue plugin will re-write asset URLs, when referenced
          // in Single File Components, to point to the Laravel web
          // server. Setting this to `null` allows the Laravel plugin
          // to instead re-write asset URLs to point to the Vite
          // server instead.
          base: null,
          // The Vue plugin will parse absolute URLs and treat them
          // as absolute paths to files on disk. Setting this to
          // `false` will leave absolute URLs un-touched so they can
          // reference assets in the public directory as expected.
          includeAbsolute: false
        }
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxwcm9qZWN0c1xcXFxkYXNoYm9hcmRcXFxcZGFzaGJvYXJkX2xhcmF2ZWxfMTBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXHByb2plY3RzXFxcXGRhc2hib2FyZFxcXFxkYXNoYm9hcmRfbGFyYXZlbF8xMFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovcHJvamVjdHMvZGFzaGJvYXJkL2Rhc2hib2FyZF9sYXJhdmVsXzEwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgaW5wdXQ6IFsncmVzb3VyY2VzL2Rhc2hib2FyZC9tYWluLmpzJ10sXG4gICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgdnVlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBWdWUgcGx1Z2luIHdpbGwgcmUtd3JpdGUgYXNzZXQgVVJMcywgd2hlbiByZWZlcmVuY2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIFNpbmdsZSBGaWxlIENvbXBvbmVudHMsIHRvIHBvaW50IHRvIHRoZSBMYXJhdmVsIHdlYlxuICAgICAgICAgICAgICAgICAgICAvLyBzZXJ2ZXIuIFNldHRpbmcgdGhpcyB0byBgbnVsbGAgYWxsb3dzIHRoZSBMYXJhdmVsIHBsdWdpblxuICAgICAgICAgICAgICAgICAgICAvLyB0byBpbnN0ZWFkIHJlLXdyaXRlIGFzc2V0IFVSTHMgdG8gcG9pbnQgdG8gdGhlIFZpdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VydmVyIGluc3RlYWQuXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IG51bGwsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIFZ1ZSBwbHVnaW4gd2lsbCBwYXJzZSBhYnNvbHV0ZSBVUkxzIGFuZCB0cmVhdCB0aGVtXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGFic29sdXRlIHBhdGhzIHRvIGZpbGVzIG9uIGRpc2suIFNldHRpbmcgdGhpcyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBgZmFsc2VgIHdpbGwgbGVhdmUgYWJzb2x1dGUgVVJMcyB1bi10b3VjaGVkIHNvIHRoZXkgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZSBhc3NldHMgaW4gdGhlIHB1YmxpYyBkaXJlY3RvcnkgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVBYnNvbHV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1QsU0FBUyxvQkFBb0I7QUFDclYsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPLENBQUMsNkJBQTZCO0FBQUEsTUFDckMsU0FBUztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ04sb0JBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTWhCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTU4saUJBQWlCO0FBQUEsUUFDckI7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
