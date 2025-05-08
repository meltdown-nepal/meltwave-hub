
import React from 'react';

interface FormErrorProps {
  errorMessage: string | null;
}

export function FormError({ errorMessage }: FormErrorProps) {
  if (!errorMessage) return null;
  
  return (
    <div className="text-destructive text-sm">
      <p>Error details: {errorMessage}</p>
      <p className="mt-1">
        If this issue persists, please email us directly at support@meltdownnepal.com
      </p>
    </div>
  );
}
