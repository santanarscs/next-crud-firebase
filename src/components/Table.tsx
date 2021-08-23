import { Client } from "../core/Client"
import { EditIcon, TrashIcon } from './Icons'
interface TableProps {
  clients: Client[];
  handleSelectClient?: (client: Client) => void;
  handleRemoveClient?: (client: Client) => void;
}

function Table({handleSelectClient, handleRemoveClient, clients }: TableProps) {
  const showActions = handleSelectClient ||  handleRemoveClient
  function renderHead() {
    return (
      <tr>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions && (<th className="p-4">Actions</th>)}
      </tr>
    )
  }
  function renderBody() {
    return clients?.map((client, index) => (
      <tr key={client.id}
        className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
      >
        <td className="text-left p-4">{client.name}</td>
        <td className="text-left p-4">{client.age}</td>
        {showActions && renderActions(client)}
      </tr>
    )) 
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {handleSelectClient && (
          <button onClick={() => handleSelectClient(client)} className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1">
            {EditIcon}
          </button>
        )}
        {handleRemoveClient && (
          <button onClick={() => handleRemoveClient(client)}className="flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1">
            {TrashIcon}
          </button>
        )}
      </td>  
    )
  }

  return (
    <table className="w-full overflow-hidden rounded-xl">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
        {renderHead()}
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>
  )
}

export { Table }