export const metadata = {
  title: {
    default: "Omar Anli | Backend & Full-Stack Developer",
    template: "%s | Omar Anli",
  },
  description:
    "Portfolio of Omar Anli, a Backend & Full-Stack Developer based in Mauritius. Discover my projects, background, and skills.",
  keywords: [
  "Software developer",
  "Web developer",
  "Backend developer",
  "Fullstack developer",
  "Full-stack developer",
  "Next.js developer",
  "React developer",
  "Frontend developer",
  "API developer",
  "REST API",
  "Portfolio",
  "Mauritius",
  "Python developer",
  "Django developer",
  "FastAPI",
  "Electron developer",
  "React Native developer",
  "Mobile app developer",
  "Cross-platform developer"
]
,
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Omar Anli | Web Developer",
    description:
      "Explore the projects and skills of Omar Anli, a Backend & Full-Stack Developer based in Mauritius.",
    url: "http://localhost:3000",
    siteName: "Omar Anli Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Omar Anli's portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
