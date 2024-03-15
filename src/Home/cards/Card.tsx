
'use client';

import { Card } from 'flowbite-react';
import { Products } from '../HomeComponent';

 export default function CardComponent ({id, title, category ,price, description, image}:Products) {
  return (
    <Card
      className="max-w-sm">
      <img src={image} className='object-fill' alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal  text-gray-700 dark:text-gray-400 line-clamp-3 ">
       {description}
      </p>
      
    </Card>
  );
}
