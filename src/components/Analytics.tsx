
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Analytics: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Website Analytics</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Analytics Disabled</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Website traffic tracking has been removed from this application.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
