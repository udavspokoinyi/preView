import Image from 'next/image'
import ShopCard from "@/entities/card";
import Container from "@/shared/ui/container";
export default async function Home() {
  const data = await fetcher()
  return (
    <main>
      <Container>
        <div className="flex flex-wrap gap-36 mt-40">
          {data.map((p:any)=>(<ShopCard key={p.name} title={p.name} text={p.weight}></ShopCard>))}
        </div>
      </Container>
    </main>
  )
}
async function fetcher(){
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  const resMain = await res.json()
  const arr = []
  for(
    const p of resMain.results
  ){
    const info = await fetch(p.url)
    arr.push(await info.json())
  }
  return arr
}