"use client";

import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import {motion} from "framer-motion";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};


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

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial

}: CardWrapperProps) => {
    return (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Card className="w-[400px] shadow-2xl">
            
              <CardHeader>
                <Header label={headerLabel} />
              </CardHeader>
            
            
              <CardContent>

                {children}

              </CardContent>
             
        
            {showSocial && (
              
                <CardFooter>
                  <Social />
                </CardFooter>
             
            )}
            <motion.div variants={item}>
              <CardFooter>
                <BackButton
                  label={backButtonLabel}
                  href={backButtonHref}
                />
              </CardFooter>
            </motion.div>
          </Card>
        </motion.div>
      );
    };
    