import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommattic</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/assets/favicon.png' />
      </Head>

       {/* Masthead*/}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/"><img  src="/assets/img/ecommattic.png" alt="Ecommattic"></img></a>
          </div>
          {/* Navigation*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="/">Home</a></li>
              <li><a className="nav-link scrollto" href="/#about">About</a></li>
              <li><a className="nav-link scrollto" href="/#services">Services</a></li>
              <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    
  
<main id="main">
<section className="breadcrumbs mt-100">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Privacy Policy</h2>
    </div>

  </div>
</section>

<section className="inner-page">
  <div className="container">
    <div>
      Any activity that infringes terms of this Agreement violates copyright law and will be prosecuted according to the current law. We reserve the right to revoke the license of any user who is holding an invalid license.
    </div>
    <p>
    By purchasing any product (Software) from imercium you agree to the following terms (Agreement):
    </p>
    <div>
      <ul>
        <li>
        We are the copyright holder of the Software. The Software or a portion of it is a copyrightable matter and is liable to protection by the law. You may not use any part of the code in whole or part in any other software or product or website.
        </li>
        <li>
        You may not give, sell, distribute, sub-license, rent, lease or lend any portion of the Software or Documentation to anyone.
        </li>
        <li>
        We are the copyright holder of the Software. The Software or a portion of it is a copyrightable matter and is liable to protection by the law. You may not use any part of the code in whole or part in any other software or product or website.
        </li>
        <li>
        You may not give, sell, distribute, sub-license, rent, lease or lend any portion of the Software or Documentation to anyone.
        </li>
        <li>
        We are the copyright holder of the Software. The Software or a portion of it is a copyrightable matter and is liable to protection by the law. You may not use any part of the code in whole or part in any other software or product or website.
        </li>
        <li>
        You may not give, sell, distribute, sub-license, rent, lease or lend any portion of the Software or Documentation to anyone.
        </li>
        <li>
        We are the copyright holder of the Software. The Software or a portion of it is a copyrightable matter and is liable to protection by the law. You may not use any part of the code in whole or part in any other software or product or website.
        </li>
        <li>
        You may not give, sell, distribute, sub-license, rent, lease or lend any portion of the Software or Documentation to anyone.
        </li>
        <li>
        We are the copyright holder of the Software. The Software or a portion of it is a copyrightable matter and is liable to protection by the law. You may not use any part of the code in whole or part in any other software or product or website.
        </li>
        <li>
        You may not give, sell, distribute, sub-license, rent, lease or lend any portion of the Software or Documentation to anyone.
        </li>
      </ul>
    </div>
    <div>
      <h3>Data Retention</h3>
      <p>Any personal data we might receive for the purpose of providing the Service will be deleted 2 days after the merchant stops using the Service and uninstalls the app, unless we have to keep it longer for business purposes. The customer's data is automatically deleted if we receive an automated request from the Platform to delete data about a specific customer. We also automatically delete subscriptions and all data associated with them if we receive a request from the Platform to delete data related to specific orders. The customer's data related to cancelled subscriptions is automatically deleted 2 days after cancellation, if the merchant turns on the option to automatically delete cancelled subscriptions.</p>
    </div>

  <div>
    <h3>Email Address</h3>
    <p>E-mail address must be valid because it will be used for communication purposes. It is strongly recommended to use an e-mail address associated with your company. Free emails can be used for registration and checkout process, but orders placed using free email service addresses will be checked more thoroughly and may take longer for activation as a result.</p>
  </div>
  <div>
    <h3>Download</h3>
    <p>All products are available for download once the payment has been accepted and verified. If you can’t download a product please check the status of your payment via payment processor interface or contact us in case of any problem.</p>
  </div>
  <div>
    <h3>We reserve the Right</h3>
    <p>We reserve the right to refuse support and or customization for certain types of sites which include the following; Adult Toys, Sex related, Alcohol, and any illegal drug related.</p>
  </div>
  <div>
    <h3>Changes to this privacy policy</h3>
    <p>We may update this document from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this document periodically for any changes. Changes to this document are effective when they are posted on this page.</p>
  </div>
  <div>
    <h3>Questions and contact information</h3>
    <p>If you would like to request, access or delete any personal information we have about you or want more information about this privacy policy contact our Data Protection Officer at ecommattic@gmail.com.</p>
  </div>
  </div>

</section>

</main>

      {/* Footer Section*/}
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="copyright">
                &copy; Copyright <strong>Ecommattic</strong>. All Rights Reserved
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="#">Privacy Policy</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  
  </>
  )
}
