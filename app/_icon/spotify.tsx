import * as React from "react";

interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  dataTestId?: string;
  customColor?: string; // Example of another custom prop
}

const SpotifyComponent = (props: SVGComponentProps) => {
  const fillColor = props.customColor || props.fill || "currentColor";

  return (
    <svg
      fill={fillColor}
      width={props.width ?? "800px"}
      height={props.height ?? "800px"}
      viewBox="-2 -2 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      className="jam jam-spotify"
      data-testid={props.dataTestId}
      {...props}
    >
      <path d="M9.992 0C4.474 0 0 4.474 0 9.992c0 5.518 4.474 9.992 9.992 9.992 5.518 0 9.992-4.474 9.992-9.992C19.984 4.474 15.51 0 9.992 0zm4.348 15.683c-.127.329-.355.512-.59.512a.518.518 0 0 1-.344-.141c-1.796-1.588-3.87-1.843-5.294-1.778-1.578.073-2.735.544-2.747.549-.363.15-.74-.174-.839-.724-.1-.55.114-1.119.477-1.27.052-.022 1.297-.534 3.029-.62a8.939 8.939 0 0 1 2.917.32 8.09 8.09 0 0 1 3.146 1.737c.326.289.436.922.245 1.415zm1.27-3.063c-.15.329-.42.512-.699.512a.677.677 0 0 1-.407-.141c-2.127-1.588-4.584-1.843-6.271-1.778-1.87.073-3.24.544-3.253.549-.431.15-.876-.174-.995-.724-.118-.55.135-1.119.566-1.27.061-.022 1.536-.534 3.587-.62 1.208-.051 2.37.057 3.456.32 1.374.333 2.628.917 3.726 1.737.386.288.516.922.29 1.415zm.782-2.996a.958.958 0 0 1-.5-.142C10.835 6.404 4.276 8.234 4.21 8.252c-.528.153-1.075-.17-1.22-.721-.146-.551.165-1.12.693-1.272.076-.022 1.885-.534 4.4-.62a18.63 18.63 0 0 1 4.24.32c1.686.333 3.223.917 4.57 1.738.474.288.633.921.357 1.414a.985.985 0 0 1-.858.513z" />
    </svg>
  );
};

export default SpotifyComponent;
