import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Product = ({
    id,
    product,
    date,
    quantity,
    price,
    tax,
    discount,
    index,
    updateHandler,
    removeHandler,
    calcTotal,
    status,
    moneyFormat
}) => {
    return(
        <>
            <div className={`border-t py-2`}>
                <input type="date" className={`focus:outline-none w-full text-center bg-transparent`} value={date} onChange={(event) => {
                    updateHandler("date", event.target.value, index);
                }} />
            </div>
            <div className={`border-t py-2`}>
                <input type="text" className={`focus:outline-none w-full text-center bg-transparent`} value={product} onChange={(event) => updateHandler("product", event.target.value, index)} />
            </div>
            <div className={`border-t py-2`}>
                <input type="text" className={`focus:outline-none w-full text-center bg-transparent`} value={quantity} onChange={(event) => updateHandler("quantity", event.target.value, index, true)} />
            </div>
            <div className={`border-t py-2`}>
                <input type="text" className={`focus:outline-none w-full text-center bg-transparent`} value={price ? price.toFixed(2) : 0} onChange={(event) => updateHandler("price", event.target.value, index, true)} />
            </div>
            <div className={`border-t py-2`}>
                <input type="text" className={`focus:outline-none w-full text-center bg-transparent`} value={tax} onChange={(event) => updateHandler("tax", event.target.value, index, true)} />
            </div>
            <div className={`border-t py-2`}>
                <input type="text" className={`focus:outline-none w-full text-center bg-transparent`} value={discount} onChange={(event) => updateHandler("discount", event.target.value, index, true)} />
            </div>
            <div className={`border-t py-2`}>
                <strong className="flex items-center justify-center w-full">{moneyFormat(calcTotal(price, quantity, tax, discount))}</strong>
            </div>
            <div className="border-t py-2">
                <input type="checkbox" className={`focus:outline-none w-full text-center bg-transparent`} checked={status} onChange={(event) => updateHandler("status", event.target.checked, index, true)} />
            </div>
            <div className="border-t py-2">
                <button className="transition ease-in-out delay-150 hover:bg-red-800 bg-red-600 text-white py-2 px-4" onClick={() => removeHandler(index)}>
                    <AiOutlineClose />
                </button>
            </div>
        </>
    )
};

export default Product;