import { TopMenu } from "@/components/index";

export default function ShopLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="min-h-screen bg-red-500">
        <TopMenu />
        { children }
      </main>
    );
  }