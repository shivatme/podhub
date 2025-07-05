const APP_VARIANT = process.env.APP_VARIANT;
const IS_DEV = APP_VARIANT === "development";
const IS_PREVIEW = APP_VARIANT === "preview";
const IS_PROD = APP_VARIANT === "production";

const version = "0.0.1"; // Displayed app version (user-facing)
const versionCode = 1; //Android Version Code
const buildNumber = versionCode.toString(); //iOS Build Number

export default {
  expo: {
    name: getAppName(),
    slug: "pod-hub",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      googleServicesFile: "./google-services.json",
      package: getUniqueIdentifier(),
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "@livekit/react-native-expo-plugin",
      "@config-plugins/react-native-webrtc",
      "expo-build-properties",
      "expo-secure-store",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-firebase/messaging",
      "expo-secure-store",
      [
        "expo-build-properties",
        {
          android: {
            extraMavenRepos: [
              "../../node_modules/@notifee/react-native/android/libs",
            ],
          },
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "790f84f7-8a39-4e74-ac58-e0db6b3afcca",
      },
    },
    owner: "shivam2827",
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/790f84f7-8a39-4e74-ac58-e0db6b3afcca",
    },
  },
};

function getAppName() {
  if (IS_DEV) {
    return "Pod Hub (Dev)";
  }

  if (IS_PREVIEW) {
    return "Pod Hub (Preview)";
  }

  if (IS_PROD) {
    return "Pod Hub";
  }
  return "Pod Hub (Dev)";
}

function getUniqueIdentifier() {
  if (IS_DEV) {
    return "com.astch.podhub.dev";
  }

  if (IS_PREVIEW) {
    return "com.astch.podhub.preview";
  }
  if (IS_PROD) {
    return "com.astch.podhub";
  }
  return "com.astch.podhub.dev";
}
