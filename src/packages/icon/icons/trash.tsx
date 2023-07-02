import { IconProps } from "../props"
export default function Trash({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M5 3.5V2C5 1.44772 5.44772 1 6 1H10C10.5523 1 11 1.44772 11 2V3.5M0.5 4H15.5M2 4V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V4M8 7.5V12.5M5 9.5V12.5M11 9.5V12.5" stroke={color}/>


</svg>)}