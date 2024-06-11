import { Html } from "@react-three/drei";
// It's a growing collection of useful and fully functional readymade 3d abstractions

const Loader = () => {
  return (

    // To render anything in Canvas should have special 3d property i.e either 3d elements or 2d elements which can be incoporated in the 3d scene(like 2d flat surface which can be incorporated in 3d scene). Html component provides incoporate these elements in 3d scene. Html element can impact performance as it directly deals with DOM and providing in the 2d element in the 3d scene also takes calculcation which can further time. Due to Html's 2d z-index behaviour it can be seen above the 3d elements sometimes which is not needed.
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    </Html>
  )
}

export default Loader