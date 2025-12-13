interface HeartProps {
  filled?: boolean;
}

const Heart = ({ filled = false }: HeartProps) => {
return (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="18" cy="18" r="17.5" fill="white" stroke="#E8ECF2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9945 13.1259C16.3417 11.1998 13.5856 10.6817 11.5148 12.4455C9.44402 14.2092 9.15248 17.1581 10.7787 19.244C12.1308 20.9784 16.2226 24.6363 17.5637 25.8202C17.7138 25.9526 17.7888 26.0189 17.8763 26.0449C17.9527 26.0676 18.0362 26.0676 18.1126 26.0449C18.2001 26.0189 18.2751 25.9526 18.4252 25.8202C19.7663 24.6363 23.8581 20.9784 25.2102 19.244C26.8364 17.1581 26.5805 14.1906 24.4741 12.4455C22.3677 10.7003 19.6472 11.1998 17.9945 13.1259Z"
      fill={filled ? '#171E1D' : 'none'}
      stroke="#171E1D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
}

export default Heart;
