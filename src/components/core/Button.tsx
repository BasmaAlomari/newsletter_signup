import { twMerge } from "tailwind-merge";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const SIZES = {
  small:
    "py-[0.475rem] font-semibold text-[0.8rem] md:text-[1rem] px-[0.7rem] xl:px-[2.25rem] ",
  medium:
    "py-[0.575rem] px-[1.25rem] lg:py-[0.875rem] lg:px-[2.25rem] lg:text-[0.938rem] md:py-[0.775rem] md:px-[1.85rem] md:text-[1.138rem] font-semibold md:leading-7 md:tracking-wide",
  large:
    "px-[1rem] text-[1rem] font-medium xl:px-[2.875rem]  md:text-[1.188rem]",
};

const VARIANTS = {
  filled: {
    gradient: "bg-[#333a4b]  text-white enabled:hover:bg-gradient-to-r from-[#ff5476] via-[#ff5e5f] to-[#ff673e] shadow hover:shadow-2xl",
  },
  wide: "bg-[#333a4b]  text-white enabled:hover:bg-gradient-to-r from-[#ff5476] via-[#ff5e5f] to-[#ff673e]  px-[4rem] font-medium font-semibold md:font-normal text-[1rem]",
  solid: "bg-white text-black font-small border border-Green md:font-semibold",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * The size of the button.
   * @default medium
   */
  size?: keyof typeof SIZES;
  /**
   * The variant of the button.
   * @default primary
   */
  variant?: keyof typeof VARIANTS;
  /**
   * Filled variant color scheme
   * Works only if "variant" = "filled"
   * @default gradient
   */
  colorScheme?: keyof typeof VARIANTS.filled;
  /**
   * Is the button disabled?
   * @default false
   */
  disabled?: boolean;

  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
};

const Button = ({
  children,
  size = "medium",
  variant = "filled",
  colorScheme = "gradient",
  className = "",
  disabled = false,
  rightIcon,
  leftIcon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        `flex items-center justify-center rounded-xl   disabled:cursor-not-allowed`,
        SIZES[size],
        variant === "filled"
          ? VARIANTS["filled"][colorScheme]
          : VARIANTS[variant],
        className
      )}
      {...rest}
    >
      {leftIcon ? (
        <span className={size === "small" ? "mr-[0.3125rem]" : "mr-2.5"}>
          {leftIcon}
        </span>
      ) : null}

      {children}

      {rightIcon ? (
        <span className={size === "small" ? "ml-[0.3125rem]" : "ml-2.5"}>
          {rightIcon}
        </span>
      ) : null}
    </button>
  );
};

export default Button;