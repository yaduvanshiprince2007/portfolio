import React from "react";
import type { PageTheme } from "../AppConstraint";

interface PageShellProps {
  theme: PageTheme;
  children: React.ReactNode;
}

const PageShell: React.FC<PageShellProps> = ({ theme, children }) => (
  <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${theme.gradient} ${theme.className}`}>
    {children}
  </div>
);

export default PageShell;
