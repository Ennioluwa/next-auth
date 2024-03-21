"use client";

import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

interface LoginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton: FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span onClick={onClick} className=" cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
