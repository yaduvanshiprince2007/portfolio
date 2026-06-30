import React from "react";
import { useLocation } from "react-router-dom";
import { URLS, RESUME_DATA } from "../AppConstraint";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
  theme: ColorTheme;
}

interface ColorTheme {
  bg: string;
  border: string;
  heading: string;
  text: string;
  iconBg: string;
  iconColor: string;
  linkColor: string;
  linkHover: string;
  divider: string;
}

const themes: Record<string, ColorTheme> = {
  home: {
    bg: "bg-sky-50",
    border: "border-sky-100",
    heading: "text-sky-950",
    text: "text-sky-700/80",
    iconBg: "bg-sky-100/70",
    iconColor: "text-sky-650",
    linkColor: "text-sky-650",
    linkHover: "hover:text-sky-800",
    divider: "bg-sky-500"
  },
  work: {
    bg: "bg-amber-50/70",
    border: "border-amber-100/80",
    heading: "text-amber-950",
    text: "text-amber-700/80",
    iconBg: "bg-amber-100/70",
    iconColor: "text-amber-650",
    linkColor: "text-amber-650",
    linkHover: "hover:text-amber-805",
    divider: "bg-amber-500"
  },
  skills: {
    bg: "bg-emerald-50/70",
    border: "border-emerald-100/80",
    heading: "text-emerald-950",
    text: "text-emerald-700/85",
    iconBg: "bg-emerald-100/70",
    iconColor: "text-emerald-650",
    linkColor: "text-emerald-650",
    linkHover: "hover:text-emerald-805",
    divider: "bg-emerald-500"
  },
  projects: {
    bg: "bg-indigo-50/70",
    border: "border-indigo-100/80",
    heading: "text-indigo-950",
    text: "text-indigo-700/85",
    iconBg: "bg-indigo-100/70",
    iconColor: "text-indigo-650",
    linkColor: "text-indigo-650",
    linkHover: "hover:text-indigo-805",
    divider: "bg-indigo-500"
  },
  about: {
    bg: "bg-purple-50/70",
    border: "border-purple-100/80",
    heading: "text-purple-950",
    text: "text-purple-700/85",
    iconBg: "bg-purple-100/70",
    iconColor: "text-purple-650",
    linkColor: "text-purple-650",
    linkHover: "hover:text-purple-805",
    divider: "bg-purple-500"
  },
  resume: {
    bg: "bg-slate-50",
    border: "border-slate-200/70",
    heading: "text-slate-900",
    text: "text-slate-600",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    linkColor: "text-indigo-600",
    linkHover: "hover:text-indigo-800",
    divider: "bg-indigo-600"
  }
};

const getThemeKey = (pathname: string): string => {
  if (pathname === "/work") return "work";
  if (pathname === "/skills") return "skills";
  if (pathname === "/projects") return "projects";
  if (pathname === "/aboutme") return "about";
  if (pathname === "/resume") return "resume";
  return "home";
};

const ContactMe: React.FC = () => {
    const location = useLocation();
    const themeKey = getThemeKey(location.pathname);
    const theme = themes[themeKey] || themes.home;
    const personal = RESUME_DATA.personal;

    return (
        <div className={`w-full ${theme.bg} py-10 px-4 sm:px-6 border-t ${theme.border} transition-all duration-300 print:hidden`}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className={`text-2xl md:text-3xl font-extrabold ${theme.heading} mb-2`}>Get In Touch</h2>
                    <div className={`w-16 h-1.5 ${theme.divider} mx-auto rounded-full mb-4`}></div>
                    <p className={`text-base ${theme.text} max-w-2xl mx-auto font-medium`}>
                        Reach out for collaborations or just say hello!
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Email */}
                    <ContactCard
                        icon={
                            <svg className={`w-5 h-5 ${theme.iconColor}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        }
                        title="Email"
                        content={personal.email}
                        href={`mailto:${personal.email}`}
                        theme={theme}
                    />

                    {/* Phone */}
                    <ContactCard
                        icon={
                            <svg className={`w-5 h-5 ${theme.iconColor}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        }
                        title="Phone"
                        content={personal.phone}
                        href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                        theme={theme}
                    />

                    {/* LinkedIn */}
                    <ContactCard
                        icon={
                            <svg className={`w-5 h-5 ${theme.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                            </svg>
                        }
                        title="LinkedIn"
                        content={personal.name}
                        href={URLS.LINKEDIN}
                        theme={theme}
                    />
                </div>
            </div>
        </div>
    );
};

const ContactCard = ({ icon, title, content, href, theme }: ContactCardProps) => {
    return (
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-center">
            <div className={`${theme.iconBg} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
                {icon}
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-1">{title}</h3>
            <a
                href={href}
                target={title === "LinkedIn" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`${theme.linkColor} ${theme.linkHover} text-sm font-semibold break-words transition-colors`}
            >
                {content}
            </a>
        </div>
    );
};

export default ContactMe;
