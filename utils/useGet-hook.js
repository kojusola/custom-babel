export default function useGet(returnFunction, dependencyArray) {
  console.log(returnFunction())
  return {
    data: returnFunction(),
    loading: false,
  }
}
