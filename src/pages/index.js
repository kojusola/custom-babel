import React from "react"
import useGet from "../../utils/useGet-hook"

export default function Home() {
  const { data, loading } = useGet(() => {
    return "Hello"
  }, [])
  console.log(data)
  return <div> {!loading && <p>Hello {data}!</p>}</div>
}
