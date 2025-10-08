export interface NavIconProps {
    size?: number;
    color?: string;
    title?: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> { 
    title?: string;
}