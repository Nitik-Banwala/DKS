import { Geist,  Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "DKS Upholstery",
  description: "Upholstery Services Trusted Across Singapore",
  openGraph: {
    title: "DKS Upholstery",
    description: "Upholstery Services Trusted Across Singapore",
    images: ["/assets/image/meta.pngp"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}