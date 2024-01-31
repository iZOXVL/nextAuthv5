import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import {motion} from "framer-motion";

const font = Poppins ({
    subsets: ["latin"],
    weight: ["600"],
});

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


interface HeaderProps {
    label: string;
};

export const Header = ({
    label,
}: HeaderProps) => {
    return(
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <motion.h1 variants={item} className={cn("text-3xl font-semibold", font.className)}>
                🔐OAuttth 2.0
            </motion.h1>
            <motion.p variants={item} className="text-muted-foreground text-sm">
                {label}
            </motion.p>
        </div>
    );
};