import successImg from './assets';
const App = () =>{
  return <div className="panel">
    <div className="form-container">
      <div className="img"></div>
       

       <div className="form-content">
        <div className="content">
          <h1>Stay Updated</h1>
          <p>Join 60,000+ product managers receving monthly update on:</p>

          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>
         <form className="form">
          <label htmlFor="email">Email Address</label>
          <br />
          <input type="text" id="email" placeholder="email@company.com" />
          <br />
          <button type="submit">Subrcribe To Monthly Newsletter </button>
        </form>

       </div>
    </div>

    {/* Success and error */}
    <div className="message">
      <div className="success-msg">
        <img src="{successImg}" alt=""/>

        <h2>Thanks for subscribing !</h2>
        <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.
        </p>

        <button className='dismiss-btn'>Dismiss Message</button>
      </div>
    </div>
  </div>;
};
export default App;