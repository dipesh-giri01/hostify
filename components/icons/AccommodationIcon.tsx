const AccommodationIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.31555 10.836L10.8152 5.28163C11.5121 4.7655 12.4879 4.7655 13.1848 5.28163L20.6844 10.836M6.21037 8.99829V17.2678C6.21037 18.2827 7.0744 19.1054 8.14024 19.1054H15.8597C16.9256 19.1054 17.7896 18.2827 17.7896 17.2678V8.99829"
      stroke="currentColor"
      strokeOpacity="0.56"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export default AccommodationIcon;
