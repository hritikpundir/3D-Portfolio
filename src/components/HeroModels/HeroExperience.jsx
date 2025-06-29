import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room'; 
import HeroLights from './HeroLights';


const HeroExperience = () => {
    const isMobile  = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet  = useMediaQuery({ query: '(max-width: 768px)' });


  return (
    <Canvas style={{ width: '100%', height: '100%' }} camera={{position: [0, 0, 15], fov: 45}}  >
      

      <OrbitControls 
        enablePan={false} 
        enableZoom={!isTablet} 
        maxDistance={20} 
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <group
        scale={isMobile ? 0.3 : 1}
        position = {[0,-3.5,0]}
        rotation={[0, -Math.PI / 4, 0]}
       >
        <Room />
       </group>

    
    </Canvas>
    
  )
}

export default HeroExperience