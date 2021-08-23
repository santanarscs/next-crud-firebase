import { useState } from "react";
import { Client } from "../core/Client";
import { Button } from "./Button";
import { Input } from "./Input";

interface FormProps {
  client: Client;
  handleChangeClient: (client: Client) => void;
  handleCancel?: () => void
}

function Form({client, handleChangeClient, handleCancel}: FormProps) {
  const id = client?.id
  const [name, setName] = useState<string>(client?.name ?? '')
  const [age, setAge] = useState<number>(client?.age ?? 0)

  return (
    <div>
      {id && (<Input label="Code" value={id} readOnly className="mb-4" />)}
      <Input 
        label="Name" 
        value={name}
        onChange={setName}
        className="mb-4"
      />
      <Input 
        label="Age" 
        value={age}
        type="number"
        onChange={setAge}
        className="mb-4"
      />
      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2" onClick={() => handleChangeClient(new Client(name, Number(age), id))}>
          {id ? 'Update' : 'Create'}
        </Button>
        <Button onClick={handleCancel}>
          Cancel
        </Button>
      </div>

    </div>
  )
}

export { Form }