import React, { PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: "btn" | "btn-text";
  btnSpec?: "" | "--white";
}

export default function Button({
  children,
  btnType,
  btnSpec = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[
        btnType === "btn" ? "btn" : "btn-text",
        btnSpec,
        rest.className ? " " + rest.className : "",
      ]
        .filter(Boolean)
        .join("")}
    >
      {children}
    </button>
  );
}
