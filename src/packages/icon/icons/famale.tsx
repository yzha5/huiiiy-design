import { IconProps } from "../props"
export default function Famale({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<circle cx="6.5" cy="9.5" r="6" stroke={color}/>
<path d="M15.5 0.5L11 5M12 1L15 4" stroke={color}/>


</svg>)}