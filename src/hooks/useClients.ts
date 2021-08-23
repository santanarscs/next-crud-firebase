import { useEffect, useState } from "react"
import { Client } from "../core/Client"
import { ClientRepository } from "../core/ClientRepository"
import { ClientCollection } from "../database/ClientCollection"
import { useVisibleData } from "./useVisibleData"

function useClients() {
const repo: ClientRepository = new ClientCollection()

  const {  isFormVisible, isTableVisible, showTable, showForm } = useVisibleData()
  const [selectedClient, setSelectedClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  
  useEffect(getClients, [])
  
  function getClients() {
    repo.findAll().then(clients => {
      setClients(clients)
      showTable()
    })
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getClients()
  }

  function handleSelectClient(client: Client) {
    setSelectedClient(client)
    showForm()
  }
  function handleNewClient() {
    setSelectedClient(Client.empty())
    showForm()
  }
  async function handleRemoveClient(client: Client) {
    await repo.delete(client)
    getClients()
  }
  return {
    handleRemoveClient,
    saveClient,
    handleNewClient,
    handleSelectClient,
    selectedClient,
    getClients,
    clients,
    showTable,
    showForm,
    isFormVisible,
    isTableVisible,
    
  }
}

export { useClients }