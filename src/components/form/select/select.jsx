import {FormControl, Label, Select} from "./select.element"

export default function Selected({text, name, options, handleOnChange, value}) {
  return (
    <FormControl>
        <Label htmlFor={name}>{text}</Label>
        <Select 
        name={name} 
        id={name} 
        onChange={handleOnChange} 
        value={value || ''}
        >
            <option>Selecione uma opção</option>
            {options.map(option => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
        </Select>
    </FormControl>
  )
}
