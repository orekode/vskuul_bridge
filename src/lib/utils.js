import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const safeGet = (obj, properties, alternateValue = false) => {

  if(typeof(properties) !== "object") properties = [properties];

  let result = properties.reduce((subObj, prop) => (subObj && subObj[prop]) ? subObj[prop] : false , obj);

  if(!result) return alternateValue;

  return result;

}