import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { twMerge } from "tailwind-merge";

const styles = cva("link", {
  defaultVariants: {
    variant: "secondary",
  },
  variants: {
    variant: {
      primary: "font-semibold text-indigo-600 hover:text-indigo-500",
      secondary: "font-semibold text-gray-700 hover:text-indigo-600",
    },
  },
});

type Props<C extends ElementType> = {
  as?: C;
} & ComponentPropsWithoutRef<C> &
  VariantProps<typeof styles>;

function Link<C extends ElementType>({
  as,
  className,
  variant,
  ...rest
}: Props<C>) {
  const Component = as ?? "a";

  return (
    <Component className={twMerge(styles({ variant }), className)} {...rest} />
  );
}

export default Link;
