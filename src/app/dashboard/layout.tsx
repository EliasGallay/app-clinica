import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/dashboard/components/AppSidebar";
import Topbar from "@/app/dashboard/components/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full h-screen">
        <div className="w-64 border-r border-gray-200">
          <SidebarTrigger />
          <AppSidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <Topbar />

          <main className="flex-1 p-4 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
