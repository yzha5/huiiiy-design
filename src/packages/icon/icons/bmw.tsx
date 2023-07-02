import { IconProps } from "../props"
export default function Bmw({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<circle cx="8" cy="8" r="7.5" stroke={color}/>
<path d="M0 8C0 3.58172 3.58172 0 8 0V8H0Z" fill={color}/>
<path d="M8 8H16C16 12.4183 12.4183 16 8 16V8Z" fill={color}/>


</svg>)}