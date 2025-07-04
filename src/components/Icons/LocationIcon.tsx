const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M12 0C7.038 0 3 4.066 3 9.065C3 16.168 11.154 23.502 11.501 23.81C11.644 23.937 11.822 24 12 24C12.178 24 12.356 23.937 12.499 23.811C12.846 23.502 21 16.168 21 9.065C21 4.066 16.962 0 12 0ZM12 14C9.243 14 7 11.757 7 9C7 6.243 9.243 4 12 4C14.757 4 17 6.243 17 9C17 11.757 14.757 14 12 14Z"
      fill="black"
    />
  </svg>
);

export { LocationIcon };
