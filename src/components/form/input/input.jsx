import {FormControl, Label, Input} from "./input.element"

export default function input({type, text, name, placeholder, handleOnChange, value}) {
  return (
    <FormControl>
        <Label  htmlFor={name}>{text}</Label>
        <Input 
        type={type} 
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange}
        value={value}/>
    </FormControl>
  )
}
