import { IconProps } from "../props"
export default function Barcode({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 3V13" stroke={color}/>
<path d="M3.5 3V13" stroke={color}/>
<path d="M4.5 3V13" stroke={color}/>
<path d="M8.5 3V13" stroke={color}/>
<path d="M13.5 3V13" stroke={color}/>
<path d="M15.5 3V13" stroke={color}/>
</svg>)}