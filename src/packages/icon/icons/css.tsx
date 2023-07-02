import { IconProps } from "../props"
export default function Css({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H3.5C2.39543 5 1.5 5.89543 1.5 7V8C1.5 9.10457 2.39543 10 3.5 10H5" stroke={color}/>
<path d="M9.5 5H7.75C7.05964 5 6.5 5.55964 6.5 6.25V6.25C6.5 6.94036 7.05964 7.5 7.75 7.5H8.25C8.94036 7.5 9.5 8.05964 9.5 8.75V8.75C9.5 9.44036 8.94036 10 8.25 10H6.5" stroke={color}/>
<path d="M14.5 5H12.75C12.0596 5 11.5 5.55964 11.5 6.25V6.25C11.5 6.94036 12.0596 7.5 12.75 7.5H13.25C13.9404 7.5 14.5 8.05964 14.5 8.75V8.75C14.5 9.44036 13.9404 10 13.25 10H11.5" stroke={color}/>
</svg>)}