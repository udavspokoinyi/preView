import SizeButtons from "@/entities/sizeButtons/sizeButtons"
import {Spinner} from '@nextui-org/spinner'; 
import  ShopCard  from "@/entities/card";
import Container from "@/shared/ui/container";
export default function ViewPage(){
    return( 
    <main>
        <Container>
        <ShopCard></ShopCard>
        </Container>
    </main>
    )
}