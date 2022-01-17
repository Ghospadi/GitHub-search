import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Repos } from "../components/Repos";
import { GithubContext } from "../context/github/githubContext";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlname = match.params.name;

  useEffect(() => {
    getUser(urlname);
    getRepos(urlname);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img 
              src={avatar_url} 
              alt={name} 
              style={{width: '150px'}}
              />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-dark" a>
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Имя пользователя: </strong> {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Компания: </strong> {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Вебсайт: </strong> {blog}
                  </li>
                )}
              </ul>
                  <span className="badge badge-primary" style={{color: 'black'}}>Подписчики:  {followers}</span>
                  <span className="badge badge-secondary" style={{color: 'black'}}>Подписан:  {following}</span>
                  <span className="badge badge-success" style={{color: 'black'}}>Репозитория:  {public_repos}</span>
                  <span className="badge badge-dark" style={{color: 'black'}}>Gists:  {public_gists}</span>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
};
