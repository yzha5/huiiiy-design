import { IconProps } from "../props"
export default function Progress({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="6.5" width="15" height="3" rx="1.5" stroke={color}/>
<rect x="0.5" y="6.5" width="7" height="3" rx="1.5" fill={color}/>
</svg>)}