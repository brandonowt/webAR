'use client';
import React, { useEffect, useState } from 'react';
import '@google/model-viewer';

const ARViewer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p>Loading AR Viewer...</p>;
  }

  return (
    <div className="text-center">
      <model-viewer
        src="/models/ak47_with_scope.glb"
        ios-src="/models/AK47_with_scope.usdz"
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        auto-rotate
        ar-placement="floor"
        style={{
          width: '100%',
          height: '500px',
          backgroundColor: 'gray',
        }}
      ></model-viewer>

      {/* Button to Launch AR */}
      <button
        onClick={() => {
          const modelViewer = document.querySelector('model-viewer');
          if (modelViewer) {
            modelViewer.activateAR();
          }
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        View in AR
      </button>
    </div>
  );
};

export default ARViewer;
