import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'
import axios from 'axios'
import NewItem from '../components/NewItem'
import Searcher from '../components/Searcher'
import { Article, ReqResListado } from '../interfaces'

export default function Home() {

  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>([])
  const [searchValue, setSearchValue] = useState('')    
  useEffect(() => {
    getArticles()
  }, [searchValue])

  const getArticles = async () => {
    if(searchValue != ''){
      await axios.get<ReqResListado>('https://newsapi.org/v2/everything',{
        params: {
          q: searchValue,
          from: '2022-10-07',
          sortBy: 'publishedAt',
          apiKey: 'b02279673af6406187f80662bdc50a78'
        }
      })
      .then(response => {
        setArticles(response.data.articles)
      })
    }
  }

  return (
    <PageLayout title='Home'>
      <div className='max-w-2xl mx-auto mb-20'>
        <Searcher value={searchValue} setValue={setSearchValue}/>
      </div>
      
      <div className='grid grid-cols-3 gap-4'>
        {articles.length > 0 && articles.map((article, index) => (
          <NewItem article={article} key={index}/>
        ))}
      </div>

    </PageLayout>
  )
}

// export async function getServerSideProps() {
//   const response = await axios.get<ReqResListado>('https://newsapi.org/v2/everything?q=tesla&from=2022-10-07&sortBy=publishedAt&apiKey=b02279673af6406187f80662bdc50a78')
//   const articles = response.data.articles
//   return {
//     props: {
//       articles
//     }
//   }
// }

// export async function getStaticProps() {
//   const response = await axios.get<ReqResListado>('https://newsapi.org/v2/everything?q=tesla&from=2022-10-07&sortBy=publishedAt&apiKey=b02279673af6406187f80662bdc50a78')
//   const articles = response.data.articles
//   return {
//     props: {
//       articles
//     }
//   }
// }

