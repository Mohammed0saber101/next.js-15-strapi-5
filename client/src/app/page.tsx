async function loader(){
  const path = '/api/home-page'
  const BASE_URL = 'http://localhost:1337'

  const url = new URL(path, BASE_URL)
  const res = await fetch(url.href)
  const data = await res.json()
  return data.data
}

export default async function Home() {
const data = await loader()

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
