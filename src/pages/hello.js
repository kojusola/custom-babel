import React from "react"
import axios from "axios"
import useGet from "../../utils/useGet-hook"

export default function Home() {
  const [apiData, setApiData] = React.useState("")

  const url = "api/gatsby-function"

  const getData = () => {
    const results = async () => {
      try {
        const response = await axios.post(url)
        setApiData(response.data)
      } catch (error) {}
    }
    results()
    return apiData
  }

  const { data, loading } = useGet(getData, [])
  return <div> {!loading && <p> {data}!</p>}</div>
}
