import { IconProps } from "../props"
export default function Button({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="4" width="15" height="8" rx="1" stroke={color}/>
<path d="M3.5 8H12.5" stroke={color}/>
</svg>)}