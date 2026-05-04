module.exports = {
  name: process.env.EXPO_PUBLIC_NAME,
  slug: process.env.EXPO_PUBLIC_SLUG,
  version: process.env.EXPO_PUBLIC_VERSION,
  scheme: 'msauth',
  orientation: 'portrait',
  icon: process.env.EXPO_PUBLIC_IOS_ICON,
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  backgroundColor: process.env.EXPO_PUBLIC_DEFAULT_BACKGROUNDCOLOR,
  assetBundlePatterns: ['**/*'],
  ios: {
    icon: {
      backgroundColor: process.env.EXPO_PUBLIC_IOS_ICON_BACKGROUNDCOLOR
    },
    infoPlist: {
      NSCameraUsageDescription: `Your camera will be used to scan barcodes or take pictures for ${process.env.EXPO_PUBLIC_NAME}.`,
      NSLocationWhenInUseUsageDescription: 'Your locations information will be used whenever you access the inventory.',
      CFBundleURLTypes: [
        {
          CFBundleURLSchemes: [process.env.EXPO_PUBLIC_CFBUNDLE_URL_SCHEME_0]
        }
      ],
      LSApplicationQueriesSchemes: ['msauth', 'msauthv2', 'msauthv3']
    },
    supportsTablet: true,
    googleServicesFile: './GoogleService-Info.plist',
    bundleIdentifier: process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER,
    buildNumber: process.env.EXPO_PUBLIC_IOS_BUILD_NUMBER
  },
  android: {
    adaptiveIcon: {
      foregroundImage: process.env.EXPO_PUBLIC_ANDROID_ICON,
      backgroundColor: process.env.EXPO_PUBLIC_ANDROID_ICON_BACKGROUNDCOLOR
    },
    googleServicesFile: './google-services.json',
    edgeToEdgeEnabled: true,
    package: process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER,
    versionCode: Number(process.env.EXPO_PUBLIC_ANDROID_VERSION_CODE)
  },
  web: {
    favicon: './assets/images/favicon.png'
  },
  plugins: [
    ['./plugins/withNinjaLongPaths'],
    ['@react-native-firebase/app'],
    ['@react-native-firebase/auth'],
    ['@react-native-firebase/crashlytics'],
    [
      'expo-build-properties',
      {
        android: {
          minSdkVersion: 26,
          compileSdkVersion: 36,
          targetSdkVersion: 36
        },
        ios: {
          useFrameworks: 'static'
        }
      }
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'Allow $(PRODUCT_NAME) to access your photos',
        cameraPermissions: 'Allow $(PRODUCT_NAME) to access your camera'
      }
    ],
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission: 'Allow $(PRODUCT_NAME) to use your location.'
      }
    ],
    [
      'expo-splash-screen',
      {
        ios: {
          backgroundColor: process.env.EXPO_PUBLIC_IOS_SPLASH_BACKGROUNDCOLOR,
          image: process.env.EXPO_PUBLIC_SPLASH_IMAGE,
          imageWidth: Number(process.env.EXPO_PUBLIC_IOS_SPLASH_IMAGE_WIDTH)
        },
        android: {
          backgroundColor: process.env.EXPO_PUBLIC_ANDROID_SPLASH_BACKGROUNDCOLOR,
          image: process.env.EXPO_PUBLIC_SPLASH_IMAGE,
          imageWidth: Number(process.env.EXPO_PUBLIC_ANDROID_SPLASH_IMAGE_WIDTH)
        }
      }
    ]
  ]
};
