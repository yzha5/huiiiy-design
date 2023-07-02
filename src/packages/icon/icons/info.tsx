import { IconProps } from "../props"
export default function Info({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M8 6.5V11.5" stroke={color}/>
<path d="M7.5 5H8.5" stroke={color}/>
<path d="M11 0.5H5L0.5 5V11L5 15.5H11L15.5 11V5L11 0.5Z" stroke={color}/>


</svg>)}