import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { twMerge } from "tailwind-merge";

const styles = cva("button", {
  compoundVariants: [
    {
      className: "px-2.5",
      rounded: true,
      size: "extra-small",
    },
    {
      className: "px-2.5",
      rounded: true,
      size: "small",
    },
    {
      className: "px-3",
      rounded: true,
      size: "medium",
    },
    {
      className: "px-3.5",
      rounded: true,
      size: "large",
    },
    {
      className: "px-4",
      rounded: true,
      size: "extra-large",
    },
  ],
  defaultVariants: {
    rounded: false,
    size: "medium",
    variant: "secondary",
  },
  variants: {
    rounded: {
      false: "rounded",
      true: "rounded-full",
    },
    size: {
      "extra-large": "px-3.5 py-2.5 text-sm",
      "extra-small": "px-2 py-1 text-xs",
      large: "px-3 py-2 text-sm",
      medium: "px-2.5 py-1.5 text-sm",
      small: "px-2 py-1 text-sm",
    },
    variant: {
      primary:
        "bg-indigo-600 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
      secondary:
        "bg-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
      soft: "bg-indigo-50 font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100",
    },
  },
});

type Props<C extends ElementType> = {
  as?: C;
} & ComponentPropsWithoutRef<C> &
  VariantProps<typeof styles>;

function Button<C extends ElementType>({
  as,
  className,
  rounded,
  size,
  variant,
  ...rest
}: Props<C>) {
  const Component = as ?? "button";

  return (
    <Component
      className={twMerge(styles({ rounded, size, variant }), className)}
      {...rest}
    />
  );
}

export default Button;
