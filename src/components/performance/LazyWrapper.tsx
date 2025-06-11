
import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyWrapperProps {
  factory: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  errorBoundary?: ComponentType<any>;
  children?: any;
}

const DefaultFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse flex flex-col items-center space-y-3">
      <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
      <div className="h-3 w-24 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  factory, 
  fallback = <DefaultFallback />,
  errorBoundary: ErrorBoundary,
  children,
  ...props 
}) => {
  const LazyComponent = lazy(factory);

  const WrappedComponent = () => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props}>
        {children}
      </LazyComponent>
    </Suspense>
  );

  if (ErrorBoundary) {
    return (
      <ErrorBoundary>
        <WrappedComponent />
      </ErrorBoundary>
    );
  }

  return <WrappedComponent />;
};

export default LazyWrapper;
