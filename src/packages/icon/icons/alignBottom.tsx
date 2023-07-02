import { IconProps } from "../props"
export default function AlignBottom({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<line y1="15.5" x2="16" y2="15.5" stroke={color}/>
<rect x="9.5" y="0.5" width="3" height="13" stroke={color}/>
<rect x="3.5" y="7.5" width="3" height="6" stroke={color}/>


</svg>)}