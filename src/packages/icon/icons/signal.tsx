import { IconProps } from "../props"
export default function Signal({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="8" y1="6.41431" x2="8" y2="14.4143" stroke={color}/>
<circle cx="8" cy="5.41431" r="1.5" stroke={color}/>
<path d="M5.17157 8.24279C3.60948 6.68069 3.60948 4.14803 5.17157 2.58594M10.8284 2.58594C12.3905 4.14803 12.3905 6.68069 10.8284 8.24279" stroke={color}/>
<path d="M3.75736 9.48528C1.41421 7.14214 1.41421 3.34315 3.75736 1M12.2426 1C14.5858 3.34315 14.5858 7.14214 12.2426 9.48528" stroke={color}/>
</svg>)}