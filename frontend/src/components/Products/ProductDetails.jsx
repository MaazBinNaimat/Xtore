import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const selectedProduct = {
    name: "Saiful Malook",
    price: 200,
    originalPrice: 150,
    description: "Saiful Malook is a fresh aquatic fragrance for men, blending mint, lavender, and rosemary with floral heart notes and a warm base of cedarwood, amber, musk, and tobacco.",
    brand: "Scents N Stories",
    sizes: ["50ml", "100ml"],
    images: [{
        url: "https://scentsnstories.pk/cdn/shop/files/saifulmulook_62_11zon.webp?v=1735758169&width=720",
        altText: "Arabian Oud Attar",
    },



    {
        url: "https://scentsnstories.pk/cdn/shop/files/Saiful_Malook_New_Box.webp?v=1746171538&width=720",
        altText: "Arabian Oud Attar",
    },
    ]

}

const ProductDetails = () => {

    const [MainImage, setMainImage] = useState("");
    const [SelectedMl, setSelectedMl] = useState("");
    const [Quantity, setQuantity] = useState(1);
    const [IsBtnDisabled, setIsBtnDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct]);

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && Quantity > 1) setQuantity((prev) => prev - 1);
    }

    const handleAddToCart = () => {
        if (!SelectedMl) {
            toast.error("Please select a Perfume bottle Size before adding to cart.", {
                duration: 1000,
            });
            return;
        }
        setIsBtnDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart", {
                duration: 1000,
            });
            setIsBtnDisabled(false);
        }, 500)
    };


    return (
        <>
            <div className="p-6">
                <h2 className='text-3xl text-center font-bold mb-4 font-allerta'>Best Seller</h2>
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Thumbnails */}
                        <div className="hidden md:flex flex-col space-y-4 mr-6">
                            {selectedProduct.images.map((img, ind) => (
                                <img
                                    key={ind}
                                    src={img.url}
                                    alt={img.altText || `Thumbnail ${ind}`}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${MainImage === img.url ? "border-medium-blue" : "border-gray-300"}`}
                                    onClick={() => setMainImage(img.url)}
                                />
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="md:w-1/2">
                            <div className="mb-4">
                                <img
                                    src={MainImage}
                                    alt="Main Product"
                                    className='w-full h-auto object-cover rounded-lg'
                                />
                            </div>
                        </div>
                        {/* Mobile Thambnail */}
                        <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4 ">
                            {selectedProduct.images.map((img, ind) => (
                                <img
                                    key={ind}
                                    src={img.url}
                                    alt={img.altText || `Thumbnail ${ind}`}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${MainImage === img.url ? "border-black" : "border-gray-300"}`}
                                    onClick={() => setMainImage(img.url)}
                                />
                            ))}
                        </div>
                        {/* Right Side */}
                        <div className="md:w1/2 md:ml-10">
                            <h1 className='text-2xl md:text-3xl font-semibold mb-2 font-allerta'>
                                {selectedProduct.name}
                            </h1>
                            <p className='text-lg text-red-600 mb-1 line-through'>
                                $ {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                            </p>
                            <p className="text-xl text-gray-800 mb-2">
                                $ {selectedProduct.price}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {selectedProduct.description}
                            </p>
                            <div className="mb-4">
                                <p className='text-gray-700'>Bottle Format:</p>
                                <div className="flex gap-2 mt-2">
                                    {selectedProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedMl(size)}
                                            className={`w-18 h-8 rounded-full border ${SelectedMl === size ? "bg-medium-blue text-white" : "border-gray-200"}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='mb-6'>
                                <p className='text-gray-700'>Quantity:</p>
                                <div className="flex">
                                    <button onClick={() => handleQuantityChange("minus")} className='px-2 py-1 bg-gray-200 rounded text-lg'>-</button>
                                    <span className='text-lg mx-2'>{Quantity}</span>
                                    <button onClick={() => handleQuantityChange("plus")}
                                        className='px-2 py-1 bg-gray-200 rounded text-lg'>+</button>
                                </div>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                disabled={IsBtnDisabled}
                                className={`bg-dark-blue text-white py-2 px-6 rounded w-full mb-4 hover:bg-light-blue hover:text-dark-blue transition-all duration-300 ${IsBtnDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-dark-blue"}`}>
                                {IsBtnDisabled ? "Adding..." : "ADD TO CART"}
                            </button>

                            <div className="mt-10 text-gray-700">
                                <h3 className='text-xl font-bold mb-4'>Characteristics</h3>
                                <table className='w-full text-left text-sm text-gray-600'>
                                    <tbody>
                                        <tr>
                                            <td className='py-1'>Brand</td>
                                            <td className='py-1'>{selectedProduct.brand}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails