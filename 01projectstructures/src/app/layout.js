import "./globals.css";

export default function RootLayout({ children, sidebar }) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-black text-white">
        <div className="flex flex-col gap-2">
          {children}
          {sidebar}
        </div>
      </body>
    </html>
  );
}
