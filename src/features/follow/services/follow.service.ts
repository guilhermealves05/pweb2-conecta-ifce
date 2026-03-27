import { http } from "@/infra/http/http-client";
import type { RecommendationsDTO } from "../types/dto/recommendationsDTO";

export async function getRecommendations(): Promise<RecommendationsDTO> {
  const responseData = await http.get<RecommendationsDTO>('follow/recommendations')
  return responseData
}
