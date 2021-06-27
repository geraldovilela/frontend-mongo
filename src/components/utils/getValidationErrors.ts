import {ValidationError} from 'yup';

interface IErrors {
  [key:string]:string;
}
export default function getValidationErrors(err:ValidationError): IErrors{
  const validationErrors: IErrors = {};

  err.inner.forEach( 
    (error)=>{
    /* @ts-ignore */  
    validationErrors[error.path] = error.message;
  });
  return validationErrors;

}