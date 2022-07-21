import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <p className='text-center'>
      Copyright ©
      <Link to='/pricing' className='link-success px-2'>
        Your Website
      </Link>
      {new Date().getFullYear()}.
    </p>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const Pricing = () => {
  return (
    <>
      <section className='container py-5 text-center'>
        <h2>Pricing</h2>
        <h5 className='text-secondary'>
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization.
        </h5>
      </section>


      <div className='container'>
        <div className='d-flex flex-wrap'>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <div
              className={tier.title === "Enterprise" ? "col-12" : "col-md-6 col-12" }
              key={tier.title}
            >
              <div className='card rounded m-2'>
                <h3 className='card-header bg-warning'>{tier.title}</h3>
                <div className='card-body'>
                  <h4 className='card-title'>{tier.subheader}</h4>
                  {/* <i>{tier.title === 'Pro' ? <StarIcon /> : null}</i> */}
                  <div>
                    <div className='cardPricing'>
                      <h2>${tier.price}</h2>
                      <p className='text-secondary'>/mo</p>
                    </div>
                    <ul className='list-group list-group-flush'>
                      {tier.description.map((line) => (
                        <li className='list-group-item' key={line}>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='card-footer text-center'>
                  <Link to='/auth/signup' className='btn btn-success'>
                    {tier.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className='container'>
        <div className='p-2 d-flex flex-wrap'>
          {footers.map((footer) => (
            <div key={footer.title} className='col-6 col-md-4 col-lg-3'>
              <p>{footer.title}</p>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link to="" href='#' variant='subtitle1' color='textSecondary'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Copyright />

      </footer>
      {/* End footer */}
    </>
  );
}

export default Pricing