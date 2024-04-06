import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
type Props = {
  children: ReactNode;
};

export default function ProvidersWrapper({children}: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>{children}</NavigationContainer>
    </QueryClientProvider>
  );
}
