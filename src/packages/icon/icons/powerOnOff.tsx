import { IconProps } from "../props"
export default function PowerOnOff({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.59131C3.66962 3.41498 2 5.63746 2 8.2499C2 11.5636 4.68629 14.2499 8 14.2499C11.3137 14.2499 14 11.5636 14 8.2499C14 5.63746 12.3304 3.41498 10 2.59131" stroke={color}/>
<line x1="8" y1="1.25" x2="8" y2="8.25" stroke={color}/>
</svg>)}