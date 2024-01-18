import {motion} from "framer-motion";

export const motionDiv = () => {
    return ( 
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        </motion.div>
     );
}

export const motionH1 = () => {
    return ( 
        <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        </motion.h1>
     );
}

export const motionButton = () => {
    return ( 
        <motion.button initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        </motion.button>
     );
}
 

 

