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
    camera.position.z = 10;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create central geometric structure
    const centralGeometry = new THREE.IcosahedronGeometry(2, 1);
    const centralMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.6,
      shininess: 100
    });
    const centralMesh = new THREE.Mesh(centralGeometry, centralMaterial);
    scene.add(centralMesh);
    meshesRef.current.push(centralMesh);

    // Create wireframe overlay
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframeMesh);
    meshesRef.current.push(wireframeMesh);

    // Create orbiting elements
    const orbitRadius = 5;
    const orbitCount = 8;
    
    for (let i = 0; i < orbitCount; i++) {
      const angle = (i / orbitCount) * Math.PI * 2;
      const x = Math.cos(angle) * orbitRadius;
      const z = Math.sin(angle) * orbitRadius;
      
      const orbitGeometry = new THREE.OctahedronGeometry(0.3);
      const orbitMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(i / orbitCount, 0.8, 0.6),
        transparent: true,
        opacity: 0.8
      });
      
      const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial);
      orbitMesh.position.set(x, 0, z);
      orbitMesh.userData = { 
        originalX: x, 
        originalZ: z, 
        orbitSpeed: 0.5 + i * 0.1,
        angle: angle 
      };
      
      scene.add(orbitMesh);
      meshesRef.current.push(orbitMesh);
    }

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.6
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Colored point lights
    const pointLight1 = new THREE.PointLight(0x00ffff, 0.8, 100);
    pointLight1.position.set(-10, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 0.8, 100);
    pointLight2.position.set(10, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffff00, 0.6, 100);
    pointLight3.position.set(0, 10, -5);
    scene.add(pointLight3);

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

      // Animate orbiting elements
      for (let i = 2; i < meshesRef.current.length; i++) {
        const mesh = meshesRef.current[i];
        if (mesh.userData.orbitSpeed) {
          const newAngle = mesh.userData.angle + time * mesh.userData.orbitSpeed;
          mesh.position.x = Math.cos(newAngle) * orbitRadius;
          mesh.position.z = Math.sin(newAngle) * orbitRadius;
          mesh.position.y = Math.sin(time * 2 + i) * 0.5;
          
          mesh.rotation.x = time * 2;
          mesh.rotation.y = time * 1.5;
        }
      }

      // Animate particles
      if (particlesMesh) {
        particlesMesh.rotation.y = time * 0.1;
        const positions = particlesMesh.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] = Math.sin(time + i * 0.01) * 2;
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true;
      }

      // Camera movement based on mouse
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