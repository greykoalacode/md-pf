import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
const About = dynamic(() => import('../Components/HomePage/About'))
const Education = dynamic(() => import('../Components/HomePage/Education'))
const Experience = dynamic(() => import('../Components/HomePage/Experience'))
const Poster = dynamic(() => import('../Components/HomePage/Poster'))
const ReachOut = dynamic(() => import('../Components/HomePage/ReachOut'))
// import About from '../Components/HomePage/About'
// import Education from '../Components/HomePage/Education'
// import Experience from '../Components/HomePage/Experience'
// import Poster from '../Components/HomePage/Poster'
// import ReachOut from '../Components/HomePage/ReachOut'
import useData from '../handlers'



// export async function getServerSideProps(){
//   // console.log(process.env.NEXT_PUBLIC_API_KEY)

//   return {
//     props: {
//       'e':'er'
//     }
//   }
// }



export default function Home() {
  const { data, getData } = useData();

  useEffect(() => {
    async function onPageLoad (){
      await getData();
    }
    onPageLoad();
  },[]);
  // const newData = await getStaticProps();
  return (
    <div>
      <Head>
        <title>Manasi Deshpande</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      {
        data && (
          <>
            <Poster details={data[5][0]} />
            <About about={data[4][0]} />
            <Education education={data[3]} />
            <Experience experience={data[0]} certification={data[2]} />
            <ReachOut platforms={data[1]} />
          </>
        )
        }
    </div>
  )
}
