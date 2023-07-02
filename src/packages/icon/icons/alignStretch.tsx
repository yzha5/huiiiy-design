import { IconProps } from "../props"
export default function AlignStretch({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="3.5" y="2" width="3" height="12" stroke={color}/>
<rect x="9.5" y="2" width="3" height="12" stroke={color}/>
<path d="M0 0.5H16" stroke={color} strokeDasharray="1 1"/>
<path d="M0 15.5H16" stroke={color} strokeDasharray="1 1"/>


</svg>)}