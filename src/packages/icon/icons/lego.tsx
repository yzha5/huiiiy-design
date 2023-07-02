import { IconProps } from "../props"
export default function Lego({color = "currentColor",size = "1em"}: IconProps) {
return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M0.5 2.5C0.5 1.39543 1.39543 0.5 2.5 0.5H4.5C5.60457 0.5 6.5 1.39543 6.5 2.5V4.5C6.5 5.60457 5.60457 6.5 4.5 6.5H2.5C1.39543 6.5 0.5 5.60457 0.5 4.5V2.5Z" stroke={color}/>
<path d="M15.5 12.5C15.5 14.1569 14.1569 15.5 12.5 15.5C10.8431 15.5 9.5 14.1569 9.5 12.5C9.5 10.8431 10.8431 9.5 12.5 9.5C14.1569 9.5 15.5 10.8431 15.5 12.5Z" stroke={color}/>
<path d="M2.67953 10.4737C3.04418 9.8421 3.95582 9.8421 4.32047 10.4737L6.37166 14.0265C6.73631 14.6581 6.28049 15.4476 5.55118 15.4476H1.44881C0.719504 15.4476 0.263686 14.6581 0.628341 14.0265L2.67953 10.4737Z" stroke={color}/>
<path d="M12.5 0.5L13.3817 2.28647L15.3532 2.57295L13.9266 3.96353L14.2634 5.92705L12.5 5L10.7366 5.92705L11.0734 3.96353L9.64683 2.57295L11.6183 2.28647L12.5 0.5Z" stroke={color}/>


</svg>)}