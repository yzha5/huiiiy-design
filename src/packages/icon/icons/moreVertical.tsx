import { IconProps } from "../props"
export default function MoreVertical({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="0.5" stroke={color}/>
<circle cx="8" cy="1" r="0.5" stroke={color}/>
<circle cx="8" cy="15" r="0.5" stroke={color}/>
</svg>)}