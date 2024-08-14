// components/Layout.tsx
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header />
      {children}
    </div>
  )
}