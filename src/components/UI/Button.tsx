interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
}

export const Button = ({
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded transition-colors";
  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-secondary hover:text-primary hover:outline hover:outline-primary",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "font-normal hover:font-bold text-black-500 hover:text-red-700",
  };
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    />
  );
};
