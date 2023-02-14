import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


// export default function FirstPost() {
//     return <h1>First Post</h1>;// this lin is not actually an html. here this is a Jsx  code  which allow us to return an html components from Javascript. And behind the scenes our bundling package of framework convert this jsx into html
//   }


 //note: in jsx expression we can return only one element at a time.
 //for returing multiple elements in expression we use the fragment sign "<>""  just after the return statement and "</>"" after the last element in expression 

//creating link with other pages and returning multipls elements at a time.. 






// export default function FirstPost() {
//   return (
//     <>
//       <Head>
//         <title>First Post</title>
        
//       </Head>
//       <Script
//         src="https://connect.facebook.net/en_US/sdk.js"
//         strategy="lazyOnload"
//         onLoad={() =>
//           console.log(`script loaded correctly, window.FB has been populated`)
//         }
//       />
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">← Back to home</Link>
//       </h2>
//     </>
//   );
// }


// export default function FirstPost() {
//   return (
//     <> 
//       <h1>First Post</h1>
//       <h2><Link href="/">Back to home</Link>
//       </h2>
//     </>
//   );
// }

export default function FirstPost() {
  return (
    <Layout> 
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}

//instead of <> fragment we include <Layout></Layout>

