import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Copyright = () => {
  return (
    <p>
      Copyright ©
      <Link to='/pricing'>
        <button className='btn btn-primary'>
          Your Website
        </button>
      </Link>
      {new Date().getFullYear()}.
    </p>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Album = () => {
  let location = useLocation()
  React.useEffect(
    async () => {
      if (onNavigate) onNavigate(location.pathname)
    },
    [location]
  )

  const [data, dataSet] = useState()
  const fetchData = async () => {
    try {
      const response = await fetch('http://ec2-54-145-33-139.compute-1.amazonaws.com:8083/profile/me', {
        headers: {
          token: sessionStorage.getItem('refreshToken')
        }
      })
      const result = await response.json()
      dataSet(result)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    sessionStorage.setItem('refreshToken', params.token)
    fetchData()
  }, [])

  const getProfile = () => {
    fetchData()
  }

  return (
    <>
      <main>
        <button onClick={getProfile}>Request profile/me</button>
        <section className='container text-center py-5'>
          <h1>Home Page</h1>
          <h5>
            Something short and leading about the collection below—its
            contents, the creator, etc. Make it short and sweet, but not too
            short so folks don&apos;t simply skip over it entirely.
          </h5>
          <div className='d-flex justify-content-center'>
            <Link to='/pricing'>
              <button className='btn btn-outline-primary m-2'>
                Pricing
              </button>
            </Link>
            <Link to='/pricing'>
              <button className='btn btn-outline-warning m-2'>
                Pricing
              </button>
            </Link>
          </div>
        </section>


        <section className='container'>
          <div className='d-flex flex-wrap'>
            {cards.map((card) => (
              <div key={card} className='col-12 col-md-4 col-lg-3'>
                <article className='card shadow m-3'>
                  <img
                    className='card-img-top'
                    src='https://source.unsplash.com/random'
                    alt='Image title'
                  />
                  <div className='card-body'>
                    <h2 className='card-title'>Heading</h2>
                    <p className='card-text'>
                      This is a media card. You can use this section to describe
                      the content.
                    </p>
                    <div className='d-flex justify-content-center'>
                      <button className='btn btn-primary mx-2'>
                        View
                      </button>
                      <button className='btn btn-secondary mx-2'>
                        Edit
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      </main>


      <footer className='container text-center'>
        <h6>Footer</h6>
        <p>Something here to give the footer a purpose!</p>
        <Copyright />
      </footer>
    </>
  );
}

export default Album