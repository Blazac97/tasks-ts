  // Приводим к BigInt.
  const getBigInt = (value:string | bigint | number) => {
    return  typeof value === "string"||typeof value === "number" ? BigInt(value) : value;
   }
  
  // 2.1 Сложение.

  export const sumBigInt = (...args: (string | bigint | number)[]) =>{ 
    let result = getBigInt(args[0])
    for(let i=1; i<args.length; i++){
     const currentNormalized = getBigInt(args[i]);
     result += currentNormalized
    }
    return result
   }
   
  // 2.2 Вычитание.
   
  export const subBigInt = (...args: (string | bigint | number)[]) =>{ 
       let result = getBigInt(args[0])
       for(let i=1; i<args.length; i++){
        const currentNormalized = getBigInt(args[i]);
        result -= currentNormalized
       }
       return result
   }
   
   // 2.3 Умножение.
   
  export const multiBigInt = (...args: (string | bigint | number)[]) =>{ 
    let result = getBigInt(args[0])
    for(let i=1; i<args.length; i++){
     const currentNormalized = getBigInt(args[i]);
     result *= currentNormalized
    }
    return result
   }
   
   // 2.4 Деление.
   
  export const divBigInt = (...args: (string | bigint | number)[]) =>{ 
    let result = getBigInt(args[0])
    for(let i=1; i<args.length; i++){
     const currentNormalized = getBigInt(args[i]);
     result /= currentNormalized
    }
    return result
   }   
