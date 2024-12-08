import Image from "next/image";
import Image1 from '@/public/pictures/Image1.png';
import Image2 from '@/public/pictures/Image2.png';
import Image3 from '@/public/pictures/Image3.png';
import Image4 from '@/public/pictures/Image4.png';
import Image5 from '@/public/pictures/Image5.png';
import Image6 from '@/public/pictures/Image6.png';
import Image7 from '@/public/pictures/Image8.png';
import Image8 from '@/public/pictures/Image4.png';
export default function ProductCard() {
  return (
    <div>
        <div className="text-center p-9">
            <h1 className="text-3xl font-bold mb-2">Our Products</h1>
        
      {/* First Section of Products */}
      <div className="flex justify-center gap-6 py-10">
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 1 */}
          <div className="relative">
            <Image
              src={Image1} // Make sure the image is placed in public/images folder
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Syltherine</h2>
            <p className="text-gray-500 text-sm mb-2">Stylish Cafe Chair</p>
            <p className="font-bold text-lg">Rp 2.500.000</p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 2 */}
          <div className="relative">
            <Image
              src={Image2}
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Leviosa</h2>
            <p className="text-gray-500 text-sm mb-2">Stylish Cafe Chair</p>
            <p className="font-bold text-lg">Rp 2.500.000</p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 3 */}
          <div className="relative">
            <Image
              src={Image3} 
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Lolito</h2>
            <p className="text-gray-500 text-sm mb-2">Luxury Big Sofa</p>
            <p className="font-bold text-lg">Rp 7.000.000</p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 4 */}
          <div className="relative">
            <Image
              src={Image4}
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-50"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Respira</h2>
            <p className="text-gray-500 text-sm mb-2">Outdoor Bar Table and Stool</p>
            <p className="font-bold text-lg">Rp 500.000</p>
          </div>
        </div>
      </div>

      {/* Second Section of Products */}
      <div className="flex justify-center gap-6 py-10">
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 5 */}
          <div className="relative">
            <Image
              src={Image5}
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Grifo</h2>
            <p className="text-gray-500 text-sm mb-2">Night Lamp</p>
            <p className="font-bold text-lg">Rp 1.500.000</p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 6 */}
          <div className="relative">
            <Image
              src={Image6}
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Muggo</h2>
            <p className="text-gray-500 text-sm mb-2">Small Mug</p>
            <p className="font-bold text-lg">Rp 150.000</p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 7 */}
          <div className="relative">
            <Image
              src={Image7}
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-55"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Pingky</h2>
            <p className="text-gray-500 text-sm mb-2">Cute Bed Set</p>
            <p className="font-bold text-lg">Rp 7.000.000</p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Image 8 */}
          <div className="relative">
            <Image
              src={Image8}
              alt="cafe chair"
              width={300}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="font-bold text-lg">Potty</h2>
            <p className="text-gray-500 text-sm mb-2">Minimalist flower</p>
            <p className="font-bold text-lg">Rp 500.000</p>
          </div>

        </div>
        
      </div>
      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-white  font-semibold px-4 py-2 rounded-lg" style={{ color : '#B88E2F', border: '#B88E2F'}}>
          Show More
        </button>
      </div>
      </div></div>
  );
}