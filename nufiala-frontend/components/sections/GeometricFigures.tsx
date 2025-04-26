"use client";
import { useEffect, useState } from "react";

export function GeometricFigures() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const shapes = [
        {
            type: "circle",
            size: 60,
            color: "var(--color-electric-blue)",
            cx: 60,
            cy: 60,
            speed: 0.3,
        },
        {
            type: "rect",
            size: 50,
            color: "var(--color-burnt-sienna)",
            x: 120,
            y: 120,
            speed: 0.5,
        },
        {
            type: "triangle",
            size: 70,
            color: "var(--color-saffron)",
            x: 80,
            y: 200,
            speed: 0.2,
        },
        {
            type: "circle",
            size: 40,
            color: "var(--color-davys-gray)",
            cx: 150,
            cy: 280,
            speed: 0.4,
        },
        {
            type: "rect",
            size: 30,
            color: "var(--color-misty-rose)",
            x: 100,
            y: 350,
            speed: 0.6,
        },
    ];

    function renderTriangle(x, y, size, color, translateY) {
        const height = (size * Math.sqrt(3)) / 2;
        const points = [
            [x, y + height + translateY],
            [x + size / 2, y + translateY],
            [x + size, y + height + translateY],
        ]
            .map((point) => point.join(","))
            .join(" ");
        return <polygon points={points} fill={color} />;
    }

    return (
        <svg
            className="w-full h-full min-h-[360px]"
            viewBox="0 0 300 400"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
        >
            {shapes.map((shape, index) => {
                const translateY = offsetY * shape.speed;
                if (shape.type === "circle") {
                    return (
                        <circle
                            key={index}
                            cx={shape.cx}
                            cy={shape.cy + translateY}
                            r={shape.size / 2}
                            fill={shape.color}
                        />
                    );
                } else if (shape.type === "rect") {
                    return (
                        <rect
                            key={index}
                            x={shape.x}
                            y={shape.y + translateY}
                            width={shape.size}
                            height={shape.size}
                            fill={shape.color}
                        />
                    );
                } else if (shape.type === "triangle") {
                    return renderTriangle(
                        shape.x,
                        shape.y,
                        shape.size,
                        shape.color,
                        translateY
                    );
                }
                return null;
            })}
        </svg>
    );
}
