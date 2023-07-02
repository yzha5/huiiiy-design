import { IconProps } from "../props"
export default function Star({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M8 1L10.3176 5.69603L15.5 6.44907L11.75 10.1044L12.6353 15.2658L8 12.829L3.36475 15.2658L4.25 10.1044L0.5 6.44907L5.68237 5.69603L8 1Z" stroke={color}/>


</svg>)}