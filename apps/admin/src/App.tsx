import { AdminLayout } from "@/components/layout/AdminLayout";
import { CakesAdmin } from "@/pages/CakesAdmin";

export default function App() {
  return (
    <AdminLayout>
      <CakesAdmin />
    </AdminLayout>
  );
}
