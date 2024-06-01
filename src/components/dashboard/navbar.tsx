import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Bars3Icon } from '@heroicons/react/16/solid';
import { useAppContext } from '@/contexts/app.context.tsx';

export default function Navbar() {
  const { toggleSidebar } = useAppContext();
  return (
    <div className="border-b">
      <nav className="flex items-center justify-between p-4 h-16">
        <div className="flex items-center gap-2">
          <Button
            className="block md:hidden"
            variant="outline"
            onClick={toggleSidebar}
          >
            <Bars3Icon className="w-4 h-4" />
          </Button>
          <h4 className="font-semibold">Dashboard</h4>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Ulugbek</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
