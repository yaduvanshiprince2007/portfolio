import portfolioData from './data/portfolioData.json';

export const URLS = {
  LINKEDIN: portfolioData.urls.linkedin,
  GITHUB: portfolioData.urls.github,
  WHATSAPP: portfolioData.urls.whatsapp,
  PORTFOLIO: portfolioData.urls.portfolio,
};

export const RESUME = {
  PDF: portfolioData.resume.pdf,
  DOCX: portfolioData.resume.docx,
};

export interface PageTheme {
  gradient: string;
  className: string;
  primaryColor: string;
  accentColor: string;
  bg50: string;
  bg100: string;
  bg200: string;
  text600: string;
  text700: string;
  text800: string;
  text900: string;
  border200: string;
  gradientFrom400To600: string;
}

export const PAGE_THEMES: Record<string, PageTheme> = {
  home: {
    gradient: "from-cyan-50 via-sky-50 to-blue-50",
    className: "theme-home",
    primaryColor: "sky",
    accentColor: "cyan",
    bg50: "bg-sky-50",
    bg100: "bg-sky-100",
    bg200: "bg-sky-200",
    text600: "text-sky-600",
    text700: "text-sky-700",
    text800: "text-sky-800",
    text900: "text-sky-900",
    border200: "border-sky-200",
    gradientFrom400To600: "from-sky-400 to-sky-600",
  },
  skills: {
    gradient: "from-emerald-50 via-teal-50 to-green-50",
    className: "theme-skills",
    primaryColor: "emerald",
    accentColor: "teal",
    bg50: "bg-emerald-50",
    bg100: "bg-emerald-100",
    bg200: "bg-emerald-200",
    text600: "text-emerald-600",
    text700: "text-emerald-700",
    text800: "text-emerald-800",
    text900: "text-emerald-900",
    border200: "border-emerald-200",
    gradientFrom400To600: "from-emerald-400 to-emerald-600",
  },
  projects: {
    gradient: "from-indigo-50 via-violet-50 to-purple-50",
    className: "theme-projects",
    primaryColor: "indigo",
    accentColor: "violet",
    bg50: "bg-indigo-50",
    bg100: "bg-indigo-100",
    bg200: "bg-indigo-200",
    text600: "text-indigo-600",
    text700: "text-indigo-700",
    text800: "text-indigo-800",
    text900: "text-indigo-900",
    border200: "border-indigo-200",
    gradientFrom400To600: "from-indigo-400 to-indigo-600",
  },
  work: {
    gradient: "from-orange-50 via-amber-50 to-yellow-50",
    className: "theme-work",
    primaryColor: "orange",
    accentColor: "amber",
    bg50: "bg-orange-50",
    bg100: "bg-orange-100",
    bg200: "bg-orange-200",
    text600: "text-orange-600",
    text700: "text-orange-700",
    text800: "text-orange-800",
    text900: "text-orange-900",
    border200: "border-orange-200",
    gradientFrom400To600: "from-orange-400 to-orange-600",
  },
  about: {
    gradient: "from-purple-50 via-fuchsia-50 to-pink-50",
    className: "theme-about",
    primaryColor: "purple",
    accentColor: "fuchsia",
    bg50: "bg-purple-50",
    bg100: "bg-purple-100",
    bg200: "bg-purple-200",
    text600: "text-purple-600",
    text700: "text-purple-700",
    text800: "text-purple-800",
    text900: "text-purple-900",
    border200: "border-purple-200",
    gradientFrom400To600: "from-purple-400 to-purple-600",
  },
  resume: {
    gradient: "from-slate-50 via-zinc-50 to-indigo-50",
    className: "theme-resume",
    primaryColor: "indigo",
    accentColor: "slate",
    bg50: "bg-slate-50",
    bg100: "bg-slate-100",
    bg200: "bg-slate-200",
    text600: "text-slate-650",
    text700: "text-indigo-700",
    text800: "text-slate-800",
    text900: "text-indigo-950",
    border200: "border-slate-200",
    gradientFrom400To600: "from-slate-500 to-indigo-600",
  },
};

export const RESUME_DATA = portfolioData;
;