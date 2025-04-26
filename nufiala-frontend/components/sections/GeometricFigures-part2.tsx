export function GeometricFigures() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const shapes: Shape[] = [
        { type: "circle", size: 60, color: "var(--color-electric-blue)", cx: 60, cy: 60, speed: 0.3 },
        { type: "rect", size: 50, color: "var(--color-burnt-sienna)", x: 120, y: 120, speed: 0.5 },
        { type: "triangle", size: 70, color: "var(--color-saffron)", x: 80, y: 200, speed: 0.2 },
        { type: "circle", size: 40, color: "var(--color-davys-gray)", cx: 150, cy: 280, speed: 0.4 },
        { type: "rect", size: 30, color: "var(--color-misty-rose)", x: 100, y: 350, speed: 0.6 },
    ];
