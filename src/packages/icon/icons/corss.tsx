import { IconProps } from "../props"
export default function Corss({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M0.5 0.5L15.5 15.5M15.5 0.5L0.5 15.5" stroke={color}/>


</svg>)}