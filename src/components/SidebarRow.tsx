import React from "react";

interface SidebarRowProps {
    src?: string
    Icon?: React.ComponentType<React.ComponentProps<'svg'>>
    title: string
};

const SidebarRow: React.FC<SidebarRowProps> = ({ src, Icon, title }) => {
    return (
        <div className="">
            {src && (
                <img className="rounded-full" src={src} alt="" width="30" height="30" />            
            )}
            {Icon && (
                <Icon className="h-8 w-8 text-blue-500" />
            )}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>    
    )
};

export default SidebarRow;