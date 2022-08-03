import clsx from "clsx";

export const Bounded = ({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}) => {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-6 py-10 md:py-16",
        yPadding === "sm" && "py-4 md:py-5",
        yPadding === "base" && "py-10 md:py-16",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
};
