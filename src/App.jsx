import { useState } from 'react'
import { useImmer } from "use-immer"
import './styles/App.css'
import Data from './components/Data.jsx'

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

      skills: ['Web development', 'Networking', 'Grilling burgers', '', '', '']
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

      skills: ['', '', '', '', '', '']
    }
  );

  const [shownEntries, setShownEntries] = useImmer(
    {
      one: 1,
      two: 0,
      three: 0,
      four: 0,
      five: 0
    }
  );

  let educationEntry = {
    year: '',
    location: '',
    degree: '',
    institution: ''
  }

  let educationEntryCount = formData.education.length - 1;
  
  function addEducationEntry() {
    setFormData(draft => {
      draft.education.push(educationEntry);
    })
    if (!shownEntries.two) {
      setShownEntries(draft => {draft.one = 2});
      setShownEntries(draft => {draft.two = 1});
      return;
    };
    if (!shownEntries.three) {
      setShownEntries(draft => {draft.one = 2});
      setShownEntries(draft => {draft.two = 2});
      setShownEntries(draft => {draft.three = 1});
      return;
    };
    if (!shownEntries.four) {
      setShownEntries(draft => {draft.one = 2});
      setShownEntries(draft => {draft.two = 2});
      setShownEntries(draft => {draft.three = 2});
      setShownEntries(draft => {draft.four = 1});
      return;
    };
    if (!shownEntries.five) {
      setShownEntries(draft => {draft.one = 2});
      setShownEntries(draft => {draft.two = 2});
      setShownEntries(draft => {draft.three = 2});
      setShownEntries(draft => {draft.four = 2});
      setShownEntries(draft => {draft.five = 1});
      return;
    };
  };

  function hideEducationEntry(e) {
    let id = e.target.previousSibling.textContent[2];
    if (id === '1') {
      setShownEntries(draft => {
        draft.one = 2;
      })
    };
    if (id === '2') {
      setShownEntries(draft => {
        draft.two = 2;
      })
    };
    if (id === '3') {
      setShownEntries(draft => {
        draft.three = 2;
      })
    };
    if (id === '4') {
      setShownEntries(draft => {
        draft.four = 2;
      })
    };
    if (id === '5') {
      setShownEntries(draft => {
        draft.five = 2;
      })
    };
  };

  function showEducationEntry(e) {
    let id = e.target.previousSibling.previousSibling.textContent[2];
    if (id === '1') {
      setShownEntries(draft => {
        draft.one = 1;
      })
    };
    if (id === '2') {
      setShownEntries(draft => {
        draft.two = 1;
      })
    };
    if (id === '3') {
      setShownEntries(draft => {
        draft.three = 1;
      })
    };
    if (id === '4') {
      setShownEntries(draft => {
        draft.four = 1;
      })
    };
    if (id === '5') {
      setShownEntries(draft => {
        draft.five = 1;
      })
    };
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
        shownEntries={shownEntries}
        hideEducationEntry={hideEducationEntry}
        showEducationEntry={showEducationEntry}
      />
    </>
  )
}

export default App