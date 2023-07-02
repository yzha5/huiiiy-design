import { IconProps } from "../props"
export default function Sun({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M13 8H16" stroke={color}/>
<path d="M0 8H3" stroke={color}/>
<path d="M8 0V3" stroke={color}/>
<path d="M8 13V16" stroke={color}/>
<path d="M11.5355 11.5355L13.6569 13.6568" stroke={color}/>
<path d="M2.34315 2.34314L4.46447 4.46446" stroke={color}/>
<path d="M13.6569 2.34314L11.5355 4.46446" stroke={color}/>
<path d="M4.46447 11.5355L2.34315 13.6568" stroke={color}/>
<circle cx="8" cy="8" r="3.5" stroke={color}/>


</svg>)}