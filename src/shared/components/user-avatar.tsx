import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"


function UserAvatar() {
  return (
    <div>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </div>
  )
}

export default UserAvatar
