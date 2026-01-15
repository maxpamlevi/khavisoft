'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

function DataWave() {
    const ref = useRef<any>(null);

    // Parameters
    const count = 3000;
    const xRange = 30;
    const zRange = 30;

    // Initial positions and colors
    const { positions, colors, initialPositions } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const initialPositions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const colorObject = new THREE.Color();

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * xRange;
            const z = (Math.random() - 0.5) * zRange;
            const y = 0;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            initialPositions[i * 3] = x;
            initialPositions[i * 3 + 1] = y;
            initialPositions[i * 3 + 2] = z;

            // Gradient: Orange -> Red -> Dark Red
            const t = Math.random();
            if (t < 0.3) {
                colorObject.setHex(0xfca5a5); // Light Red/Pink
            } else if (t < 0.7) {
                colorObject.setHex(0xdc2626); // Red-600
            } else {
                colorObject.setHex(0x991b1b); // Red-800
            }

            colors[i * 3] = colorObject.r;
            colors[i * 3 + 1] = colorObject.g;
            colors[i * 3 + 2] = colorObject.b;
        }
        return { positions, colors, initialPositions };
    }, []);

    useFrame((state) => {
        if (ref.current) {
            const time = state.clock.getElapsedTime();
            const positions = ref.current.geometry.attributes.position.array;

            // Mouse interaction target (repulsion)
            const mouseX = state.mouse.x * 12; // Adjusted scale for camera
            const mouseY = state.mouse.y * 12;

            for (let i = 0; i < count; i++) {
                const ix = initialPositions[i * 3];
                const iz = initialPositions[i * 3 + 2];

                // Base wave movement around initial position
                let y = Math.sin(ix * 0.5 + time * 0.5) * 0.5 + Math.cos(iz * 0.3 + time * 0.3) * 0.5;

                // Repulsion Physics
                // Calculate distance from mouse to THIS particle's current x,z
                // We use the 'initial' x/z as the anchor, but repulse from that anchor
                const dx = ix - mouseX;
                const dz = iz - (-mouseY * 2); // Camera tilt adjust
                const dist = Math.sqrt(dx * dx + dz * dz);

                let pushX = 0;
                let pushZ = 0;

                const repulsionRadius = 4;
                if (dist < repulsionRadius) {
                    const force = (1 - dist / repulsionRadius) * 2; // Stronger closer
                    pushX = (dx / dist) * force;
                    pushZ = (dz / dist) * force;
                }

                positions[i * 3] = ix + pushX;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = iz + pushZ;
            }
            ref.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.12} // Slightly larger for visibility on white
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.NormalBlending} // Additive might wash out on white
                opacity={0.8}
            />
        </Points>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-white">
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
                <DataWave />
            </Canvas>
        </div>
    );
}
