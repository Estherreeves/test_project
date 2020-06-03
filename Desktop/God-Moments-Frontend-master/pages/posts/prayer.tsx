import Layout from "../../components/layout"
import Header from '../../components/header'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { Button } from "react-bootstrap"

export default function Pray() {
  return (
    <Layout>
    <Header/>

      <section>
          <img src="/images/notalone.jpg" width="500" height="300"/>
          <br/>
          <br/>
          <section className={utilStyles.h1}>
         <h1>How can we pray with you?</h1>
          <br/>
          <br/>
        </section>
        <section className={utilStyles.border}>
      
     <form>
     <section className={utilStyles.form}>
       
       <br/>
       <h4>Enter Prayer Request:</h4>
      <textarea rows="10" cols="50" name="message"></textarea><br/>
      <button name="submit" type="submit">Submit!</button>
     </section>
     </form>
     <br/>
     <br/>
      </section>
      </section>
      <br/>
      <br/>
          
    <Button href="/posts/about">
      <a>Who Are We</a>
    </Button>
    
    </Layout>
  )}
