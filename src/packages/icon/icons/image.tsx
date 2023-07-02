import { IconProps } from "../props"
export default function Image({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="0.5" y="0.5" width="15" height="15" stroke={color}/>
<path d="M7 15C7 11.134 10.5817 8 15 8" stroke={color}/>
<path d="M1 11C2.86396 9.13604 5.96751 9.21751 7.93198 11.182" stroke={color}/>
<circle cx="5.5" cy="5.5" r="1.5" stroke={color}/>


</svg>)}