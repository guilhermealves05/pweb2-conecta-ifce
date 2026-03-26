import UserAvatar from './user-avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../shared/components/ui/dropdown-menu'
import { useUserMenu } from './useUserMenu'

function UserMenu() {
  const { authUser, triggerLogout } = useUserMenu()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none focus:outline-none">
        <UserAvatar
          avatarUrl={authUser?.avatarUrl}
          firstName={authUser?.firstName}
          lastName={authUser?.lastName}
          size="lg"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-sm font-semibold text-foreground ">
            {authUser?.name}
          </DropdownMenuLabel>
          <DropdownMenuLabel className="text-xs text-muted-foreground ">
            {authUser?.email}
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem variant="destructive" onClick={triggerLogout}>
            Sair
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
