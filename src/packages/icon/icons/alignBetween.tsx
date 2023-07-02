import { IconProps } from "../props"
export default function AlignBetween({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="2.5" y="6" width="4" height="4" rx="1" stroke={color}/>
<rect x="9.5" y="6" width="4" height="4" rx="1" stroke={color}/>
<path d="M0.5 0V16" stroke={color} strokeDasharray="1 1"/>
<path d="M15.5 0V16" stroke={color} strokeDasharray="1 1"/>


</svg>)}