import { getRecommendations } from "@/features/follow/services/follow.service";
import type { RecommendationsDTO } from "@/features/follow/types/dto/recommendationsDTO";
import { useEffect, useState } from "react";

export function useRecommendations() {
  const [recommendations, setRecommendations] = useState<RecommendationsDTO | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true)



      const responseData = await getRecommendations();
      setRecommendations(responseData);


      setIsLoading(false)
    }

    fetchRecommendations()

  }, []);


  return {
    recommendations,
    isLoading
  }
}
