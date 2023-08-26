import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import UiButton from "@/shared/ui/button";
export default function ShopCard(props: {title:string, text:string, id:number}) {
  
  return (
    <Card className="py-4 max-w-[400px] w-full gap-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{props.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {props.text}
      </CardBody>
      <Link className="text-center" href={'/'+props.id}><UiButton>Читать подробнее</UiButton></Link>
    </Card>
  )
}