import SizeButtons from "@/entities/sizeButtons/sizeButtons"
import { Spinner } from '@nextui-org/spinner';
import ShopCard from "@/entities/card";
import Container from "@/shared/ui/container";
import ArticleHeader from "@/shared/ui/articleHeader";
import ArticleBody from "@/shared/ui/articleBody/articleBody";
export default async function ViewPage({params}:{params:{id:number}}) {
    const data = await Pockemon(params.id)
    console.log(params)
    console.log(data)
    return (
        <main>
            <Container>
                <div className="w-full flex flex-col gap-12 mt-40">
                <ArticleHeader>{data.id}</ArticleHeader>
                <ArticleBody>{data.body}</ArticleBody>
                </div>
            </Container>

        </main>
    )
}

async function Pockemon(id:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await res.json()
   
}