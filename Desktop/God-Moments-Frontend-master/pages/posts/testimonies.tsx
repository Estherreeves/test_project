import Layout from "../../components/layout"
import Header from "../../components/header"
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { Button } from "react-bootstrap"

export default function FirstPost() {
  return (
    <Layout>
      <Header/>

      
    <section className={utilStyles.h1}>
      <h1>Testimony Stream!</h1>
      </section>
      <br/>
      <h2>Add a Testimony or an Encounter Post</h2>
      <br/>
      <br/>
      <section className={utilStyles.border}>
      
     <form>
       <br/>
     <section className={utilStyles.form}>
       <h4>Testimony Post Title:</h4>
       <textarea rows="1" cols="40" name="Title"></textarea><br/>
       <button name="submit" type="submit">Submit!</button><br/>
       <br/>
       <br/>
       <h4>Enter Testimony Blog:</h4>
      <textarea rows="10" cols="50" name="message"></textarea><br/>
      <button name="submit" type="submit">Submit!</button>
     </section>
     <br/>
     <br/>
     </form>
      </section>
     <br />
     <br/>
    
      <Button href="/posts/blog">
      <a>→ Check out our blogs! </a>
    </Button>
     

    </Layout>
  );
}
// incorporate live stream/ Blog posting template on this page