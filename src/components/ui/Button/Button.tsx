import React from "react";
import styles from "./Button.module.scss";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

/**
 * 基本ボタンコンポーネント
 * Atomic Designにおける「Atoms」レベルのコンポーネント
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const classNames = [
      styles.button,
      styles[`button-${variant}`],
      styles[`button-${size}`],
      fullWidth ? styles["button-fullWidth"] : "",
      isLoading ? styles["button-loading"] : "",
      className || "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <span className={styles.loader}></span>}
        <span className={isLoading ? styles.invisible : ""}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
