import { IconProps } from "../props"
export default function Qrcode({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="0.5" y="0.5" width="6" height="6" rx="1" stroke={color}/>
<path d="M3 3.5H4" stroke={color}/>
<rect x="0.5" y="9.5" width="6" height="6" rx="1" stroke={color}/>
<path d="M3 12.5H4" stroke={color}/>
<rect x="9.5" y="0.5" width="6" height="6" rx="1" stroke={color}/>
<path d="M12 3.5H13" stroke={color}/>
<path d="M9 9.5H10" stroke={color}/>
<path d="M12 9.5H15.5V13" stroke={color}/>
<path d="M16 15.5H12" stroke={color}/>
<path d="M9.5 16V12.5H13" stroke={color}/>


</svg>)}