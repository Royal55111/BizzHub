import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeView = () => {
  const globeRef = useRef();

  useEffect(() => {
    // Optional: disable zoom and set starting view
    const controls = globeRef.current.controls();
    controls.enableZoom = false;
    globeRef.current.pointOfView({ altitude: 2.5 }, 0);
  }, []);

  return (
    <div className="w-full h-[500px]">
      <Globe
        ref={globeRef}
        globeImageUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
        backgroundColor="rgba(0,0,0,0)" // transparent background
      />
    </div>
  );
};

export default GlobeView;
