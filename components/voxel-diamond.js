import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { Box, Spinner } from '@chakra-ui/react'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

// A compact diamond model viewer optimized for use in navigation
const VoxelDiamond = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  // Using the diamond.glb file
  const urlDiamondGLB = `${process.env.NODE_ENV === 'production' ? '' : ''}/diamond.glb?t=${Date.now()}`

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)

      // Additional renderer settings for better material quality
      renderer.physicallyCorrectLights = true
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.5
      renderer.outputEncoding = THREE.sRGBEncoding

      container.appendChild(renderer.domElement)
      refRenderer.current = renderer

      const scene = new THREE.Scene()

      // Camera setup for small viewport
      const target = new THREE.Vector3(0, 0, 0)
      const initialCameraPosition = new THREE.Vector3(0, 0, 5)

      // Orthographic camera for consistent size regardless of zoom
      const scale = 1.5
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      // Lighting optimized for diamond/crystal material
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
      scene.add(ambientLight)

      // Add directional lights to create sparkle effect
      const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2)
      dirLight1.position.set(5, 10, 7.5)
      scene.add(dirLight1)

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 1)
      dirLight2.position.set(-5, 8, -7.5)
      scene.add(dirLight2)

      // Add point light for diamond-like sparkle
      const pointLight = new THREE.PointLight(0xffffff, 1.5)
      pointLight.position.set(0, 3, 3)
      scene.add(pointLight)

      // Control setup - we want gentle auto-rotation
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 1.2
      controls.enableZoom = false
      controls.enablePan = false
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.target = target

      loadGLTFModel(scene, urlDiamondGLB, {
        receiveShadow: false,
        castShadow: false,
        modelName: 'diamond' // Pass custom name to overwrite 'robot'
      }).then((model) => {
        console.log('Diamond model loaded successfully:', model);

        // Hide loading spinner
        setLoading(false)

        // Start animation
        animate()
      }).catch(error => {
        console.error('Error loading diamond model:', error)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 0
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className="voxel-diamond"
      width="30px"
      height="30px"
      position="relative"
      display="inline-block"
      transition="transform 0.2s"
    >
      {loading && (
        <Spinner
          size="xs"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        />
      )}
    </Box>
  )
}

export default VoxelDiamond
