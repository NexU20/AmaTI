const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => {
  const color = props.color || "#fff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="21"
      fill="none"
      viewBox="0 0 22 21"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 4.667h20M9 9.25v4.583m4-4.583v4.583M3 4.667h16l-1.58 13.035a1.79 1.79 0 0 1-.654 1.164 2.1 2.1 0 0 1-1.334.467H6.568c-.492 0-.967-.166-1.334-.467a1.79 1.79 0 0 1-.654-1.164zM6.345 2.05c.162-.314.418-.58.738-.766S7.775 1 8.154 1h5.692c.38 0 .751.099 1.072.285.32.186.576.452.738.766L17 4.667H5z"
      ></path>
    </svg>
  );
};

export default SvgIcon;
