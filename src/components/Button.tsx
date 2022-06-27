import { DiscordLogo, Lightning } from "phosphor-react";
import React from "react";

export enum ButtonState {
    Discord,
    Fast
}

type ButtonProps = {
    children: string;
    type: ButtonState;
}

export const Button: React.FC<ButtonProps> = ({children, type}) => {
    return (
        <>
            {type === ButtonState.Discord && (
                <a href="https://discord.gg/UVZ8wHqZXt" target="_blank" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                    <DiscordLogo size={24} />
                    {children}
                </a>
            )}
            {type === ButtonState.Fast && (
                <a href="https://evento.rocketseat.com.br/ignite-lab/desafios/checkpoints" target="_blank" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                    <Lightning size={24} />
                    {children}
                </a>
            )}
        </>
    )
}

