import Image from "next/image"
import Dining from "@/public/Pictures/Dining.png"
import Living from "@/public/Pictures/Living.png" 
import Bedroom from "@/public/Pictures/Bedroom.png" 
export default function SubHero(){

    return (
        <>
        <div className="subText m-6 ">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image src={Dining} width={282} alt="Picture of the author" />
            <br />
                <h6>Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src={Living} width={282} alt="Picture of the author" />
            <br />
            <h6>Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src={Bedroom} width={282} alt="Picture of the author" />
            <br />
            <h6>Bedroom</h6>    
            </div>
           </div>

        </>
    )
}