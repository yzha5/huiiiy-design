import { IconProps } from "../props"
export default function AlignTextCenter({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="2" x2="16" y2="2" stroke={color}/>
<line x1="4" y1="6" x2="12" y2="6" stroke={color}/>
<line y1="10" x2="16" y2="10" stroke={color}/>
<line x1="4" y1="14" x2="12" y2="14" stroke={color}/>
</svg>)}