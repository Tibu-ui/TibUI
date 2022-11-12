import { Raleway } from "@next/font/google";
import "@styles/globals.scss";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
