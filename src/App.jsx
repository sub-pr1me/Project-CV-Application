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
        lastname: 'APUSTAJA',
        profession: 'PROFESSIONAL AUTIST',
        photo: '../public/image/apu.jpg',
        location: 'NY, USA',
        phone: '+ 9 999 999 9999',
        email: 'apu.forever@gmail.com',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
      },
      social: [['Linked In','../icon/linkedin-plain.svg','Link',crypto.randomUUID()],
               ['Github','../icon/github-original.svg','Link',crypto.randomUUID()],
               ['Facebook','../icon/facebook.svg','Link',crypto.randomUUID()],
               ['Twitter','../icon/twitter-original.svg','Link',crypto.randomUUID()],
               ['WhatsApp','../icon/whatsapp.svg','Link',crypto.randomUUID()]
              ],
      education: [['2020','NY-USA','High School','Autism Public School',crypto.randomUUID()],
                  ['2020','NY-USA','BACON Certificate','UNIVERSITY OF BACON',crypto.randomUUID()],
                  ['2024','NY-USA','B.A in Autism','University Of Autism',crypto.randomUUID()],
                  ['2025','NY-USA','M.A in Autism','University Of Autism',crypto.randomUUID()]
                 ],
      skills: [['../icon/check-bold.svg','Web development',crypto.randomUUID()],
               ['../icon/check-bold.svg','Networking',crypto.randomUUID()],
               ['../icon/check-bold.svg','Grilling burgers',crypto.randomUUID()],
               ['../icon/check-bold.svg','Sleeping',crypto.randomUUID()],
               ['../icon/check-bold.svg','Drawing giraffes',crypto.randomUUID()],
               ['../icon/check-bold.svg','Playing trombone',crypto.randomUUID()]
              ],
      experience: [[
          '2022-2023',
          'NY-USA',
          `McDonald's`,
          'Burger flipper',
          [
            ['Flipping patties', crypto.randomUUID()],
            ['Frying fries', crypto.randomUUID()],
            ['Assembling burgers', crypto.randomUUID()],
            ['Mopping floors', crypto.randomUUID()]
          ],
          crypto.randomUUID()
        ],
        [
          '2023-2024',
          'NY-USA',
          'CLOWN WORLD INCORPORATED',
          'Junior silliness manager',
          [
            ['Throwing pies at faces', crypto.randomUUID()],
            ['Honking the honk', crypto.randomUUID()],
            ['Riding a unicycle', crypto.randomUUID()],
            ['Juggling burning hedgehogs', crypto.randomUUID()]
          ],
          crypto.randomUUID()
        ],
        [
          '2024-2025',
          'NY-USA',
          'AUTISM INTERNATIONAL',
          'Chief silliness officer',
          [
            ['Water cooler support', crypto.randomUUID()],
            ['Cookie jar refilling', crypto.randomUUID()],
            ['Watering plants', crypto.randomUUID()],
            ['Telling weird jokes', crypto.randomUUID()]
          ],
          crypto.randomUUID()
        ]
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
      social: [['Linked In','../icon/linkedin-plain.svg',''],
               ['Github','../icon/github-original.svg',''],
               ['Facebook','../icon/facebook.svg',''],
               ['Twitter','../icon/twitter-original.svg',''],
               ['WhatsApp','../icon/whatsapp.svg','']
              ],
              education: [['','','','',crypto.randomUUID()]],
      skills: ['', '', '', '', '', ''],
      experience: [['','','','',[['',crypto.randomUUID()]],crypto.randomUUID()]]
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
      <Mockup
        items={items}
      />
    </div>
  )
}

export default App