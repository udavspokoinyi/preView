import Image from 'next/image'
import ShopCard from "@/entities/card";
import Container from "@/shared/ui/container";
export default async function Home() {
  
  const data = await fetcher()
  return (
    <main>
      <Container>
        <div className="flex flex-wrap gap-36 mt-40">
          {data.map((p:any,id:number)=>(<ShopCard key={p.id} id={p.id} title={p.title} text={p.body}></ShopCard>))}
        </div>
      </Container>
    </main>
  )
}
async function fetcher(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  
  return await res.json()
}