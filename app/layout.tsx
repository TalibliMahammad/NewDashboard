import './global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az " suppressHydrationWarning>
      <body className="bg-background overflow-hidden">
        {children}
      </body>
    </html>
  );
}

const styles = {
  body: {
    background: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
  },
};