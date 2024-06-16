import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const styles = cva("button", {
  defaultVariants: {
    size: "medium",
    variant: "secondary",
  },
  variants: {
    size: {
      large: "p-2",
      medium: "p-1.5",
      small: "p-1",
    },
    variant: {
      primary:
        "rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
      secondary:
        "rounded-full bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
      soft: "rounded-full bg-indigo-50 font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100",
    },
  },
});

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles>;

function CircularButton({ className, size, variant, ...rest }: Props) {
  return (
    <button
      className={twMerge(styles({ size, variant }), className)}
      {...rest}
    />
  );
}

export default CircularButton;
