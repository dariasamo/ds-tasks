export const fetchData = (endpoint: string): Promise<any> => {
  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
    .catch((error) => {
      console.error(error)
      return error
    })
}
