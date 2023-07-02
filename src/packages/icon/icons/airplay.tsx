import { IconProps } from "../props"
export default function Airplay({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.1 11.5H2.4C2.0287 11.5 1.6726 11.3495 1.41005 11.0816C1.1475 10.8137 1 10.4503 1 10.0714V2.92857C1 2.54969 1.1475 2.18633 1.41005 1.91842C1.6726 1.65051 2.0287 1.5 2.4 1.5H13.6C13.9713 1.5 14.3274 1.65051 14.5899 1.91842C14.8525 2.18633 15 2.54969 15 2.92857V10.0714C15 10.4503 14.8525 10.8137 14.5899 11.0816C14.3274 11.3495 13.9713 11.5 13.6 11.5H12.9" stroke={color} strokeLinecap="round"/>
<path d="M8 10.5L11.5 14.5H4.5L8 10.5Z" stroke={color} strokeLinecap="round"/>
</svg>)}