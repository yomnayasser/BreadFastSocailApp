import {LogBox} from 'react-native';
import themes from './src/constants/themes/index';
import React, {useEffect} from 'react';
import ProvidersWrapper from './ProvidersWrapper';
import {Navigators} from './src/navigation/index';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
function App(): React.JSX.Element {
  const getTheme = async () => {
    themes.map(theme => {
      if (theme.name === 'Light') {
        theme.apply();
      }
    });
  };
  useEffect(() => {
    getTheme();
  }, []);

  return <Navigators />;
}

const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};

export default AppWithProvider;
