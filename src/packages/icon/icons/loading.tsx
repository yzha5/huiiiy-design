import { IconProps } from "../props"
export default function Loading({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M0 8H4" stroke={color}/>
<path d="M12 8H16" stroke={color}/>
<path d="M8 0V4" stroke={color}/>
<path d="M8 12V16" stroke={color}/>
<path d="M2.34315 13.6569L5.17157 10.8284" stroke={color}/>
<path d="M10.8284 5.17157L13.6569 2.34314" stroke={color}/>
<path d="M2.34315 2.34314L5.17157 5.17157" stroke={color}/>
<path d="M10.8284 10.8284L13.6569 13.6569" stroke={color}/>


</svg>)}