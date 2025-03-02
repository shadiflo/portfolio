import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import * as THREE from 'three'

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true, modelName: 'robot' }
) {
  const { receiveShadow, castShadow, modelName } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader(draco);

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = modelName || 'robot' // Allow custom model name, default to 'robot'

        // Reset position
        obj.position.set(0, 0, 0)

        // Set scale based on model type
        if (modelName === 'diamond') {
          // Diamond models typically need different scaling
          obj.scale.set(0.35, 0.35, 0.35)

          // Apply rotation if needed for diamond orientation
          obj.rotation.set(0, 0, 0)
        } else {
          // Default robot scaling
          obj.scale.set(0.5, 0.5, 0.5)
        }

        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow

        // Add the model to the scene
        scene.add(obj)

        // Log model details for debugging
        console.log(`${modelName} model details:`, {
          position: obj.position,
          scale: obj.scale,
          children: obj.children.length
        });

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow

            // Apply material settings based on model type
            if (child.material) {
              // Common material settings
              const applyMaterialSettings = (mat) => {
                mat.transparent = false;
                mat.opacity = 1;
                mat.needsUpdate = true;
                mat.side = THREE.DoubleSide;

                if (modelName === 'diamond') {
                  // Diamond-specific material settings
                  mat.metalness = 0.9;
                  mat.roughness = 0.1;
                  mat.envMapIntensity = 1.5;

                  // Add some reflection and refraction for diamond-like appearance
                  if (mat.color) {
                    // Slight blue tint for diamond
                    mat.color.lerp(new THREE.Color(0x88ccff), 0.2);
                    mat.emissive = new THREE.Color(0x112233).multiplyScalar(0.2);
                  }
                } else {
                  // Robot material settings
                  mat.metalness = 0.7;
                  mat.roughness = 0.3;

                  if (mat.color) {
                    mat.emissive = mat.color.clone().multiplyScalar(0.2);
                  }
                }
              };

              if (Array.isArray(child.material)) {
                child.material.forEach(applyMaterialSettings);
              } else {
                applyMaterialSettings(child.material);
              }
            }

            console.log(`${modelName} mesh details:`, {
              name: child.name,
              visible: child.visible,
              materialType: child.material ? child.material.type : 'none',
              position: child.position
            });
          }
        })
        resolve(obj)
      },
      // Progress callback
      (xhr) => {
        console.log(`${modelName}: ${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      // Error callback
      function (error) {
        console.error(`Error loading ${modelName} GLB:`, error);
        reject(error)
      }
    )
  })
}
