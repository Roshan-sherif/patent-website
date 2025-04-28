import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function AboutPage() {
  return (
    <div>
    <Navbar/>

<div style={{ padding: '50px', textAlign: 'center' }}>
  <h1>About Us</h1>
  <p style={{ maxWidth: '600px', margin: '20px auto' }}>
    Welcome to our website! We are passionate about delivering the best services to our clients.
    Our team is dedicated to creating high-quality products with a focus on user experience, innovation, and excellence.
  </p>

  <Link to="/" style={{ marginTop: '20px', display: 'inline-block', textDecoration: 'none', color: 'blue' }}>
    ← Back to Home
  </Link>
</div>

    </div>
  );
}

export default AboutPage;
