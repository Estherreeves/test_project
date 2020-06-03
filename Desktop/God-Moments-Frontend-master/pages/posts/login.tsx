import Layout from '../../components/layout'
import Header from '../../components/header'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { Button } from 'react-bootstrap'


export default function Login() {
  return (
    <Layout>    
    <Header/>
    
      <section className={utilStyles.h1}>
      <h1>Log In:</h1>
      </section>
      <br/>
      <br/>
      <section className={utilStyles.border}>
      <form>
      <br/>
      <section className={utilStyles.form}>
      <label id="userName">User Name:</label><br/>
      <input type="text" id="userName" placeholder="Username"/><br/>
      <label id="passWord">Password:</label><br/>
      <input type="text" id="passWord" placeholder="Password"/><br/>
      <br/>
      <button name="submit" type="submit">Submit!</button>
      </section>
      <br/>
      </form>
      </section>
      <br/>
      <br/>

          <div>
         
          <Button href="/posts/signup">
          <a>No account? Register here</a>
          </Button>
        </div>

     </Layout>
  )
  }