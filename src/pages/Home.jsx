import { Canvas } from "@react-three/fiber";

// import { Loader } from "../components - Tries to import Loader component element from the same level of home.jsx file but the components folder is in same level of the pages folder -import { Loader } from "../components/Loader";

import { Suspense, useEffect, useRef, useState } from "react";

// Downloaded audio
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";


// Ctrl+W and select the tab in the vscode and it get closed.


const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Adjusting the scale and position of plane
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  // Modifying the scale and position according to screen size. This is not the hook it do not directly change or manage the ui components
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      
      // Here the position is for x-axis, y-axis and z-axis. As the there are 3 axes of the position 
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  // It runs for one time
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  

  return (

    // see the css by hovering over the styles. Here classname is prop sent to the section element.
    <section  className='w-full h-screen relative'>
      
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        popup
      </div> */}

      {/* Adding popups */}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        
        {/* When it reaches some currentstage then HomeInfo shows. Rendering the conditional components. */}
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      
      {/* Root Component for rendering all the 3d components. Props is the data object which passed to the component (just like the argument passed to teh functions in the js) to configure the component with external data. Props allows to create different components with different data. Prop is read-only object. Camera is a prop which has been added to the Canvas to show 3d application in within specific distance ranges. The classname is dynamica here due to the cursor grabbing added so that cursor got grabbed. */}
      <Canvas className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}>

        {/* Suspense is a wrapper which is used for rendering the loading screen. To create Loader element go to componenets folder and create a jsx file for it and import it. Suspense first loads teh data which is needed and then render the all the data. Till the data which is late get loaded Loader component get displayed. */}
        <Suspense fallback={<Loader />}>
          
          {/* This simulates the light coming from distant source sun. Position is for positioned of sun and intensity of light of sun. */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          
          {/* Show light equally on all the objects without casting shadows. So no position is declared*/}
          <ambientLight intensity={0.5} />

          {/*  It emits lights in all direction. Not needed as it's outside.*/}
          {/* <pointLight  /> */}

          {/* It emits the light in the shape of cone  */}
          {/* <spotLight/> */}

          {/* It illuminates the scene with the gradient */}
          <hemisphereLight 
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

        {/* Without lights 3d model couldn't be seen. */}
        <Bird />
        <Sky isRotating={isRotating} />
        
        {/* Import the island */}
        <Island

          // This is added for going to that direction of rotation when cursor is grabbed.
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage} 
          position={islandPosition}

          // Also add rotation for the island
          rotation={[0.1, 4.7077, 0]}
          scale={islandScale}
        />
        <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />

        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>

    </section>
  )
}

export default Home