import { ReactNode } from "react";

export default function Container(props:{children:ReactNode}){
    return(
    <div className="max-w-screen-2xl w-full m-auto">{props.children}</div>
    )
}