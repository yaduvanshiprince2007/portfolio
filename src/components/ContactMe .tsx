import React from "react";
import { URLS } from "../AppConstraint";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

const ContactMe = () => {
    return (
        <div className="w-full bg-purple-50 py-10 px-4 sm:px-6 border-t border-purple-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 mb-2">Get In Touch</h2>
                    <div className="w-16 h-1.5 bg-purple-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-base text-purple-700 max-w-2xl mx-auto">
                        Reach out for collaborations or just say hello!
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Email */}
                    <ContactCard
                        icon={
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        }
                        title="Email"
                        content="yaduvanshiprince2007@gmail.com"
                        href="mailto:yaduvanshiprince2007@gmail.com"
                    />

                    {/* Phone */}
                    <ContactCard
                        icon={
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        }
                        title="Phone"
                        content="+91 7004571707"
                        href="tel:+917004571707"
                    />

                    {/* LinkedIn */}
                    <ContactCard
                        icon={
                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                            </svg>
                        }
                        title="LinkedIn"
                        content="Prince Yadav"
                        href={URLS.LINKEDIN}
                    />
                </div>
            </div>
        </div>
    );
};

const ContactCard = ({ icon, title, content, href }: ContactCardProps) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                {icon}
            </div>
            <h3 className="text-sm font-medium text-purple-800 mb-1">{title}</h3>
            <a
                href={href}
                target={title === "LinkedIn" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 text-sm break-words"
            >
                {content}
            </a>
        </div>
    );
};

export default ContactMe;
