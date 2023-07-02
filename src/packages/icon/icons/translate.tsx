import { IconProps } from "../props"
export default function Translate({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="0.5" y="0.5" width="9" height="9" rx="2" stroke={color}/>
<path d="M9.5 5.5H13.5C14.6046 5.5 15.5 6.39543 15.5 7.5V13.5C15.5 14.6046 14.6046 15.5 13.5 15.5H7.5C6.39543 15.5 5.5 14.6046 5.5 13.5V9.5" stroke={color}/>
<path d="M5 2V8M2.75 4H7.25V6H2.75V4Z" stroke={color}/>
<path d="M7.5 13.5L8.5 11.5M13.5 13.5L12.5 11.5M8.5 11.5L10.5 7.5L12.5 11.5M8.5 11.5H12.5" stroke={color}/>
<path d="M9.5 2.18903C11.2974 2.65164 12.7688 3.92615 13.5 5.59829M2.18903 9.5C2.64253 11.262 3.87628 12.7107 5.5 13.456" stroke={color}/>


</svg>)}