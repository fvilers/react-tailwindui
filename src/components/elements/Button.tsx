import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Size = "extra-large" | "extra-small" | "large" | "medium" | "small";
type Variant = "primary";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  variant: Variant;
};

const sizes: Record<Size, string> = {
  "extra-large": "px-3.5 py-2.5 text-sm",
  "extra-small": "px-2 py-1 text-xs",
  large: "px-3 py-2 text-sm",
  medium: "px-2.5 py-1.5 text-sm",
  small: "px-2 py-1 text-sm",
};
const variants: Record<Variant, string> = {
  primary:
    "rounded bg-indigo-600 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
};

function Button({ className, size = "medium", variant, ...rest }: Props) {
  return (
    <button
      className={twMerge(sizes[size], variants[variant], className)}
      {...rest}
    />
  );
}

export default Button;
