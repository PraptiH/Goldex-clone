"use client";

import { useEffect, useRef } from "react";

const countries = [
    {
        id: "azerbaijan",
        label: "AZERBAIJAN",
        location: [40.4093, 49.8671] as [number, number],
    },
    {
        id: "bangladesh",
        label: "BANGLADESH",
        location: [23.685, 90.3563] as [number, number],
    },
    {
        id: "india",
        label: "INDIA",
        location: [20.5937, 78.9629] as [number, number],
    },
    {
        id: "saudi",
        label: "SAUDI ARABIA",
        location: [23.8859, 45.0792] as [number, number],
    },
    {
        id: "uae",
        label: "UAE",
        location: [23.4241, 53.8478] as [number, number],
    },
];

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        let globe: {
            update: (state: { phi?: number }) => void;
            destroy: () => void;
        } | null = null;
        let disposed = false;
        let animationFrame = 0;

        let phi = 0;

        let pointerDown = false;
        let pointerStartX = 0;
        let phiStart = 0;

        const initGlobe = async () => {
            const { default: createGlobe } = await import("cobe");

            if (disposed) return;

            globe?.destroy();

            globe = createGlobe(canvas, {
                devicePixelRatio: Math.min(window.devicePixelRatio, 2),
                width: 1236,
                height: 1236,
                phi: 0,
                theta: 0.3,
                dark: 0,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [1, 1, 1],
                markerColor: [0.3, 0.47, 0.9],
                glowColor: [1, 1, 1],
                offset: [0, 0],
                scale: 1,

                markers: countries.map((country) => ({
                    id: country.id,
                    location: country.location,
                    size: 0.035,
                })),
            });

            const render = () => {
                if (!pointerDown) phi += 0.0025;
                globe?.update({ phi });
                animationFrame = requestAnimationFrame(render);
            };

            animationFrame = requestAnimationFrame(render);
        };

        const handlePointerDown = (
            event: PointerEvent
        ) => {
            pointerDown = true;

            pointerStartX = event.clientX;
            phiStart = phi;

            canvas.setPointerCapture(
                event.pointerId
            );
        };

        const handlePointerMove = (
            event: PointerEvent
        ) => {
            if (!pointerDown) return;

            const deltaX =
                event.clientX - pointerStartX;

            phi = phiStart + deltaX / 250;
        };

        const handlePointerUp = (
            event: PointerEvent
        ) => {
            pointerDown = false;

            if (
                canvas.hasPointerCapture(
                    event.pointerId
                )
            ) {
                canvas.releasePointerCapture(
                    event.pointerId
                );
            }
        };

        canvas.addEventListener(
            "pointerdown",
            handlePointerDown
        );

        canvas.addEventListener(
            "pointermove",
            handlePointerMove
        );

        canvas.addEventListener(
            "pointerup",
            handlePointerUp
        );

        canvas.addEventListener(
            "pointercancel",
            handlePointerUp
        );

        initGlobe();

        return () => {
            disposed = true;
            cancelAnimationFrame(animationFrame);
            globe?.destroy();

            canvas.removeEventListener(
                "pointerdown",
                handlePointerDown
            );

            canvas.removeEventListener(
                "pointermove",
                handlePointerMove
            );

            canvas.removeEventListener(
                "pointerup",
                handlePointerUp
            );

            canvas.removeEventListener(
                "pointercancel",
                handlePointerUp
            );
        };
    }, []);

    return (
        <div className="relative h-full w-full">
            <canvas
                ref={canvasRef}
                className="block h-full w-full touch-none rounded-[50%] cursor-grab active:cursor-grabbing"
                width={1236}
                height={1236}
            />

            <div className="globe-label globe-label-azerbaijan hidden lg:block">AZERBAIJAN</div>
            <div className="globe-label globe-label-bangladesh hidden lg:block">BANGLADESH</div>
            <div className="globe-label globe-label-india hidden lg:block">INDIA</div>
            <div className="globe-label globe-label-saudi hidden lg:block">SAUDI ARABIA</div>
            <div className="globe-label globe-label-uae hidden lg:block">UAE</div>
        </div>
    );
}