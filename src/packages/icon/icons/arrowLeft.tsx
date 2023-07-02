import { IconProps } from "../props"
export default function ArrowLeft({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8H16" stroke={color}/>
<path d="M6 3L1 7.99999L6 13" stroke={color}/>
</svg>)}