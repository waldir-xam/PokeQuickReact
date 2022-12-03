import { useState } from 'react'
import Modal from './Modal'

const Modales = () => {

  const [mostrar, setMostrar] = useState(false)
  const [verContador, setVerContador] = useState(false)
  const [verFormulario, setVerFormulario] = useState(false)

  return (
    <div className="w-100">
      <h1>Modales</h1>
      <button className='btn btn-success m-2' onClick={() => setMostrar(true)}>Ver modal</button>
      <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
        <h2>Prueba de children</h2>
        <h4>Segundo componente</h4>
      </Modal>

      
    </div>
  )
}

export default Modales