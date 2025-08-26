import React from 'react';
import RocketPage from './RocketPage';

/**
 * makeRocketPage(defaultContent)
 * Returns a React component: ({ content }) => <RocketPage ... />
 * - `defaultContent` is your base content model for a rocket
 * - Pass a partial `content` to override pieces for a one-off page
 */
export default function makeRocketPage(defaultContent) {
  return function BoundRocketPage({ content }) {
    // Shallow merge; keep it simple. If you need deep merge, swap this.
    const merged = { ...defaultContent, ...(content || {}) };
    return <RocketPage content={merged} />;
  };
}
