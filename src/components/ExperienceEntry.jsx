import styles from '../styles/ExperienceEntry.module.css'
import { useImmer } from "use-immer"

const ExperienceEntry = ({formData, setFormData, removeEntry, index, isDisabled}) => {
  
  
    const [resps, setResps] = useImmer([{index: 1, key: crypto.randomUUID()}]);

    function addResp() {
        if (resps.length <= 3 ) {
            let num = resps.length+1;
            setFormData((draft) => {draft.experience[index-1][4].push(['',crypto.randomUUID()])});
            setResps((draft) => {draft.push({index: num, key: crypto.randomUUID()})});
        };        
    }

    function removeResp(index) {
        if (resps.length >= 2) {
            setFormData((draft) => {
                draft.experience[index-1][4].pop();
            });
            setResps((draft) => {
                draft.pop();
            });
        };        
    };
    
    const ind = index;
  
    return (
      <div className={styles.input_wrapper}>
          <div className={styles.entry_title}>
              <div className={styles.entry_number}>{`# ${index}`}</div>
              <button
                  type='button'
                  className={`${styles.remove_btn} ${formData.experience.length === 1 ? styles.hidden : null}`}
                  onClick={() => {removeEntry(index)}}
                  disabled={isDisabled}
                  >Remove
              </button>
          </div>

          <div className={styles.field_wrapper}>
              <label htmlFor={`period-${index}`}>Period:</label>
              <input
                  type='text' 
                  id={`period-${index}`}
                  autoComplete='false'
                  // required
                  defaultValue={formData.experience[index-1][0]}
                  onChange={(e) => {setFormData((draft) => {draft.experience[index-1][0] = e.target.value})}}
                  disabled={isDisabled}
              />
          </div>
          <div className={styles.field_wrapper}>
              <label htmlFor={`location-${index}`}>Location:</label>
              <input
                  type='text'
                  id={`location-${index}`}
                  autoComplete='false'
                  // required
                  defaultValue={formData.experience[index-1][1]}
                  onChange={(e) => {setFormData((draft) => {draft.experience[index-1][1] = e.target.value})}}
                  disabled={isDisabled}
              />
          </div>
          <div className={styles.field_wrapper}>
              <label htmlFor={`company-${index}`}>Company:</label>
              <input
                  type='text'
                  id={`company-${index}`}
                  autoComplete='false'
                  // required
                  defaultValue={formData.experience[index-1][2]}
                  onChange={(e) => {setFormData((draft) => {draft.experience[index-1][2] = e.target.value})}}
                  disabled={isDisabled}
              />
          </div>
          <div className={styles.field_wrapper}>
              <label htmlFor={`position-${index}`}>Position:</label>
              <input
                  type='text'
                  id={`position-${index}`}
                  autoComplete='false'
                  // required
                  defaultValue={formData.experience[index-1][3]}
                  onChange={(e) => {setFormData((draft) => {draft.experience[index-1][3] = e.target.value})}}
                  disabled={isDisabled}
              />
          </div>
          <div className={styles.field_wrapper}>
              <div className={styles.resp}>Responsibilities:</div>
              <div className={styles.resp_btns}>
                <button
                    type='button'
                    className={`${styles.resp_rem}`}
                    onClick={() => {removeResp(ind)}}
                    disabled={isDisabled}
                >-</button>
                <button
                    type='button'
                    className={`${styles.resp_add}`}
                    onClick={addResp}
                    disabled={isDisabled}
                >+</button>
              </div>
              {resps.map((item) => {
                      return (
                          <input
                              key={item.key}
                              type="text"
                              id={`resp-${index}.${item.index}`}
                              autoComplete='false'
                              // required
                              defaultValue={formData.experience[index-1][4][item.index-1][0]}
                              onChange={(e) => {setFormData((draft) => {draft.experience[index-1][4][item.index-1][0] = e.target.value})}}
                              disabled={isDisabled}
                          />
                      )
                  })}
          </div>
      </div>
    )
}   

export default ExperienceEntry