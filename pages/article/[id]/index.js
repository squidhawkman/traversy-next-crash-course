//this is the page that will represent our articles

import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { server } from '../../../config'
import Meta from '../../../components/Meta'


//we need to pass our article variable defined in the getServerSideProps function
const article = ({article}) => {
    //keeping this here so you know you can do it 
    //this will contain any parameters that are in the route
    //const router = useRouter();
    //here we destructure a parameter (id)
    //const {id} = router.query;

  return (
    <>
    {/* This is article {id} */}
    <Meta title={article.title} description={article.excerpt} />
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href='/'>Go back</Link>
    </>
  )
}

//you can pass context to this function which will allow you to get the id
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);

    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`);
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    //this will include every id of every post that is returned in the fetched json object, don't know exactly how this works (doesn't map return an array?)
    //so it would look like {params: id: [1,2,3,4...]} I guess that works
    const paths = ids.map(id => ({params: {id: id.toString()}}));

    return {
        //paths: {params: {id : '1', id: '2'}}
        paths,
        //if we try to go to 'something that doesn't exist in the data' a 404 page will be returned
        fallback: false
    }
}

export default article