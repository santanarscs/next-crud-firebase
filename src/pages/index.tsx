import React, { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Form } from '../components/Form'
import { Layout } from '../components/Layout'
import { Table } from '../components/Table'
import { Client } from '../core/Client'
import { ClientRepository } from '../core/ClientRepository'
import { ClientCollection } from '../database/ClientCollection'
import { useClients } from '../hooks/useClients'
export default function Home() {
  
  const { clients, saveClient, handleNewClient,handleSelectClient, handleRemoveClient, selectedClient, showTable, isTableVisible, isFormVisible } = useClients()

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Simple Cad">
        {isTableVisible && (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={handleNewClient}> New Client</Button>
            </div>
            <Table
              clients={clients}
              handleSelectClient={handleSelectClient}
              handleRemoveClient={handleRemoveClient}/>
          </>
        )}
        {isFormVisible && (
          <Form client={selectedClient} handleCancel={showTable} handleChangeClient={saveClient}/>
        )}
      </Layout>
    </div>
  )
}
