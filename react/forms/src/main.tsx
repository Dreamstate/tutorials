import { createRoot } from 'react-dom/client'
import './index.css'

function App() {

  // THIS IS FOR REACT 18 ******* USE THIS FOR NOW ******
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   const formEl = event.currentTarget
  //   const formData = new FormData()
  //   const pass = formData.get('password')
  //   const email = formData.get('email')
  //   console.log('email:', email)
  //   console.log('password:', pass)
  //   formEl.reset()
  // }

  function signUp(formData: FormData) {
    const data = Object.fromEntries(formData) // This will return an object with all the values of the form

    // This will return an array of all the values of the checkboxes
    // The Object.fromEntries won't work with this, we need to use the getAll method
    const dieteryRestrictions = formData.getAll('dieteryRestrictions')

    const allData = {
      ...data,
      dieteryRestrictions
    }

    console.log(allData)
  }

  return (
  <section>
    <h1>Sign up form</h1>
    {/*Ignore this for now, this is because we are using React 19, this works ONLY on React 19+
    Action won't work on React 18 and we should use onSubmit instead
    */}
    <form action={signUp}> 
      <label htmlFor='email'>Email:</label>
      <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder='joe@schmoe.com'/>
      <br />

      <label htmlFor='password'>Password:</label>
      <input id="password" defaultValue="password123" type='password' name='password' />
      <br />

      {/* By default the button is of type submit   */}

      <label htmlFor='description'>Description:</label>
      <textarea id='description' defaultValue="This is a description" name='description'></textarea>
      <br />

      {/* By making the name the same for all we make it so the user can select only one option */}
      <fieldset>
      <legend>Employment status</legend>
      <label>
      <input type='radio' name='employment_status' defaultChecked value="unemployed"/>
      Unemployed
      </label>
      <br />
      <label>
      <input type='radio' name='employment_status' value="part-time"/>
      Part-time
      </label>
      <br />
      <label>
      <input type='radio' name='employment_status' value="full-time"/>
      Full-time
      </label>
      </fieldset>
      <br />

      <fieldset>
      <legend>Dietery Restrictions</legend>
      <label>
      <input type='checkbox' name='dieteryRestrictions' value="kosher"/>
      Kosher
      </label>
      <br />
      <label>
      <input type='checkbox' name='dieteryRestrictions' value="vegan"/>
      Vegan
      </label>
      <br />
      <label>
      <input type='checkbox' name='dieteryRestrictions' value="gluten-free"/>
      Gluten-free
      </label>
      </fieldset>
      <br />

      <label htmlFor='favColor'>What is your favorite color?</label>
        <select name="favoriteColor" id="favColor" defaultValue="" required>
          <option disabled value="">-- Choose a color --</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
      <br />

      <button >Submit</button>

    </form>
  </section>
  )
}

createRoot(document.getElementById('root')!).render(
  <>
  <App />
  </>
)