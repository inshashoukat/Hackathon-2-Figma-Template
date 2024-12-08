export default function Footer(){
    return (
        <>
        <footer>

        <div className="footer p-5 border-t-2 leading-10  border-gray-300">
            <div className="w-[14rem]  ">
                <h2 className="font-bold text-[2rem] m-9">Funiro.</h2>
                <p className="leading-none font-poppins " style={{ color:'#9F9F9F' }} >400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</p>
            </div>


            <div>
                <h4 style={{ color:'#9F9F9F' }}>Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>


            <div>
                <h4 style={{ color:'#9F9F9F' }}>Help</h4>
                <ul>
                    <li>Payment Option</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div>
                <h4 style={{ color:'#9F9F9F' }}>Newsletter</h4>
            <input style={{ color:'#9F9F9F' }} type="text" placeholder="Enter Your Email Adress" />
            <button type="submit" className="font-bold">SUBSCRIBE</button>
            </div>
            
        </div>
        <div  className="para">

            <hr />
            <p>2023 furino. All rights reverved</p>
        </div>
        </footer>
        </>
    )

}