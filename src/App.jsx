import { useState } from 'react'
import { useImmer } from "use-immer"
import './styles/App.css'
import Data from './components/Data.jsx'

function App() {
  const [items, setItems] = useState(
    {
      firstname: 'Apu',
      lastname: 'Apustaja',
      profession: 'professional autist',
      photo: '../public/image/apu.jpg',
      location: 'NY, USA',
      phone: '+ 9 999 999 9999',
      email: 'apu.forever@gmail.com',
      summary: 'This is me.',

      linkedin: 'link',
      github: 'link',
      facebook: 'link',
      twitter: 'link',
      whatsapp: 'link',

      education: [
        {
          year: '2025',
          location: 'NY-USA',
          degree: 'BA in Autism',
          institution: 'University Of Autism'
        }
      ]
    }
  );

  const [formData, setFormData] = useImmer(
    {
      firstname: '',
      lastname: '',
      profession: '',
      photo: '',
      location: '',
      phone: '',
      email: '',
      summary: '',

      linkedin: '',
      github: '',
      facebook: '',
      twitter: '',
      whatsapp: '',

      education: [
        {
          year: '',
          location: '',
          degree: '',
          institution: ''
        }
      ]
    }
  );

  let educationEntry = {    
    year: '',
    location: '',
    degree: '',
    institution: ''  
  };

  let educationEntryCount = formData.education.length - 1;

  function addEducationEntry(e) {
    setFormData(draft => {
      draft.education.push(educationEntry);
    });
    e.target.previousSibling.firstChild.firstChild.nextSibling.disabled = false;
    e.target.previousSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
    e.target.previousSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
    e.target.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
  };

  return (
    <>
      <Data
        items={items}
        setItems={setItems}
        formData ={formData}
        setFormData={setFormData}
        educationEntryCount={educationEntryCount}
        addEducationEntry={addEducationEntry}        
      />
    </>
  )
}

export default App