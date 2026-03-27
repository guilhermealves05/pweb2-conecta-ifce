import UserAvatar from '@/features/users/components/user-avatar'
import { useProfile } from './useProfile'

function ProfileCard() {
  const { userData, isLoading } = useProfile()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="bg-card p-6 rounded-xl border border-border flex flex-col gap-6 min-w-xs max-w-full">
      <div className="flex items-center gap-4">
        <UserAvatar
          avatarUrl={userData?.avatarUrl}
          firstName={userData?.firstName}
          lastName={userData?.lastName}
          size="lg"
        />

        <div>
          <h3 className="text-lg font-bold text-foreground">
            {userData?.name}
          </h3>

          <span className="text-sm text-primary">
            {userData?.role === 'STUDENT'
              ? `Estudante de ${userData.course}`
              : `Campus ${userData?.campus.name}`}
          </span>
        </div>
      </div>

      <div className="flex gap-4 w-full justify-center">
        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs font-semibold">
            Posts
          </span>
          <span className="text-center font-bold">{userData?.stats.postsCount}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs font-semibold">
            Seguindo
          </span>
          <span className="text-center font-bold">{userData?.stats.followingCount}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs font-semibold">
            Seguidores
          </span>
          <span className="text-center font-bold">{userData?.stats.followersCount}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
