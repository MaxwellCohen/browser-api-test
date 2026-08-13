import { Suspense } from "react";
import { WithoutUseClient } from "./without-use-client";

export default function Home() {
  console.log('Home page rendered')
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
