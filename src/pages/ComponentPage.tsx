import { routes } from '../constants/routes'
import { LinkProps } from '../models/route'

const ComponentPage = () => {
  console.log(routes
    .reduce((acc: LinkProps[], curr) => {
      acc.push(...curr.links)
      return acc;
    }, [])
  )
  return (
    <div className=''>
      All components available
      <ul className=''>
        {routes
          .reduce((acc: LinkProps[], curr) => {
            acc.push(...curr.links)
            return acc;
          }, [])
          .map(link => (
            <li>
              <a href={link.to}>{link.text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ComponentPage
