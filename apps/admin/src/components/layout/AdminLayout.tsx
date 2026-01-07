import { ReactNode } from "react";
import { AdminHeader } from "./AdminHeader";

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      <AdminHeader />
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </div>
  );
}
