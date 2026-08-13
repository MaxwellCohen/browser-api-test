import { createFileRoute } from '@tanstack/react-router'
import { WithoutUseClient } from './without-use-client';
import { Suspense } from 'react';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (<>
    <div>
     <h1>Hello World</h1>
    </div>
 
    <Suspense fallback={<div>from server...</div>}>
     <WithoutUseClient />
 
    </Suspense>
   </>
   );
}
