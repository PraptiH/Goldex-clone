"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

type DragState = {
    dragging: boolean;
    velX: number;
    velY: number;
};

const AUTO_SPIN = 0.012;
const DAMPING = 0.94;

function createFaceTexture(): THREE.CanvasTexture | null {
    if (typeof document === "undefined") return null;

    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 - 4;

    const grad = ctx.createRadialGradient(cx, cy, R * 0.05, cx, cy, R);
    grad.addColorStop(0, "#fbe8a0");
    grad.addColorStop(0.55, "#e0bb55");
    grad.addColorStop(0.85, "#c99a34");
    grad.addColorStop(1, "#a97c1f");

    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    const dashRadius = R * 0.82;
    const dashCount = 40;
    const circumference = 2 * Math.PI * dashRadius;
    const segment = circumference / dashCount;
    ctx.setLineDash([segment * 0.55, segment * 0.45]);
    ctx.lineWidth = size * 0.02;
    ctx.strokeStyle = "rgba(70, 48, 12, 0.8)";
    ctx.beginPath();
    ctx.arc(cx, cy, dashRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}


function Coin({ dragState }: { dragState: React.MutableRefObject<DragState> }) {
    const groupRef = useRef<THREE.Group>(null);
    const velocity = useRef({ x: 0, y: 0 });
    const faceTexture = useMemo(() => createFaceTexture(), []);

    useFrame(() => {
        const group = groupRef.current;
        if (!group) return;
        const drag = dragState.current;

        if (drag.dragging) {
            velocity.current.x = drag.velX;
            velocity.current.y = drag.velY;
        } else {
            velocity.current.x *= DAMPING;
            velocity.current.y *= DAMPING;
            group.rotation.x += velocity.current.x;
            group.rotation.y += velocity.current.y;
            group.rotation.y += AUTO_SPIN;
        }
    });

    return (
       
        <group rotation={[0, 0, -0.4]}>
            <group ref={groupRef} rotation={[0.1, 0.3, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    
                    <mesh>
                        <cylinderGeometry args={[1.25, 1.25, 0.24, 72, 1, false]} />
                        <meshStandardMaterial attach="material-0" color="#160f05" metalness={0.85} roughness={0.45} />
                        <meshStandardMaterial attach="material-1" map={faceTexture ?? undefined} color={faceTexture ? "#ffffff" : "#d8b34c"} metalness={0.75} roughness={0.25} />
                        <meshStandardMaterial attach="material-2" map={faceTexture ?? undefined} color={faceTexture ? "#ffffff" : "#d8b34c"} metalness={0.75} roughness={0.25} />
                    </mesh>
                </group>
            </group>
        </group>
    );
}


export default function FooterEffect() {
    const zoneRef = useRef<HTMLSpanElement>(null);
    const dragState = useRef<DragState>({ dragging: false, velX: 0, velY: 0 });
    const lastPoint = useRef({ x: 0, y: 0 });
    const [canvasReady, setCanvasReady] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const zone = zoneRef.current;
        if (!zone) return;

        function getPoint(e: MouseEvent | TouchEvent) {
            return "touches" in e ? e.touches[0] : e;
        }

        function pointerDown(e: MouseEvent | TouchEvent) {
            dragState.current.dragging = true;
            dragState.current.velX = 0;
            dragState.current.velY = 0;
            setIsDragging(true);
            const p = getPoint(e);
            lastPoint.current = { x: p.clientX, y: p.clientY };
        }

        function pointerMove(e: MouseEvent | TouchEvent) {
            if (!dragState.current.dragging) return;
            const p = getPoint(e);
            const dx = p.clientX - lastPoint.current.x;
            const dy = p.clientY - lastPoint.current.y;
            lastPoint.current = { x: p.clientX, y: p.clientY };
            dragState.current.velY = dx * 0.01;
            dragState.current.velX = dy * 0.01;
            if (e.cancelable) e.preventDefault();
        }

        function pointerUp() {
            dragState.current.dragging = false;
            setIsDragging(false);
        }

        zone.addEventListener("mousedown", pointerDown);
        window.addEventListener("mousemove", pointerMove);
        window.addEventListener("mouseup", pointerUp);
        zone.addEventListener("touchstart", pointerDown, { passive: true });
        window.addEventListener("touchmove", pointerMove, { passive: false });
        window.addEventListener("touchend", pointerUp);

        return () => {
            zone.removeEventListener("mousedown", pointerDown);
            window.removeEventListener("mousemove", pointerMove);
            window.removeEventListener("mouseup", pointerUp);
            zone.removeEventListener("touchstart", pointerDown);
            window.removeEventListener("touchmove", pointerMove);
            window.removeEventListener("touchend", pointerUp);
        };
    }, []);

    return (
       
            <div dir="ltr" className="relative aspect-403/103 w-[min(100%,403px)]">
                <Image
                    src="/Images/g-mark.svg"
                    alt=""
                    width={88}
                    height={103}
                    className="absolute top-0 left-0 h-full w-[21.84%]"
                    priority
                />
                <Image
                    src="/Images/ldex-mark.svg"
                    alt=""
                    width={231}
                    height={103}
                    className="absolute top-0 left-[42.86%] h-full w-[57.32%]"
                    priority
                />
          

            <span
                ref={zoneRef}
                className={`absolute top-[25%] left-[18%] z-10 h-[70%] w-[27%] touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}
            >
                <Image
                    src="/Images/coin.svg"
                    alt=""
                    width={80}
                    height={70}
                    aria-hidden="true"
                    className="size-full object-contain pointer-events-none transition-opacity duration-300"
                    style={{ opacity: canvasReady ? 0 : 1 }}
                />

                <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ opacity: canvasReady ? 1 : 0 }}
                >
                    <Canvas
                        camera={{ position: [0, 0, 5.2], fov: 30 }}
                        gl={{ antialias: true, alpha: true }}
                        dpr={[1, 2]}
                        onCreated={() => setCanvasReady(true)}
                    >
                        <directionalLight color="#fff2d0" intensity={2.4} position={[3, 4, 5]} />
                        <directionalLight color="#ffe9b0" intensity={0.6} position={[-4, -2, 3]} />
                        <directionalLight color="#ffffff" intensity={1.3} position={[-2, 1, -4]} />
                        <ambientLight color="#392a10" intensity={0.9} />
                        <Environment preset="sunset" />
                        <Coin dragState={dragState} />
                    </Canvas>
                </div>
            </span>
        </div >
    
  );
}