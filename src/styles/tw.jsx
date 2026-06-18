import { forwardRef } from "react";

export const cn = (...values) => values.filter(Boolean).join(" ");

export const tw = (Tag, baseClassName, getVariantClassName) =>
  forwardRef(function TailwindComponent(
    { as: Component = Tag, className, children, ...props },
    ref,
  ) {
    const variantClassName =
      typeof getVariantClassName === "function" ? getVariantClassName(props) : "";
    const domProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !key.startsWith("$")),
    );

    return (
      <Component ref={ref} className={cn(baseClassName, variantClassName, className)} {...domProps}>
        {children}
      </Component>
    );
  });
