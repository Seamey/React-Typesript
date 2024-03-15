import { useEffect, useState } from 'react';

import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { Products } from './HomeComponent';


export type AddProducts ={
     
    title: string,
    price: number,
    description: string,
    image: string,
    
 };
 type ErrorType={
    title?:string
    price?:string

 }
 type CreateFormProps={
    getDataForm: (Product: AddProducts)=> void;
 }
const FormComponent: React.FC<CreateFormProps> =({
    getDataForm ,})=>{
    const [product,setProduct] = useState<AddProducts>({
        title: " ",
        price: 0,
        description: "",
        image: 'https://i.pravatar.cc',
    })
    useEffect(()=>{
        getDataForm(product)
    },)
   const [error,setEorr]= useState<ErrorType>({})
    useEffect(()=>{
        const newError:ErrorType ={};
        if(product.title.length<3){
            newError.title=" Title must be at lest 3 characters "
        }
        if(product.price && Number(product.price)<0){
            newError.price=" price must be greater than 0"
        }
        setEorr(newError)
    },[product.title,product.price])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {id,value} = e.target;
        setProduct((prevProduct)=>({
         ...prevProduct,
         [id]:value
        }));
    }
  return (
    <form className="flex max-w-sm flex-col gap-4 justify-center m-3 ">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Your Prduct" />
        </div>
        <TextInput id="title" type="text" placeholder="T-shirt" value={product.title} required  onChange={handleChange}/>
        {error.title && <p className='text-red-500'>{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product Price" />
        </div>
        <TextInput id="price" type="number" value={product.price} required onChange={handleChange} />
        {error.price && <p className='text-red-500'>{error.price}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product description"  />
        </div>
        <Textarea id="description" placeholder="description" value={product.description} onChange={handleChange} />
      </div>
      
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      
    </form>
  );
}
export default FormComponent
