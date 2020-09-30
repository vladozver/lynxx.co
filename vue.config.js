module.exports = {
  pwa: {
    name: "Lynxx.co App",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    },
  },
};
