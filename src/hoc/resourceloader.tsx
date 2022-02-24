import * as React from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

interface ResourceLoaderProps {
  children: React.ReactChild;
}

const ResourceLoader = ({ children }: ResourceLoaderProps) => {
  const [_isReady, setIsReady] = React.useState<boolean>(false);
  const _cacheResourcesAsync = async () => {
    return Font.loadAsync({
      RobotoBold: require("../../assets/fonts/Roboto-Bold.ttf"),
      RobotoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
      RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
    });
  };
  if (!_isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return <>{children}</>;
};

export default ResourceLoader;
