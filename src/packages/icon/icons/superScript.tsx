import { IconProps } from "../props"
export default function SuperScript({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M10 2L1 15" stroke={color}/>
<path d="M1 2L10 15" stroke={color}/>
<path d="M12 3V2.60055C12 1.71659 12.7166 1 13.6006 1V1C14.402 1 15.1082 1.59475 15.0844 2.39579C15.0773 2.6321 15.0532 2.84934 15 3C14.6751 3.92065 13.651 3.77241 13 4.5C12.5306 5.02467 12 6 12 6H15.5" stroke={color}/>


</svg>)}