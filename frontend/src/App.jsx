import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';


const App = () => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>


      {/* these are for vercel for chaking speed and insights */}
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App