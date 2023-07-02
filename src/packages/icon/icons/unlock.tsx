import { IconProps } from "../props"
export default function Unlock({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="6.5" width="13" height="9" rx="1" stroke={color}/>
<path d="M5 6.5V3.5C5 1.84315 6.34315 0.5 8 0.5V0.5C9.65685 0.5 11 1.84315 11 3.5V4" stroke={color}/>
</svg>)}