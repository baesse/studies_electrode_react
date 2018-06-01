module.exports = {
  cache: {
    cacheId: "studies_electrode_react",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "studies_electrode_react",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
