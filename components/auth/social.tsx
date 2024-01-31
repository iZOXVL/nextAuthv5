"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import {motion} from "framer-motion";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

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


export const Social = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const OnClick = (provider: "google" | "github" | "twitter" | "twitch" | "discord" | "reddit") => {
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    }
    return(
        <div className="flex items-center w-full gap-x-1.5">
        <motion.div variants={item}>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("google")}>
            <FcGoogle className="h-5 w-5"/>
           </Button>
           </motion.div>
           <motion.div variants={item}>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("github")}>
            <FaGithub className="h-5 w-5"/>
           </Button>
           </motion.div>
           <motion.div variants={item}>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("twitter")}>
            <FaTwitter className="h-5 w-5"/>
           </Button>
           </motion.div>
           <motion.div variants={item}>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("twitch")}>
            <FaTwitch className="h-5 w-5"/>
           </Button>
           </motion.div>
           <motion.div variants={item}>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("discord")}>
            <FaDiscord className="h-5 w-5"/>
           </Button>
           </motion.div>
           <motion.div variants={item}>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("reddit")}>
            <FaReddit className="h-5 w-5"/>
           </Button>
           </motion.div>
           <motion.div variants={item}>
           <Button size="sm" className="w-full" variant="outline">
            <FaSpotify className="h-5 w-5"/>
           </Button>
           </motion.div>
        </div>
        
    );
};