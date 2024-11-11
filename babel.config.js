module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            // Components
            "@components": "./components",

            // Data
            "@data": "./data",

            // Utils
            "@utils/appwrite": "./utils/appwrite.js",

            // Assets
            "@assets": "./assets"
          }
        }
      ]
    ]
  };
};
