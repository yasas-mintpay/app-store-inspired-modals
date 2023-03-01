import * as React from "react";
import {motion, useInvertedScale} from "framer-motion";
import {closeSpring, openSpring} from "./animations";
import StoreAvailabilityPill from "./Pills/StoreAvailabilityPill";
import StoreDealPill from "./Pills/StoreDealPill";

interface TitleProps {
    title: string;
    category: string;
    isSelected: boolean;
}

export const Title = ({title, category, isSelected}: TitleProps) => {
    const inverted = useInvertedScale();
    const x = isSelected ? 10 : -10;
    // const x = 0;
    const y = isSelected ? 0 : -10;

    return (
        <motion.div
            className={`title-container  h-full w-full  `}
            initial={false}
            animate={{x, y}}
            transition={isSelected ? openSpring : closeSpring}
            transformTemplate={scaleTranslate}
            style={{...inverted, originX: 0, originY: 0}}
        >
            <div className={`flex flex-col items-start justify-between h-full w-full p-10`}>
                <StoreAvailabilityPill isOnline={true} isPickup={true} isOpen={isSelected}/>
                <StoreDealPill isOpen={isSelected} dealText={"$10 off"}/>
            </div>
        </motion.div>
    );
};

/**
 * `transform` is order-dependent, so if you scale(0.5) before translateX(100px),
 * the visual translate will only be 50px.
 *
 * The intuitive pattern is to translate before doing things like scale and
 * rotate that will affect the coordinate space. So Framer Motion takes an
 * opinion on that and allows you to animate them
 * individually without having to write a whole transform string.
 *
 * However in this component we're doing something novel by inverting
 * the scale of the parent component. Because of this we want to translate
 * through scaled coordinate space, and can use the transformTemplate prop to do so.
 */


interface ScaleTranslate {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
}

const scaleTranslate = ({x, y, scaleX, scaleY}: ScaleTranslate) =>
    `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
