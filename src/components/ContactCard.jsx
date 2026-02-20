import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactCard() {
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:linggaaditya2806@gmail.com",
      color: "hover:text-red-500",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lingga-aditya-nugroho-1b543a1a2/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/LinggaAdityaNugroho",
      color: "hover:text-neutral-800 dark:hover:text-white",
    },
  ];

  return (
    <div className="p-1 mt-6">
      <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
        <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
          GET IN TOUCH
        </h4>

        <div className="grid grid-cols-3 gap-2 justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${social.color}`}
              title={social.label}
            >
              <span className="text-xl">{social.icon}</span>
            </a>
          ))}
        </div>

        <a
          href="mailto:your-email@gmail.com"
          className="mt-5 w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all active:scale-95"
        >
          <FaEnvelope /> Hire Me
        </a>
      </div>
    </div>
  );
}
