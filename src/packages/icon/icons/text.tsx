import { IconProps } from "../props"
export default function Text({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3.5V2H8M14 3.5V2H8M8 2V14M5.5 14H10.5" stroke={color} strokeLinecap="square"/>
</svg>)}