import UserAvatar from '@/features/users/components/user-avatar'
import { UserPlusIcon } from 'lucide-react'
import { useRecommendations } from './useRecommendations'

function RecommendationsCard() {
  const { recommendations, isLoading } = useRecommendations()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="bg-card p-6 rounded-xl border border-border flex flex-col gap-6 min-w-72 max-w-full">
      <h3 className="text-lg font-bold text-foreground">Sugestões para você</h3>
      <ul className="flex flex-col gap-4">
        {recommendations?.items.map((item) => (
          <li key={item.id} className="flex gap-4 items-center justify-start">
            <UserAvatar
              avatarUrl={item.avatarUrl}
              firstName={item.firstName}
              lastName={item.lastName}
              size="default"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">{item.name}</span>
              <span className="text-sm text-muted-foreground">Campus {item.campus.name}</span>
            </div>
            <UserPlusIcon className="text-primary size-5 ml-auto" />
          </li>
        ))}


      </ul>
    </div>
  )
}

export default RecommendationsCard
