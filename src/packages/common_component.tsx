export function CloseIcon({ size = '1em' }: { size?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1.5 1.5L14.5 14.5M14.5 1.5L1.5 14.5'
                stroke='currentColor'
                strokeWidth='2'
            />
        </svg>
    )
}

export function ListIcon({ size = '1em' }: { size?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M0 2.5H1M2 6H3M5 6H16M2 9.5H3M5 9.5H16M2 13H3M5 13H16M3 2.5H16'
                stroke='currentColor'
            />
        </svg>
    )
}
