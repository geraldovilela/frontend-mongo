
import { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from "react";
import { Container, Errors } from "./styles";
import { IconBaseProps } from 'react-icons';
import {FiAlertCircle} from 'react-icons/fi';
import { useField } from "@unform/core";


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<IInputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",

    })
  }, [fieldName, registerField])

  const handleInputFocus = useCallback(()=>{
    setIsFocused(true)
  },[])
  const handleBlurInput = useCallback(() => {
    setIsFocused(false);
    if (inputRef.current?.value) {
      setIsFilled(true)
    } else {
      setIsFilled(false);
    }
  }, [])

  return (
    <Container hasError={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input 
      defaultValue={defaultValue} 
      ref={inputRef}
      onFocus={handleInputFocus}
      onBlur={handleBlurInput}
      {...rest} />
      {error && 
        <Errors title={error}>
          <FiAlertCircle color="#c53030" size={20}/>
        </Errors>}
    </Container>
  )
}

export { Input }

