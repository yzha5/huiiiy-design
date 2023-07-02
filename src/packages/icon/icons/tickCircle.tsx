import { IconProps } from "../props"
export default function TickCircle({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<circle cx="8" cy="8" r="7.5" stroke={color}/>
<path d="M4.5 7.75L7 10.25L11.5 5.75" stroke={color}/>


</svg>)}