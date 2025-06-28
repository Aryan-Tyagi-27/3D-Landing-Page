import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Hero3DScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const frameRef = useRef();
  const meshesRef = useRef([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create central sphere
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.7,
      shininess: 100
    });
    const centralMesh = new THREE.Mesh(geometry, material);
    scene.add(centralMesh);
    meshesRef.current.push(centralMesh);

    // Create wireframe
    const wireframeGeometry = new THREE.SphereGeometry(1.6, 16, 16);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframeMesh);
    meshesRef.current.push(wireframeMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ffff, 0.5, 100);
    pointLight.position.set(-5, 0, 5);
    scene.add(pointLight);

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate central mesh
      if (meshesRef.current[0]) {
        meshesRef.current[0].rotation.x = time * 0.3;
        meshesRef.current[0].rotation.y = time * 0.5;
      }
      
      // Animate wireframe
      if (meshesRef.current[1]) {
        meshesRef.current[1].rotation.x = -time * 0.2;
        meshesRef.current[1].rotation.y = -time * 0.4;
      }

      // Camera movement
      if (cameraRef.current) {
        cameraRef.current.position.x += (mouse.x * 2 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouse.y * 2 - cameraRef.current.position.y) * 0.05;
        cameraRef.current.lookAt(0, 0, 0);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

export default Hero3DScene;