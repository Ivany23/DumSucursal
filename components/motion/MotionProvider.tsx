'use client';

import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * LazyMotion provider — reduces framer-motion bundle from ~130KB to ~30KB
 * by only loading the 'domAnimation' feature set (transforms, opacity, layout).
 * Wraps the entire app so all motion components use the reduced bundle.
 */
export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
};
