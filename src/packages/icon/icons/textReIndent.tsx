import { IconProps } from "../props"
export default function TextReIndent({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2H16" stroke={color}/>
<path d="M8 6H16" stroke={color}/>
<path d="M8 10H16" stroke={color}/>
<path d="M3 14H16" stroke={color}/>
<path d="M5 4L1 8L5 12" stroke={color}/>
</svg>)}