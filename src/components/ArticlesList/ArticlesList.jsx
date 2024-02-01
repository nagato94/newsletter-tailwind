import data from '../../../articles.json'

const ArticlesList = () => {

  return <div className='mt-5 grid gap-5 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 m-auto max-w-2xl'>
    {         // eslint-disable-next-line react/prop-types
            data.map((props, index) => <p key={index}>{props.title}</p>)
        }
  </div>
}
export default ArticlesList
