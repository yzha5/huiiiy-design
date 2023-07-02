import { IconProps } from "../props"
export default function Search({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="6" stroke={color}/>
<path d="M14 14L11.5 11.5" stroke={color} strokeLinecap="square"/>
</svg>)}