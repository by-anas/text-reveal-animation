import { motion } from 'framer-motion';

interface AnimatedTextProps {
    delay?: number; // Assuming delay is a number (in seconds)
    stagger?: number; // Assuming stagger is a number (in seconds)
    className?: string;
    position?: number;
    phrases?: string | string[]; // Accepts either a single string or an array of strings
}

const AnimatedText: React.FC<AnimatedTextProps> = (props) => {
    const {
        delay ,
        stagger ,
        className ,
        position ,
        phrases , // Default value if none is provided
    } = props;

    const animation = {
        initial: { y: "150%" },
        enter: (i: number) => ({
            y: "0",
            transition: {
                delay: 0.05 * i,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
            }
        })
    };

    // Determine if phrases is a string or an array and process accordingly
    const textArray = Array.isArray(phrases)
        ? phrases.join(' ').split(' ')
        : phrases?.split(' ');

    return (
        <motion.span
            initial="initial"
            animate="enter"
            aria-hidden
            transition={{ staggerChildren: stagger, delayChildren: delay }}
            className={className}
        >
            {textArray?.map((word, index) => (
                <span
                    key={index}
                    className={`${index === position ? "italic" : ""} relative inline-flex overflow-hidden ${className}`}
                >
                    <motion.span variants={animation} custom={index}>
                        {word}
                    </motion.span>
                    <span className="inline-block">&nbsp;</span>
                </span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
