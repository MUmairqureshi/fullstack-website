
import { UsersTable , NewUser} from "@/components/schema";
import Joi from "joi";
import { db } from '@vercel/postgres';
import { pgTable, serial, text, timestamp, varchar, boolean} from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres'


export interface  NewUsers  {
  productDescription: string 
  productImage :  Array<File>, 
  productName : string ,
  productPrice : Number ,
  productQuantity : Number , 
  productSlug : string, 
}



export const dynamic  = 'force-dynamic'

export async function POST(request: NextRequest) {
  const db = drizzle(sql)

  

    // const isAuthenticated = await AuthCheck(req);

    // if (isAuthenticated === 'admin') {
      
      const data = await request.json();
console.log(data)
      const {  productDescription  , productImage ,productName  , productPrice , productQuantity , productSlug  } = data;


      if (
        !productDescription ||
        !productImage ||
        !productName ||
        !productPrice ||
        !productQuantity||
        !productSlug
      ) {
        return NextResponse.json(
          { message: "Fields are empty!" },
          {
            status: 404,
          }
        );
      }
      const appliedUser    = {
        productDescription ,
        productImage ,
        productName ,
        productPrice ,
        productQuantity , 
        productSlug, 
    
      };
    
      try {
        const users = await db.insert(UsersTable).values(appliedUser).returning();
        return NextResponse.json({
          message: "Applied Successfirsty",
          users,
        })
  
  }  catch (error : any) {
    console.log("error" , error)
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
  


  
}
