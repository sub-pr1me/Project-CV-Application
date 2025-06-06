import { useState } from 'react'
import { useImmer } from "use-immer"
import styles from './styles/App.module.css'
import Data from './components/Data.jsx'
import Mockup from './components/Mockup.jsx'

function App() {
  const [items, setItems] = useState(
    {
      general: {
        firstname: 'Apu',
        lastname: 'Apustaja',
        profession: 'professional autist',
        photo: '../public/image/apu.jpg',
        location: 'NY, USA',
        phone: '+ 9 999 999 9999',
        email: 'apu.forever@gmail.com',
        summary: 'This is me.'
      },
      social: {
        linkedin: 'link',
        github: 'link',
        facebook: 'link',
        twitter: 'link',
        whatsapp: 'link'
      },
      education: [
        {
          year: '2025',
          location: 'NY-USA',
          degree: 'BA in Autism',
          institution: 'University Of Autism'
        }
      ],
      skills: ['Web development', 'Networking', 'Grilling burgers', '', '', ''],
      experience: [
        {
          period: '2024-2025',
          location: 'NY-USA',
          company: 'Autism International Inc',
          position: 'Chief silliness officer',
          responsibilities: [
            'Water cooler support',
            'Cookie jar refilling',
            'Watering plants',
            'Telling weird jokes'
          ]
        }
      ]
    }
  );
  const [formData, setFormData] = useImmer(
    {
      general: {
        firstname: '',
        lastname: '',
        profession: '',
        photo: '',
        location: '',
        phone: '',
        email: '',
        summary: ''
      },
      social: {
        linkedin: '',
        github: '',
        facebook: '',
        twitter: '',
        whatsapp: ''
      },
      education: [
        {
          year: '',
          location: '',
          degree: '',
          institution: ''
        }
      ],
      skills: ['', '', '', '', '', ''],
      experience: [
        {
          period: '',
          location: '',
          company: '',
          position: '',
          responsibilities: ['']
        }
      ]
    }
  );

  return (
    <div className={styles.app_content}>
      <Data
        items={items}
        setItems={setItems}
        formData ={formData}
        setFormData={setFormData}
      />
      <Mockup />
    </div>
  )
}

export default App