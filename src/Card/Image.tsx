import * as React from "react";
import {motion, useInvertedScale} from "framer-motion";
import {closeSpring} from "./animations";


interface ImageProps {
    id: string;
    isSelected: boolean;
    pointOfInterest: number;
    imageUrl: string;
}

export const Image = ({
                          id,
                          imageUrl,
                          isSelected,
                          pointOfInterest = 0,
                      }: ImageProps) => {

    const inverted = useInvertedScale();

    return (
        <motion.div
            className="card-image-container"
            style={{...inverted, originX: 0, originY: 0}}
        >
            <motion.img
                className=""
                src={imageUrl}
                alt=""
                initial={false}
                animate={
                    isSelected ? {x: 0, y: 0} : {x: 0, y: 0}
                }
                transition={closeSpring}
            />
        </motion.div>
    );
};
