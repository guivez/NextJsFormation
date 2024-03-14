export const fetchFakeStore = async <T>(uri: string, init?: RequestInit ) : Promise<T> => {
  const response = await fetch(`https://fakestoreapi.com${uri}`, init)
  const data = response.json()
  return data as T;
}

export const fetchRatingWithDelay = async (id: number |string) => {

}