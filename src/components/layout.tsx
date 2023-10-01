import * as React from "react"

type Props = {
    title: string,
    children: JSX.Element,
  };
const LayoutComponent: React.FC<Props> = ({
    title,
    children,
  }) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
);

export default LayoutComponent
