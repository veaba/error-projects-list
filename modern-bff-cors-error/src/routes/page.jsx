import { configure } from '@modern-js/runtime/bff';

configure({
  allowedHeaders: ['*']
})

export default () => {
  return (

    <div className='ml-10'>
      hello
    </div>
  )
};