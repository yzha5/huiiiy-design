import { IconProps } from "../props"
export default function Fan({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<circle cx="8" cy="8" r="7.5" stroke={color} strokeLinejoin="round"/>
<path d="M14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8" stroke={color} strokeLinejoin="round"/>
<path d="M5 13.1962C6.43488 14.0246 8.26965 13.533 9.09808 12.0981C9.9265 10.6632 9.43488 8.82843 8 8" stroke={color} strokeLinejoin="round"/>
<path d="M5 2.80385C3.56512 3.63227 3.0735 5.46705 3.90192 6.90192C4.73035 8.3368 6.56512 8.82843 8 8" stroke={color} strokeLinejoin="round"/>


</svg>)}