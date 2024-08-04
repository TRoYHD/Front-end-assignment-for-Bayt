import React, { createContext, useContext, useState, useCallback } from 'react';

const RenderingContext = createContext();

export const RenderingProvider = ({ children }) => {
  const [renderPriority, setRenderPriority] = useState(0);

  const markRendered = useCallback((chart) => {
    setRenderPriority((prev) => {
      if (chart === 'lineChart' && prev < 1) return 1;
      if (chart === 'donutChart' && prev < 2) return 2;
      if (chart === 'columnChart' && prev < 3) return 3;
      return prev;
    });
  }, []);

  return (
    <RenderingContext.Provider value={{ renderPriority, markRendered }}>
      {children}
    </RenderingContext.Provider>
  );
};

export const useRendering = () => useContext(RenderingContext);