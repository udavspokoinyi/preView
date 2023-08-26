import SizeButtons from "@/entities/sizeButtons/sizeButtons"
import { Spinner } from '@nextui-org/spinner';
import ShopCard from "@/entities/card";
import Container from "@/shared/ui/container";
import ArticleHeader from "@/shared/ui/articleHeader";
import ArticleBody from "@/shared/ui/articleBody/articleBody";
export default async function ViewPage({params}:{params:{name:string}}) {
    console.log(params)
    const data = await Pockemon(params.name)
    return (
        <main>
            <Container>
                <div className="w-full flex flex-col gap-12 mt-40">
                <ArticleHeader></ArticleHeader>
                <ArticleBody>{data.weight}</ArticleBody>
                </div>
            </Container>

        </main>
    )
}

async function Pockemon(name:string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await res.json()
}