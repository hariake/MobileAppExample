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
            "@components/AuthHeader": "./components/AuthHeader",
            "@components/BottomTabNavigator": "./components/BottomTabNavigator",
            "@components/CategoryBox": "./components/CategoryBox",
            "@components/Checkbox": "./components/Checkbox",
            "@components/CustomButton": "./components/CustomButton",
            "@components/CustomButtonKaks": "./components/CustomButtonKaks",
            "@components/EditableBox": "./components/EditableBox",
            "@components/FavouriteItem": "./components/FavouriteItem",
            "@components/Header": "./components/Header",
            "@components/ListItem": "./components/ListItem",
            "@components/ProductHeader": "./components/ProductHeader",
            "@components/ProductHomeItem": "./components/ProductHomeItem",
            "@components/Separator": "./components/Separator",

            // Data
            "@data/categories": "./data/categories",
            "@data/products": "./data/products",

            // Utils
            "@utils/appwrite": "./utils/appwrite.js",

            // Assets
            "@assets/adaptive-icon": "./assets/adaptive-icon.png",
            "@assets/arrow": "./assets/arrow.png",
            "@assets/auth_back": "./assets/auth_back.png",
            "@assets/back": "./assets/back.png",
            "@assets/bookmark": "./assets/bookmark.png",
            "@assets/check": "./assets/check.png",
            "@assets/close": "./assets/close.png",
            "@assets/edit": "./assets/edit.png",
            "@assets/eye_closed": "./assets/eye_closed.png",
            "@assets/eye": "./assets/eye.png",
            "@assets/favicon": "./assets/favicon.png",
            "@assets/favourites_active": "./assets/favourites_active.png",
            "@assets/favourites": "./assets/favourites.png",
            "@assets/home_active": "./assets/home_active.png",
            "@assets/home": "./assets/home.png",
            "@assets/icon": "./assets/icon.png",
            "@assets/logout": "./assets/logout.png",
            "@assets/plus": "./assets/plus.png",
            "@assets/profile_active": "./assets/profile_active.png",
            "@assets/profile": "./assets/profile.png",
            "@assets/search": "./assets/search.png",
            "@assets/splash": "./assets/splash.png",
          }
        }
      ]
    ]
  };
};
