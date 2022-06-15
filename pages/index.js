import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Loading from './components/Loading';
import Script from 'next/script';
import dynamic from 'next/dynamic';
// import Image from 'next/image';

// const DynamicComponent = dynamic(
//     async () => import('./components/MainScene'),
//     { ssr: false, loading: () => <Loading /> }
// );

const DynamicComponent = dynamic(
    () => import('./components/MainScene.js'),
    { ssr: false, loading: () => <Loading /> }
);

// const DynamicComponent = dynamic(
//   () => import('./components/MainScene.js'),
//   { ssr: false }
// );

const Home = () => {

    const [isWindowLoaded, setIsWindowLoaded] = useState(false);
    const [isAframeScriptLoaded, setIsAframeScriptLoaded] = useState(false);
    const [isExtrasScriptLoaded, setIsExtrasScriptLoaded] = useState(false);
    const [isParticleScriptLoaded, setIsParticleScriptLoaded] = useState(false);
    const [isAllScriptsReady, setIsAllScriptsReady] = useState(false);
    // const [isAnimationTimelineScriptLoaded, setIsAnimationTimelineScriptLoaded] = useState(false);
    // const [isJoystickScriptLoaded, setIsJoystickScriptLoaded] = useState(false);

    // const positions = {
    //   first: "-5 0.7 -3",
    //   second: "0.1 0.7 -3",
    //   third: "5 0.7 -3",
    // };

    useEffect(() => {
      if (typeof window !== 'undefined') {
          setIsWindowLoaded(true);
      }
      else {
        setIsWindowLoaded(false);
      }
    }, []);

    useEffect(() => {
      if (isWindowLoaded && isAframeScriptLoaded && isExtrasScriptLoaded && isParticleScriptLoaded) { // && isJoystickScriptLoaded, isAnimationTimelineScriptLoaded, 
          setIsAllScriptsReady(true);
      }
      else {
        setIsAllScriptsReady(false);
      }
    }, [isExtrasScriptLoaded, isParticleScriptLoaded]); // isJoystickScriptLoaded, isAnimationTimelineScriptLoaded, 

    return <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Three.js Museum 3D Model</title>
        </Head>

        {isWindowLoaded &&
        <>
        {/* 0.8.2 / 1.0.0 */}
        <Script src={"https://aframe.io/releases/1.0.0/aframe.min.js"} onLoad={() => setIsAframeScriptLoaded(true)} />
        </>
        }

        {isWindowLoaded && isAframeScriptLoaded &&
        <>
          {/* extras version: 5.1.0 / 6.0.0 / 6.1.0 */}
          <Script src={"https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"} onLoad={() => setIsExtrasScriptLoaded(true)} />
          <Script src={"https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"} onLoad={() => setIsParticleScriptLoaded(true)} />
          {/* <Script src={"https://unpkg.com/aframe-orbit-controls@1.0.0/dist/aframe-orbit-controls.min.js"} onLoad={() => setIsAllScriptsLoadingStatus((prev) => ({...prev, isOrbitControlScriptLoaded: true})) } /> */}
        </>
        }

        {isAllScriptsReady ? 
        <DynamicComponent />
        : <Loading />}
      </>
  };

  export default Home;