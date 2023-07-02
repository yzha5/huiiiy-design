import { IconProps } from "../props"
export default function Wechat({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9695 6.5C10.6931 4.25002 8.57364 2.5 6 2.5C3.23858 2.5 1 4.51472 1 7C1 7.73904 1.19795 8.43647 1.54873 9.05168L1.00003 11.5L4 11.1256C4.61246 11.3664 5.28889 11.5 6 11.5C6.45783 11.5 6.90129 11.4446 7.32255 11.3409" stroke={color}/>
<path d="M7 10C7 11.933 8.79086 13.5 11 13.5C11.5689 13.5 12.11 13.3961 12.6 13.2088H14.718L14.561 11.5958C14.8416 11.1173 15 10.5748 15 10C15 8.067 13.2091 6.5 11 6.5C8.79086 6.5 7 8.067 7 10Z" stroke={color}/>
<path d="M4 5H5M7 5H8M9 9H10M12 9H13" stroke={color}/>
</svg>)}