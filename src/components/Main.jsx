 import React from "react"

export default function Main(){

    let [ingredients,setIngredients] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li className="text-black" key={ingredient}>{ingredient}</li>
    ))



    function submitHandler(event){
        event.preventDefault()
        console.log("Form Submitted")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if(newIngredient.trim()!==""){
        setIngredients(prevIng => [...prevIng,newIngredient])
    }
    }

    return(
        <main className="mt-15 ">
            <form onSubmit={submitHandler} type="" className="flex flex-wrap md:flex-nowrap gap-x-3 gap-y-4 items-center content-center justify-center ">
                <input className="w-1/2 md:w-2/5 drop-shadow-md shadow-gray-300 px-7 py-2 rounded-md bg-white outline-none "
                 type="text"
                 placeholder="e.g. Oregano" 
                 aria-label="Add ingridient" 
                 name="ingredient"
                 />
                 <button  type="submit" className="cursor-pointer px-7 py-2  bg-black text-white  rounded-md ">+ Add ingridient</button>
            </form>

            <ul className="flex flex-col items-center mt-10 list-disc">
                {ingredientsListItems}
            </ul>

        </main>
    )
}