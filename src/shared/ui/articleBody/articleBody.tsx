import { Card, CardBody } from "@nextui-org/card"
import { ReactNode } from "react"
export default function ArticleBody(props:{children:ReactNode}) {
    return (
        <Card className="max-w-[700px] m-auto">
            <CardBody>
                <p>{props.children}</p>
            </CardBody>
        </Card>
    )
}