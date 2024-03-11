interface LoaderProps {
  height?: number;
  padding?: number;
}

const Loader = (props: LoaderProps) => {
  const { height = 50, padding = 0 } = props;
  return (
    <div style={{ height: `${height}px`, padding: `${padding}px` }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 134 134">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="19.25%" stopColor="#3383c5"></stop>
            <stop offset="80.38%" stopColor="#29c4b8"></stop>
          </linearGradient>
        </defs>

        <path
          fill="url(#gradient)"
          d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="360 67 67"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        <path
          fill="url(#gradient)"
          d="M28.19,39.31c6.627,0,12-4.374,12-11a12,12,0,1,0-24,0c0,6.626,5.372,11,12,11ZM58.91,20.485a12,12,0,1,0,0-16.97,12,12,0,0,0,0,16.97ZM105.9,43.321c6.627,0,11.658-5.13,11.433-11.185S112.532,20.485,105.9,20.485,94.768,25.508,94.768,32.136,99.275,43.321,105.9,43.321Zm8.567,15.589a12,12,0,1,0,16.97,0,12,12,0,0,0-16.97,0Zm-7.7,35.74a12,12,0,1,0,12,12A12,12,0,0,0,106.768,94.65Zm-30.72,19.822a12,12,0,1,0,0,16.97A12,12,0,0,0,76.048,114.472Zm-35.74-7.7a12,12,0,1,0-12,12A12,12,0,0,0,40.308,106.768ZM20.485,76.048a12,12,0,1,0-16.97,0A12,12,0,0,0,20.485,76.048Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="-360 67 67"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default Loader;
