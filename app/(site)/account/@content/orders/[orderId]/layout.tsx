export default function OrderDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex justify-center p-0 m-0">
      {children}
    </div>
  );
}
