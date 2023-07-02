import { IconProps } from "../props"
export default function Window({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke={color}/>
<path d="M0.5 4.5H15.5M2 2.5H4M5 2.5H7M9 2.5H14" stroke={color}/>


</svg>)}