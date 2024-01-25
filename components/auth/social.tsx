"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
    const OnClick = (provider: "google" | "github" | "spotify" | "twitch" | "discord" | "reddit") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    }
    return(
        <div className="flex items-center w-full gap-x-2">
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("google")}>
            <FcGoogle className="h-5 w-5"/>
           </Button>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("github")}>
            <FaGithub className="h-5 w-5"/>
           </Button>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("spotify")}>
            <FaSpotify className="h-5 w-5"/>
           </Button>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("twitch")}>
            <FaTwitch className="h-5 w-5"/>
           </Button>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("discord")}>
            <FaDiscord className="h-5 w-5"/>
           </Button>
           <Button size="sm" className="w-full" variant="outline"
           onClick={() => OnClick("reddit")}>
            <FaReddit className="h-5 w-5"/>
           </Button>
        </div>
        
    );
};