import React, {Fragment, useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
  const {loading, users} = useContext(GithubContext)
  return (
    <Fragment>
      <Search />

      <div className="row">

        {loading
        ? <div className='text-center'>Загрузка...</div>
        : users.map(user => (
          <div className="col-sm-4 mb-4" key={user.id}>
            <Card user={user}/>
          </div>
        ))}

        

      </div>

    </Fragment>
  )
}
