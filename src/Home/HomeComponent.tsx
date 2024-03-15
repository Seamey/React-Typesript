import { useEffect, useState } from "react"
import CardComponent from "./cards/Card";
import ComponentLoadder from "./Loader/LoadingComponent";
import Create from "./ButtonCreate";

 const BAST_URL ="https://fakestoreapi.com/products"
 
 export type Products ={
    readonly id?:number
    title:string
    price?: number
    category? :string
    description: string
    image: string
 };
 const ComponentsHome = ()=>{
    const [getProducts,setGetProducts]= useState<Products[]>();
    const [loading, setLoading] = useState(false)
    async function fetchData (){
        try{
            const data = await fetch(BAST_URL) 
            const res= await data.json()
            console.log(res)
            setGetProducts(res)

        }catch(error){
            console.log(" Something was wrong!",error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            {
            loading? (<ComponentLoadder/>) : (
                <div className="justify-center grid md:grid-cols-3 lg:grid-cols-4 gap-4 wrap ">
                    {getProducts?.map((pro) =>(
                        <CardComponent
                        key={pro.id}
                        title={pro.title}
                        image={pro.image}
                        description={pro.description}
                        />
                    ))
                    }
                </div>
            )
        }
      
        </div>
        
    );
    
}
export default ComponentsHome