import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import { LinkProps, Link as RouterLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const styles = cva("button", {
  defaultVariants: {
    variant: "secondary",
  },
  variants: {
    button: {
      false: "",
      true: "",
    },
    variant: {
      primary: "font-semibold text-indigo-600 hover:text-indigo-500",
      secondary: "font-semibold text-gray-700 hover:text-indigo-600",
    },
  },
});

type Props = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  VariantProps<typeof styles>;

function Link({ className, variant, ...rest }: Props) {
  return (
    <RouterLink className={twMerge(styles({ variant }), className)} {...rest} />
  );
}

export default Link;
