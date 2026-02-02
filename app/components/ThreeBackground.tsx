'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

function CosmicSpace() {
    const starsRef = useRef<any>(null);
    const nebulaeRef = useRef<any>(null);

    // Stars
    const starsCount = 2000;
    const starsPositions = useMemo(() => {
        const positions = new Float32Array(starsCount * 3);
        const colors = new Float32Array(starsCount * 3);
        const colorObject = new THREE.Color();

        for (let i = 0; i < starsCount; i++) {
            // Spread stars across a wider area
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

            // White to light red stars
            const t = Math.random();
            if (t < 0.7) {
                colorObject.setHex(0xffffff); // White
            } else if (t < 0.9) {
                colorObject.setHex(0xfee2e2); // Light red
            } else {
                colorObject.setHex(0xfca5a5); // Soft red
            }

            colors[i * 3] = colorObject.r;
            colors[i * 3 + 1] = colorObject.g;
            colors[i * 3 + 2] = colorObject.b;
        }
        return { positions, colors };
    }, []);

    // Nebula particles (red cosmic clouds)
    const nebulaeCount = 1500;
    const { nebulaePositions, nebulaeColors, initialNebulaePositions } = useMemo(() => {
        const positions = new Float32Array(nebulaeCount * 3);
        const initialPositions = new Float32Array(nebulaeCount * 3);
        const colors = new Float32Array(nebulaeCount * 3);
        const colorObject = new THREE.Color();

        for (let i = 0; i < nebulaeCount; i++) {
            const x = (Math.random() - 0.5) * 35;
            const z = (Math.random() - 0.5) * 35;
            const y = Math.random() * 10 - 5;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            initialPositions[i * 3] = x;
            initialPositions[i * 3 + 1] = y;
            initialPositions[i * 3 + 2] = z;

            // Red cosmic nebula colors
            const t = Math.random();
            if (t < 0.3) {
                colorObject.setHex(0xfca5a5); // Light red
            } else if (t < 0.6) {
                colorObject.setHex(0xdc2626); // Primary red
            } else if (t < 0.85) {
                colorObject.setHex(0xef4444); // Bright red
            } else {
                colorObject.setHex(0xff6b6b); // Neon red
            }

            colors[i * 3] = colorObject.r;
            colors[i * 3 + 1] = colorObject.g;
            colors[i * 3 + 2] = colorObject.b;
        }
        return { nebulaePositions: positions, nebulaeColors: colors, initialNebulaePositions: initialPositions };
    }, []);

    // Animate stars (slow rotation)
    useFrame((state) => {
        if (starsRef.current) {
            starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
            starsRef.current.rotation.x = state.clock.getElapsedTime() * 0.005;
        }

        // Animate nebula with waves and mouse interaction
        if (nebulaeRef.current) {
            const time = state.clock.getElapsedTime();
            const positions = nebulaeRef.current.geometry.attributes.position.array;

            // Mouse interaction
            const mouseX = state.mouse.x * 15;
            const mouseY = state.mouse.y * 15;

            for (let i = 0; i < nebulaeCount; i++) {
                const ix = initialNebulaePositions[i * 3];
                const iy = initialNebulaePositions[i * 3 + 1];
                const iz = initialNebulaePositions[i * 3 + 2];

                // Flowing wave effect
                const wave1 = Math.sin(ix * 0.3 + time * 0.4) * 0.8;
                const wave2 = Math.cos(iz * 0.2 + time * 0.3) * 0.8;
                let y = iy + wave1 + wave2;

                // Mouse repulsion
                const dx = ix - mouseX;
                const dz = iz - (-mouseY * 2);
                const dist = Math.sqrt(dx * dx + dz * dz);

                let pushX = 0;
                let pushZ = 0;

                const repulsionRadius = 5;
                if (dist < repulsionRadius) {
                    const force = (1 - dist / repulsionRadius) * 3;
                    pushX = (dx / dist) * force;
                    pushZ = (dz / dist) * force;
                }

                positions[i * 3] = ix + pushX;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = iz + pushZ;
            }
            nebulaeRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <>
            {/* Background Stars */}
            <Points ref={starsRef} positions={starsPositions.positions} colors={starsPositions.colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>

            {/* Red Nebula Particles */}
            <Points ref={nebulaeRef} positions={nebulaePositions} colors={nebulaeColors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.6}
                />
            </Points>
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a0f] to-[#0a0a0f]">
            <Canvas camera={{ position: [0, 5, 12], fov: 65 }}>
                <CosmicSpace />
            </Canvas>
        </div>
    );
}
