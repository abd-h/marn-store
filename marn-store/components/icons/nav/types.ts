export interface NavIconProps {
    size?: number;
    color?: string;
    title?: string;
    className?: string;
}
 
export type IconProp = {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export interface IconProps extends React.SVGProps<SVGSVGElement> { 
    title?: string;
}