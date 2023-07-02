import { IconProps } from "../props"
export default function Calculator({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 3.5H11.5" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 8.5H5.5" stroke={color} strokeLinejoin="round"/>
<path d="M7.5 8.5H8.5" stroke={color} strokeLinejoin="round"/>
<path d="M10.5 8.5H11.5" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 10.5H5.5" stroke={color} strokeLinejoin="round"/>
<path d="M7.5 10.5H8.5" stroke={color} strokeLinejoin="round"/>
<path d="M10.5 10.5H11.5" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 12.5H5.5" stroke={color} strokeLinejoin="round"/>
<path d="M7.5 12.5H8.5" stroke={color} strokeLinejoin="round"/>
<path d="M10.5 12.5H11.5" stroke={color} strokeLinejoin="round"/>
<rect x="2" y="0.5" width="12" height="15" rx="1" stroke={color} strokeLinejoin="round"/>
</svg>)}