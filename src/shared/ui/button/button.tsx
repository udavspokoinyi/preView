import { Button } from "@nextui-org/button"
import { ReactNode } from "react"
export default function UiButton(props:{children:ReactNode}) {
    return (
        <Button radius="full" className="m-auto bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg max-w-[200px]">
            {props.children}
        </Button>
    )
}