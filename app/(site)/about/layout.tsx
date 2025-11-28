
export default function AboutLayout({
  children,
  preview,
}: {
  children: React.ReactNode;
  preview: React.ReactNode;
}) {
  return (
    <>
      {children}
      {preview}
    </>
  );
}