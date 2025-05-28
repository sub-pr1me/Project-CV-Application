import { useState } from 'react'
import './styles/App.css'
import Data from './components/Data.jsx'

function App() {
  const [items, setItems] = useState(
    {
      firstname: 'Apu',
      lastname: 'Apustaja',
      profession: 'professional autist',
      photo: '',
      location: 'NY, USA',
      phone: '+ 9 999 999 9999',
      email: 'apu.forever@gmail.com',

      linkedin: 'link',
      github: 'link',
      facebook: 'link',
      twitter: 'link',
      whatsapp: 'link'
    }
  );

  const [formData, setFormData] = useState(
    {
      firstname: '',
      lastname: '',
      profession: '',
      photo: '',
      location: '',
      phone: '',
      email: '',

      linkedin: '',
      github: '',
      facebook: '',
      twitter: '',
      whatsapp: ''
    }
  );

  return (
    <>
      <Data
        items={items}
        setItems={setItems}
        formData ={formData}
        setFormData={setFormData}
      />
    </>
  )
}

export default App