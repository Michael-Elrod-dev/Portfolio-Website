// components/Layout.tsx
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Header />
      {children}
    </div>
  )
}