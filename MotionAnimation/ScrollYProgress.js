import { motion, useScroll } from "framer-motion";

const ScrollYProgress = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                height: 7,
                background: "#002387",
                transformOrigin: "0%",
                zIndex: 7,
            }}
        ></motion.div>
    );
};

export default ScrollYProgress;