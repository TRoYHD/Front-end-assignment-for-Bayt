import '../src/components/chartConfig';
import React, { Suspense, lazy, useEffect } from 'react';
import { RenderingProvider, useRendering } from '../src/components/RenderingContext';
import '../src/components/App.css';

const LineChart = lazy(() => import('./components/LineChart'));
const DonutChart = lazy(() => import('./components/DonutChart'));
const ColumnChart = lazy(() => import('./components/ColumnChart'));

const ChartDisplay = () => {
  const { renderPriority, markRendered } = useRendering();

  useEffect(() => {
    markRendered('lineChart');
  }, [markRendered]);

  return (
    <div className="App">
      {renderPriority >= 1 && (
        <Suspense fallback={<div>Loading Line Chart...</div>}>
          <div className="chart-container">
            <h2>Line Chart</h2>
            <LineChart onRendered={() => markRendered('donutChart')} />
          </div>
        </Suspense>
      )}
      {renderPriority >= 2 && (
        <Suspense fallback={<div>Loading Donut Chart...</div>}>
          <div className="chart-container">
            <h2>Donut Chart</h2>
            <DonutChart onRendered={() => markRendered('columnChart')} />
          </div>
        </Suspense>
      )}
      {renderPriority >= 3 && (
        <Suspense fallback={<div>Loading Column Chart...</div>}>
          <div className="chart-container">
            <h2>Column Chart</h2>
            <ColumnChart onRendered={() => {}} />
          </div>
        </Suspense>
      )}
    </div>
  );
};

const App = () => (
  <RenderingProvider>
    <ChartDisplay />
  </RenderingProvider>
);

export default App;