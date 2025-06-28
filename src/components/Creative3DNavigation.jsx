import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Creative3DNavigation = ({ onNavigate, currentSection }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const frameRef = useRef();
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const navigationMeshesRef = useRef([]);
  
  const [hoveredSection, setHoveredSection] = useState(null);

  const navigationItems = [
    { 
      name: 'Home', 
      position: [0, 0, 0], 
      color: 0x4a90e2, 
      shape: 'sphere',
      icon: '🏠',
      description: 'Welcome to ESYA\'25'
    },
    { 
      name: 'About', 
      position: [-3, 2, -1], 
      color: 0x50c878, 
      shape: 'cube',
      icon: '📋',
      description: 'Learn about our mission'
    },
    { 
      name: 'Events', 
      position: [3, 1, -2], 
      color: 0xff6b6b, 
      shape: 'octahedron',
      icon: '🎯',
      description: 'Explore exciting events'
    },
    { 
      name: 'Speakers', 
      position: [-2, -2, 1], 
      color: 0xffd93d, 
      shape: 'tetrahedron',
      icon: '🎤',
      description: 'Meet our speakers'
    },
    { 
      name: 'Schedule', 
      position: [2, -1, 2], 
      color: 0x9b59b6, 
      shape: 'dodecahedron',
      icon: '📅',
      description: 'View the schedule'
    },
    { 
      name: 'Contact', 
      position: [0, 3, -3], 
      color: 0x1abc9c, 
      shape: 'icosahedron',
      icon: '📞',
      description: 'Get in touch'
    }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create navigation meshes
    navigationItems.forEach((item, index) => {
      let geometry;
      
      switch (item.shape) {
        case 'sphere':
          geometry = new THREE.SphereGeometry(0.8, 32, 32);
          break;
        case 'cube':
          geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
          break;
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(1);
          break;
        case 'tetrahedron':
          geometry = new THREE.TetrahedronGeometry(1.2);
          break;
        case 'dodecahedron':
          geometry = new THREE.DodecahedronGeometry(0.9);
          break;
        case 'icosahedron':
          geometry = new THREE.IcosahedronGeometry(1);
          break;
        default:
          geometry = new THREE.SphereGeometry(0.8, 32, 32);
      }

      const material = new THREE.MeshPhongMaterial({
        color: item.color,
        shininess: 100,
        transparent: true,
        opacity: 0.8
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...item.position);
      mesh.userData = { ...item, index };
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      
      scene.add(mesh);
      navigationMeshesRef.current.push(mesh);

      // Add wireframe overlay
      const wireframeGeometry = geometry.clone();
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.2
      });
      const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
      wireframeMesh.position.copy(mesh.position);
      wireframeMesh.scale.setScalar(1.05);
      scene.add(wireframeMesh);

      // Add floating particles around each shape
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 20;
      const posArray = new Float32Array(particlesCount * 3);
      
      for (let i = 0; i < particlesCount * 3; i += 3) {
        const radius = 2 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        posArray[i] = item.position[0] + radius * Math.sin(phi) * Math.cos(theta);
        posArray[i + 1] = item.position[1] + radius * Math.sin(phi) * Math.sin(theta);
        posArray[i + 2] = item.position[2] + radius * Math.cos(phi);
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: item.color,
        transparent: true,
        opacity: 0.6
      });
      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Multiple colored point lights
    const pointLight1 = new THREE.PointLight(0x00ffff, 0.5, 100);
    pointLight1.position.set(-10, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 0.5, 100);
    pointLight2.position.set(10, -5, 5);
    scene.add(pointLight2);

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Raycasting for hover detection
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(navigationMeshesRef.current);
      
      if (intersects.length > 0) {
        const hoveredObject = intersects[0].object;
        setHoveredSection(hoveredObject.userData);
        document.body.style.cursor = 'pointer';
        
        // Scale up hovered object
        hoveredObject.scale.setScalar(1.3);
      } else {
        setHoveredSection(null);
        document.body.style.cursor = 'default';
        
        // Reset all scales
        navigationMeshesRef.current.forEach(mesh => {
          mesh.scale.setScalar(1);
        });
      }
    };

    const handleClick = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(navigationMeshesRef.current);
      
      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        onNavigate(clickedObject.userData.name.toLowerCase());
      }
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
      
      // Animate navigation meshes
      navigationMeshesRef.current.forEach((mesh, index) => {
        // Floating animation
        mesh.position.y = mesh.userData.position[1] + Math.sin(time + index) * 0.3;
        
        // Rotation
        mesh.rotation.x = time * (0.5 + index * 0.1);
        mesh.rotation.y = time * (0.3 + index * 0.05);
        
        // Pulsing effect for current section
        if (currentSection === mesh.userData.name.toLowerCase()) {
          const pulse = 1 + Math.sin(time * 3) * 0.2;
          mesh.scale.setScalar(pulse);
          mesh.material.opacity = 0.9 + Math.sin(time * 3) * 0.1;
        }
      });

      // Camera orbital movement
      const radius = 8;
      cameraRef.current.position.x = Math.cos(time * 0.1) * radius;
      cameraRef.current.position.z = Math.sin(time * 0.1) * radius;
      cameraRef.current.lookAt(0, 0, 0);

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
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
  }, [onNavigate, currentSection]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Hover Info Panel */}
      {hoveredSection && (
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/30 max-w-xs">
          <div className="text-4xl mb-3">{hoveredSection.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{hoveredSection.name}</h3>
          <p className="text-gray-300 text-sm">{hoveredSection.description}</p>
          <div className="mt-4 text-xs text-cyan-400">Click to navigate →</div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-cyan-500/20">
        <h4 className="text-white font-semibold mb-2">Navigation</h4>
        <p className="text-gray-300 text-sm">Hover over 3D shapes to explore</p>
        <p className="text-gray-300 text-sm">Click to navigate to sections</p>
      </div>

      {/* Section Indicator */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-full px-6 py-2 border border-cyan-500/20">
        <span className="text-cyan-400 font-medium capitalize">{currentSection}</span>
      </div>
    </div>
  );
};

export default Creative3DNavigation;