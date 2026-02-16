import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(-1);
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
        <section className="faq" id="faq">
          <article className="faq-content">
            {[
              {
                question: "What causes Erectile Dysfunction?",
                answer: "Erectile dysfunction (ED) occurs when a man has trouble getting or maintaining an erection firm enough for sexual activity. This typically results from insufficient blood flow to the penis. However, there are many possible factors that can cause ED, including: physical factors such as cardiovascular conditions; diabetes and high blood pressure; psychological factors such as stress, anxiety or depression; lifestyle choices such as smoking, excessive alcohol consumption and drug use; hormonal imbalances; neurological conditions; age; and medications. It is important that you share all of these details with your medical provider before requesting treatment."
              },
              {
                question: "How does sildenafil citrate work?",
                answer: "Sildenafil Citrate (generic Viagra®)* works by blocking PDE5 (phosphodiesterase type 5), an enzyme in the body that breaks down the chemicals responsible for blood flow (and therefore erections). The result is increased blood flow to the penis to help a man get and keep an erection."
              },
              {
                question: "How does tadalafil work?",
                answer: "Tadalafil (generic Cialis®)** works by blocking PDE5 (phosphodiesterase type 5), an enzyme in the body that breaks down chemicals responsible for blood flow (and therefore erections). The result is increased blood flow to the penis to help a man get and keep an erection."
              }
            ].map((faq, index) => (
              <div key={index} className={`faq-item ${isFaqOpen === index ? 'open' : ''}`}>
                <div className="faq-header" onClick={() => setIsFaqOpen(isFaqOpen === index ? -1 : index)}>
                  <div className="faq-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>{faq.question}</h3>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
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
            <div className="social-links">
              <a href="#" className="social-btn facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              <a href="#" className="social-btn instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1,1 0 0,1 19,6A1,1 0 0,1 18,7A1,1 0 0,1 17,6A1,1 0 0,1 18,5Z" />
                </svg>
              </a>
              <a href="#" className="social-btn x-twitter" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="social-btn tiktok" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingPage;
