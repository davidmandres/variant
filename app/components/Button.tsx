import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  type?: "btn" | "btn-text";
}

export default function Button({ children, type }: ButtonProps) {
  return <a className={`${type === "btn" ? "btn" : "btn-text"}`}>{children}</a>;
}
