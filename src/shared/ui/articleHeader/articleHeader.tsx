import {Card, CardBody,} from "@nextui-org/card";
import { Children, ReactNode } from "react";

export default function ArticleHeader(props:{children:ReactNode}){
    return (
        <Card className="max-w-[700px] m-auto">
          <CardBody>
            <p className="text-center">{props.children}</p>
          </CardBody>
        </Card>
      );
}