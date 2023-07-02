import { IconProps } from "../props"
export default function Step({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="8" r="2" stroke={color}/>
<circle cx="9" cy="8" r="1" stroke={color}/>
<circle cx="14.5" cy="8" r="1" stroke={color}/>
<path d="M4.5 8H8M10 8H13.5" stroke={color}/>
</svg>)}