interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`w-full max-w-[1920px] mx-auto px-[clamp(1rem,3vw,4rem)] ${className}`}
    >
      {children}
    </Component>
  );
}
