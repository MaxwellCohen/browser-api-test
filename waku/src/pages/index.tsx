import { Suspense } from 'react';
import { WithoutUseClient } from './without-use-client';

export default async function HomePage() {

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

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
