
import React, { useEffect, useState } from 'react';
import { useAdvancedPerformance } from '../../hooks/useAdvancedPerformance';

interface PerformanceMonitorProps {
  showInDev?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInDev = true 
}) => {
  const { metrics, isSupported, getPerformanceGrade } = useAdvancedPerformance();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' && showInDev) {
      setIsVisible(true);
    }
  }, [showInDev]);

  if (!isVisible || !isSupported) return null;

  const grade = getPerformanceGrade();
  const gradeColors = {
    'excellent': 'bg-green-500',
    'good': 'bg-blue-500', 
    'needs improvement': 'bg-yellow-500',
    'poor': 'bg-red-500',
    'measuring...': 'bg-gray-400'
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-3 h-3 rounded-full ${gradeColors[grade]}`}></div>
        <h3 className="font-semibold text-sm">Performance: {grade}</h3>
      </div>
      
      <div className="space-y-1 text-xs">
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp > 2500 ? 'text-red-600' : metrics.lcp > 1200 ? 'text-yellow-600' : 'text-green-600'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp > 1800 ? 'text-red-600' : metrics.fcp > 1000 ? 'text-yellow-600' : 'text-green-600'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
        )}
        
        {metrics.cls !== undefined && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls > 0.1 ? 'text-red-600' : metrics.cls > 0.05 ? 'text-yellow-600' : 'text-green-600'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.loadComplete && (
          <div className="flex justify-between">
            <span>Load:</span>
            <span className={metrics.loadComplete > 3000 ? 'text-red-600' : 'text-green-600'}>
              {Math.round(metrics.loadComplete)}ms
            </span>
          </div>
        )}
        
        {metrics.resourceCount && (
          <div className="flex justify-between">
            <span>Resources:</span>
            <span>{metrics.resourceCount}</span>
          </div>
        )}
        
        {metrics.totalResourceSize && (
          <div className="flex justify-between">
            <span>Size:</span>
            <span>{(metrics.totalResourceSize / 1024 / 1024).toFixed(1)}MB</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
