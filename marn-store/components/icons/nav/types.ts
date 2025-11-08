export interface NavIconProps {
    size?: number;
    color?: string;
    title?: string;
    className?: string;
}
 
export type IconProp = {
    className?: string;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> { 
    title?: string;
}