import ProfileCard from "@/features/auth/components/profile-card"
import RecommendationsCard from "@/features/follow/components/recommendations-card"

function FeedPage() {
  return (
    <section className="flex-1 flex justify-center items-center">
      <ProfileCard/>
      <RecommendationsCard/>
    </section>
  )
}

export default FeedPage
