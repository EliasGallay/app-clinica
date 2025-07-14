import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Topbar() {
  return (
    <header className="flex w-full items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      {/* Left: Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pacientes</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <NavigationMenuLink href="/dashboard/pacientes">
                Listado
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Médicos</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <NavigationMenuLink href="/dashboard/medicos">
                Listado
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right: Placeholder para perfil/acciones */}
      <div className="flex items-center space-x-4">
        {/*nombre, avatar o botón de logout  */}
        <span className="text-sm text-gray-700 font-medium">
          Dr. Juan Pérez
        </span>
        <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded">
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
