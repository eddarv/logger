import Head from 'next/head'
import { useEffect, useState } from 'react'
import DynamicTr from '../components.js/DynamicTr'
import Spinner from '../components.js/Spinner'
import styles from '../styles/Home.module.css'

const initialData=[]

export default function Home() {

  let [data,setData]=useState(initialData)

  let customFetch = async () =>{
    try{
      let res= await fetch("https://logger-eddarv.vercel.app/api")
      // console.log(res)
      let data= await res.json()
      // console.log(data)

      setData([...data])
    }
    catch(e){
      setData([0])
      console.log(e)
    }
  }

  useEffect(()=>{

    customFetch()

  },[])

  useEffect(()=>{

    const intervalId= setInterval(()=>{
      customFetch()
    },5000)

    return () => clearInterval(intervalId);

  },[data])

  


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.th}>
                <th>Main App Logs</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.th2}>
                <td className={styles.td}>
                  Timestamp
                </td>
                <td className={styles.td}>
                  Source
                </td>
                <td className={styles.td}>
                  ID
                </td>
                <td className={styles.td}>
                  Message
                </td>
              </tr>

              {(
                data.length>0
                ?
                  data[0]===0
                  ?
                    <tr className={styles.tr}>
                      <td className={styles.td_load}>Error loading data...</td>
                    </tr>
                  :
                    data[0]===1
                    ?
                      <tr className={styles.tr}>
                        <td className={styles.td_load}>No logs were found</td>
                      </tr>
                    :
                      <DynamicTr data={data}/>
                  
                :
                <tr className={styles.tr}>
                  <td className={styles.td_load}>
                    <Spinner/>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        
      </main>

    
    </>
  )
}


