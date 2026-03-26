import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/shared/components/ui/avatar'
import { useAvatar } from './useAvatar'

function UserAvatar({
  avatarUrl,
  firstName,
  lastName,
  size,
}: {
  avatarUrl: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  size: 'default' | 'sm' | 'lg' | undefined
}) {


  const{getInitials}= useAvatar(firstName, lastName)

  const initials = getInitials()

  return (
    <div>
      <Avatar size={size}>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback className="bg-primary/20 text-primary border border-primary/50 font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserAvatar
