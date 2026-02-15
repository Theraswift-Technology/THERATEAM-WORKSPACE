import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) &&
        !event.target.closest('.hamburger-menu')) {
        setIsNavActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main>
      <div className="container">
        {/* Header */}
        <header>
          <div className="hamburger-menu" id="hamburgerMenu" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo-section">
            <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/10b80bf6fd196a01a68987e5e2caf2587599f8b0?placeholderIfAbsent=true"
              alt="THERASWIFT Logo" />
            <h1>THERASWIFT</h1>
          </div>
          <Link to="/login" className="login-btn mobile-login-btn">Log In</Link>
          <nav className={isNavActive ? 'active' : ''} ref={navRef}>
            <a href="#about" onClick={closeNav}>About Us</a>
            <a href="#learn" onClick={closeNav}>Learn</a>
            <a href="#questions" onClick={closeNav}>Questions</a>
            <Link to="/login" className="login-btn desktop-login-btn" onClick={closeNav}>Log In</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="mobile-hero-image">
            <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/2fd4a659218f52d13b8e3a4085748284a6b96eb1?placeholderIfAbsent=true"
              alt="Couple holding hands" />
          </div>
          <div className="hero-left">
            <h2>Get Erectile dysfunction<br />Treatment fast</h2>
            <div className="hero-buttons">
              <button className="btn-primary">Start Now</button>
              <button className="btn-secondary">See If This Is Right For Me</button>
            </div>
          </div>
          <div className="hero-right">
            <div>
              <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/2fd4a659218f52d13b8e3a4085748284a6b96eb1?placeholderIfAbsent=true"
                alt="Treatment product 1" />
              <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/977094f1e97ee46e3a021f5f782a433472a52dbe?placeholderIfAbsent=true"
                alt="Treatment product 2" />
            </div>
            <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/e8f2468756de428eb4055d168670f395885563e0?placeholderIfAbsent=true"
              alt="Treatment product 3" />
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="features-row">
            <div className="feature-item">
              <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/cc187d29f385d59c90eae6e3e45916c9a1cc439a?placeholderIfAbsent=true"
                alt="Online consultation icon" />
              <p>100% online consultation and ongoing support</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/de67a5f3ca350ccb392b209a2db133e5b3b32d7b?placeholderIfAbsent=true"
                alt="Delivery icon" />
              <p>Nafdac-approved treatment delivered to your door</p>
            </div>
          </div>
          <div className="feature-center">
            <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/9fc10b85d096cb90ecb56edec325e1c572d6550c?placeholderIfAbsent=true"
              alt="Personalized guidance icon" />
            <p>Personalized guidance from a licensed provider</p>
          </div>
        </section>

        {/* Product Cards */}
        <section className="product-cards">
          <article className="product-card">
            <div className="product-card-header">
              Get hard faster and last longer with Blaze
            </div>
            <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/28c1944a0cea450e729863f83515f83879d5f8d7?placeholderIfAbsent=true"
              alt="Blaze treatment product" />
            <button className="btn-card">Start Now</button>
          </article>
          <article className="product-card">
            <div className="product-card-header">
              Stay sex ready with daily tadalafil
            </div>
            <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/28c1944a0cea450e729863f83515f83879d5f8d7?placeholderIfAbsent=true"
              alt="Daily tadalafil treatment product" />
            <button className="btn-card">Start Now</button>
          </article>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Better sex with fast acting, long lasting Tadalafill</h2>
          <button>Get Started</button>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="section-title">
            <div className="line-divider"></div>
            <h2>How It Works</h2>
            <div className="line-divider"></div>
          </div>
          <div className="steps-container">
            <article className="step">
              <div className="step-header">
                <div className="step-number">1</div>
                <h3>Take a short quiz</h3>
              </div>
              <div className="step-description">
                <p>Answer a few questions about yourself</p>
              </div>
            </article>
            <article className="step">
              <div className="step-header">
                <div className="step-number">2</div>
                <h3>Connect with a Doctor + Get a Plan</h3>
              </div>
              <p>Match with a expert physician to get a personalized plan just for you</p>
            </article>
            <article className="step">
              <div className="step-header">
                <div className="step-number">3</div>
                <h3>Care Delivered to Your Door</h3>
              </div>
              <div className="step-description">
                <p>Get your prescriptions sent right to your home</p>
              </div>
            </article>
          </div>
          <p className="how-info">Get unlimited access to your doctor, support groups, and more</p>
          <button className="btn-start">Start Now</button>
        </section>

        {/* Clinical Lead */}
        <section className="clinical-lead">
          <div className="section-title">
            <div className="line-divider"></div>
            <h2>Meet Our Clinical Lead</h2>
            <div className="line-divider"></div>
          </div>
          <div className="clinical-lead-grid">
            <div className="clinical-left">
              <div className="clinical-images">
                <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/6d193ae08755acd4e68fa03fcf5b835d292af230?placeholderIfAbsent=true"
                  alt="Dr. Adekunle Brown" />
                <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/b912e7641f90cbf8f5040ee175549ec7e32e2e6c?placeholderIfAbsent=true"
                  alt="Medical certification" />
                <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/b912e7641f90cbf8f5040ee175549ec7e32e2e6c?placeholderIfAbsent=true"
                  alt="Medical certification" />
              </div>
              <div className="clinical-left-footer" style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
                <div className="line-divider"
                  style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}></div>
              </div>
            </div>
            <div className="clinical-right">
              <div className="clinical-info">
                <h3>Dr. Adekunle Brown</h3>
                <p>Theraswift Sexual Health Clinic Lead</p>
                <p className="clinical-credentials">MBBS</p>
                <p className="clinical-description">Instead of addressing ED with a one size-fits all approach,
                  our individualized care model considers your unique health history and goals to craft a
                  treatment plan that truly fits into your life and routine.</p>
              </div>
              <div className="faq-check-header"
                style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0' }}>FAQ</h2>
                <div className="line-divider"
                  style={{ flex: 1, height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="faq-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <article className="faq-content">
            <h3>What causes Erectile Dysfunction?</h3>
            <p>Erectile dysfunction (ED) occurs when a man has trouble getting or maintaining an erection firm
              enough for sexual activity. This typically results from insufficient blood flow to the penis.
              However, there are many possible factors that can cause ED, including: physical factors such as
              cardiovascular conditions; diabetes and high blood pressure; psychological factors such as
              stress, anxiety or depression; lifestyle choices such as smoking, excessive alcohol consumption
              and drug use; hormonal imbalances; neurological conditions; age; and medications. It is
              important that you share all of these details with your medical provider before requesting
              treatment.</p>

            <h3>How does sildenafil citrate work?</h3>
            <p>Sildenafil Citrate (generic Viagra®)* works by blocking PDE5 (phosphodiesterase type 5), an
              enzyme in the body that breaks down the chemicals responsible for blood flow (and therefore
              erections). The result is increased blood flow to the penis to help a man get and keep an
              erection.</p>

            <h3>How does tadalafil work?</h3>
            <p>Tadalafil (generic Cialis®)** works by blocking PDE5 (phosphodiesterase type 5), an enzyme in the
              body that breaks down chemicals responsible for blood flow (and therefore erections). The result
              is increased blood flow to the penis to help a man get and keep an erection.</p>
          </article>
        </section>

        {/* Footer */}
        <button className="faq-button">Check out our FAQ's</button>
        <footer>
          <div className="footer-section footer-contact">
            <h3>Need Help?</h3>
            <p>📧 help@theraswift.co</p>
            <p>📞 +2349065783958</p>
          </div>
          <div className="footer-section footer-links">
            <a href="#about">About Us</a>
            <a href="#learn">Learn</a>
            <a href="#questions">Questions</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-section footer-socials">
            <h3>SOCIALS</h3>
            <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/94c0be180846570471dfed4e8e747e6e0e0f0524?placeholderIfAbsent=true"
              alt="Social media links" />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingPage;
