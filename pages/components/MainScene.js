const MainScene = () => {

    return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
    <a-scene vr-mode-ui="enabled: true;" loading-screen="enabled: false;">
      <a-assets>
        <img
          src="/assets/img/moss.jpg"
          alt="floor_image"
          crossOrigin="anonymous"
        />
        <img
          src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          alt="sky_image"
          crossOrigin="anonymous"
        />
      </a-assets>

      <a-entity>
        <a-light light="type: ambient; intensity: 2.2;"></a-light>
      {/* FOREST */}
      {/* <a-entity gltf-model="url(/assets/models/pine_forest_lowq/scene.gltf)" /> */}

      {/* T-REX DINOSAUR */}
      {/* animation="property: position; from:-3 -0.2 -14;to:0 -0.2 14;loop:-1;dur:8500" */}
      <a-entity gltf-model="url(/assets/models/trex_lowq/scene.gltf)" scale="0.7 0.7 0.7" 
      // position="-10.5 0 -9" 
      rotation="0 -10 0" animation="property: position; from:-10.5 0 -25.5; to:-10.5 0 -9;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/trex_lowq/scene.gltf)" scale="0.7 0.7 0.7" 
      // position="-7 0 -9" 
      rotation="0 -10 0" animation="property: position; from:-7 0 -25.5; to:-7 0 -9;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.8; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/trex_lowq/scene.gltf)" scale="0.7 0.7 0.7" 
      // position="-3.5 0 -9" 
      rotation="0 -10 0" animation="property: position; from:-3.5 0 -25.5; to:-3.5 0 -9;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.3; crossFadeDuration: 1;" />
      <a-entity light="type: ambient; intensity: 0.2">
        <a-entity light="type: point; intensity: 0.7; position: 0 0 -8">
          <a-entity gltf-model="url(/assets/models/trex_lowq/scene.gltf)" scale="1 1 1" 
          // position="0 0 -8.5" 
          animation="property: position; from:0 0 -25; to:0 0 -8.5;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.1; crossFadeDuration: 1;" />
        </a-entity>
      </a-entity>
      <a-entity gltf-model="url(/assets/models/trex_lowq/scene.gltf)" scale="0.7 0.7 0.7" 
      // position="3.5 0 -9" 
      rotation="0 10 0" animation="property: position; from:3.5 0 -25.5; to:3.5 0 -9;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.5; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/trex_lowq/scene.gltf)" scale="0.7 0.7 0.7" 
      // position="7 0 -9" 
      rotation="0 10 0" animation="property: position; from:7 0 -25.5; to:7 0 -9;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.7; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/trex_lowq/scene.gltf)" scale="0.7 0.7 0.7" 
      // position="10.5 0 -9" 
      rotation="0 10 0" animation="property: position; from:10.5 0 -25.5; to:10.5 0 -9;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.4; crossFadeDuration: 1;" />
      
      {/* PHOENIX BIRD */}
      <a-entity gltf-model="url(/assets/models/bird_lowq/scene.gltf)" scale="0.0035 0.0035 0.0035" 
      // position="-10.5 5 -8" 
      rotation="0 -120 0" animation="property: position; from:-10.5 5 -27.5; to:-10.5 5 -11;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 0.7; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/bird_lowq/scene.gltf)" scale="0.0035 0.0035 0.0035" 
      // position="-5.5 5 -8" 
      rotation="0 -105 0" animation="property: position; from:-5.5 5 -27.5; to:-5.5 5 -11;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.3; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/bird_lowq/scene.gltf)" scale="0.0035 0.0035 0.0035" 
      // position="0 5 -8" 
      rotation="0 -90 0" animation="property: position; from:0 5 -24.5; to:0 5 -8;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/bird_lowq/scene.gltf)" scale="0.0035 0.0035 0.0035" 
      // position="5.5 5 -8" 
      rotation="0 -75 0" animation="property: position; from:5.5 5 -27.5; to:5.5 5 -11;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.2; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/bird_lowq/scene.gltf)" scale="0.0035 0.0035 0.0035" 
      // position="10.5 5 -8" 
      rotation="0 -60 0" animation="property: position; from:10.5 5 -27.5; to:10.5 5 -11;loop: -1; dur:6000" animation-mixer="clip: Take 001; loop: infinite; timeScale: 0.6; crossFadeDuration: 1;" />

      {/* FLYING DINOSAUR */} 
      <a-entity gltf-model="url(/assets/models/flying_dinosaur_lowq/scene.gltf)" scale="1.3 1.3 1.3" 
      // position="-6 4 -8" 
      rotation="0 0 0" animation="property: position; from:-6 6 -27.5; to:-6 6 -11;loop: -1; dur:6000" animation-mixer="clip: Animation; loop: infinite; timeScale: 1.5; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/flying_dinosaur_lowq/scene.gltf)" scale="1.3 1.3 1.3" 
      // position="-3 4 -8" 
      rotation="0 0 0" animation="property: position; from:-2 6 -24.5; to:-2 6 -8;loop: -1; dur:6000" animation-mixer="clip: Animation; loop: infinite; timeScale: 1.5; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/flying_dinosaur_lowq/scene.gltf)" scale="1.3 1.3 1.3" 
      // position="3 4 -8" 
      rotation="0 0 0" animation="property: position; from:2 6 -24.5; to:2 6 -8;loop: -1; dur:6000" animation-mixer="clip: Animation; loop: infinite; timeScale: 1.5; crossFadeDuration: 1;" />
      <a-entity gltf-model="url(/assets/models/flying_dinosaur_lowq/scene.gltf)" scale="1.3 1.3 1.3" 
      // position="6 4 -8" 
      rotation="0 0 0" animation="property: position; from:6 6 -27.5; to:6 6 -11;loop: -1; dur:6000" animation-mixer="clip: Animation; loop: infinite; timeScale: 1.5; crossFadeDuration: 1;" />
      </a-entity>


      {/* LITTLE T-REX */}
      <a-entity light="type: ambient; intensity: 0.3;">
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:6 0 16; to:6 0 3;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:3 0 16; to:3 0 3;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:0 0 16; to:0 0 3;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:-3 0 16; to:-3 0 3;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:-6 0 16; to:-6 0 3;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />

        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:6 0 22; to:6 0 3;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:3 0 22; to:3 0 9;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:0 0 22; to:0 0 9;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:-3 0 22; to:-3 0 9;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:-6 0 22; to:-6 0 9;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />

        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:6 0 28; to:6 0 15;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:3 0 28; to:3 0 15;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:0 0 28; to:0 0 15;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:-3 0 28; to:-3 0 15;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />
        <a-entity gltf-model="url(/assets/models/little_trex_lowq/scene.gltf)" scale="1.5 1.5 1.5" 
          rotation="0 180 0" animation="property: position; from:-6 0 28; to:-6 0 15;loop: -1; dur:6000" animation-mixer="clip: run; loop: infinite; timeScale: 1.0; crossFadeDuration: 1;" 
        />


      </a-entity>

      {/* <a-entity light="type: ambient; intensity: 0.7">
        <a-entity light="type: point; intensity: 2.0; position: 10 0.7 -2">
          <a-entity gltf-model="url(/assets/models/trex/scene.gltf)" scale="0.5 0.5 0.5" position="10 0.7 -2" animation-mixer="clip: Take 001; loop: infinite; timeScale: 1.5; crossFadeDuration: 1;" />
        </a-entity>
      </a-entity> */}

      <a-sky height="2048" radius="30" src="url(https://cdn.aframe.io/a-painter/images/sky.jpg)" theta-length="90" width="2048" />
      <a-entity particle-system="preset: snow; particle-count: 5000" />
      <a-plane 
        src= "url(/assets/img/moss.jpg)"
        rotation="-90 0 0" 
        repeat="5000 5000" 
        normalMap="url(/assets/img/moss.jpg)" 
        normalTextureRepeat="5000 5000" 
        scale="10000 10000 1" 
      />
      {/* <a-entity
        geometry="primitive: plane; height: auto; width: auto"
        material="color: white"
        text="width: 4; value: Welcome to Metaverse Museum!; align: center;" position="0 2 -1" /> */}
      <a-entity text="width: 3; value: Welcome to Metaverse; align: center;" position="0 2.2 -1"></a-entity>

      {/* <a-curvedimage
        src="url(https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/8a06191d-07f1-44e1-60fc-7d9c200b2000/variant2)"
        theta-length="50"
        theta-start="285"
        radius="0.5"
        height="0.327"
        position="0 1.5 0"
        scale="3 3 3"
      />
      <a-curvedimage
        src="url(https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/b79081d5-2dd2-436f-6540-58c046f8be00/variant2)"
        theta-length="50"
        theta-start="220"
        radius="0.5"
        height="0.327"
        position="0 1.5 0"
        scale="3 3 3"
      />
      <a-curvedimage
        src="url(https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/a2b2019a-82a9-42f8-2dc6-e3adf023f300/variant2)"
        theta-length="50"
        theta-start="155"
        radius="0.5"
        height="0.327"
        position="0 1.5 0"
        scale="3 3 3"
      />
      <a-curvedimage
        src="url(https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/8b098bb2-9353-4286-c5b5-c8f9fced7200/variant2)"
        theta-length="50"
        theta-start="90"
        radius="0.5"
        height="0.327"
        position="0 1.5 0"
        scale="3 3 3"
      />

      <a-curvedimage
        src="url(https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/f71b085c-2a94-4e62-b452-738364235400/variant2)"
        theta-length="50"
        theta-start="26"
        radius="0.5"
        height="0.327"
        position="0 1.5 0"
        scale="3 3 3"
      /> */}

      {/* <a-entity camera look-controls orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 4.5 2 0" /> */}
    </a-scene>
  </div>
)
};

export default MainScene;