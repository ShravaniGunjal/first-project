import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>
        <img src="https://3extent.vercel.app/Assets/3extent.png" width="70spx" />
        <div className='headerRightSection'>
          <div>Partner With Us</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
      </div>
      <div className='backgroundImage'>
        <div className='imgText'>
          <div>Certified Second-Hand Mobiles</div>
          <div>Fully tested, graded, and ready for resale</div>
        </div>
      </div>
      <div className='info'>
        <div className='text'>At 3_EXTENT Pvt. Ltd., we specialize in the bulk supply of high-quality, pre-owned smartphones to resellers, retailers, and businesses across India. With a strong focus on quality, affordability, and trust, we help you grow your business by giving you access to the best devices at competitive wholesale prices.
        </div>
        <div className='para'>
          <div className='paraText'>We specialize in B2B wholesale trading of high-quality second-hand and refurbished mobile phones. Since our inception, we've been committed to delivering reliable, affordable, and premium-grade devices to retailers, resellers, and bulk buyers across India.
          </div>
          <img src="https://3extent.vercel.app/Assets/home2.webp" width="600px" className='img' />
        </div>
        <div className='para'>
          <img src="https://3extent.vercel.app/Assets/home3.webp" width="600px" className='img' />
          <div className='leftText'>With a deep understanding of the mobile market and strong supplier networks, we ensure that every device we sell is thoroughly tested, quality-checked, and competitively priced. Our goal is to help our clients maximize their margins while giving customers access to the latest smartphones at the best value.
          </div>
        </div>
        <div className='para'>
          <div className='paraText'>In just a short span, we've built a reputation for trust, transparency, and timely delivery, selling thousands of units and serving a growing network of satisfied partners. Whether you are a local shop owner or a large-scale distributor, we provide the products and service you can depend on.
          </div>
          <img src="https://3extent.vercel.app/Assets/home4.webp" width="600px" className='img' />
        </div>
        <div className='box'>
          <div className='partnerWithUs'>Partner With Us</div>
          <div className='partnerWithUsText'>Looking to stock up on reliable smartphones for resale? Partner with <strong>3_EXTENT Pvt. Ltd.</strong> and get access to a consistent, profitable, and growing supply chain.
          </div>
        </div>
        <div className='aboutUs'>About Us</div>
        <div className='founders'>
          <div className='founderImage'>
            <img src='https://3extent.vercel.app/Assets/CEO.jpeg' className='ceoImg' />
            <div className='founderImgText'>FOUNDER, Chief Executive Officer (CEO)</div>
            <div className='founderName'>Hrushikesh Tangadkar</div>
          </div>
          <div className='founderImage'>
            <img src='https://3extent.vercel.app/Assets/CTO.jpg' className='ceoImg' />
            <div className='founderImgText'>FOUNDER, Chief Technology Officer (CTO)</div>
            <div className='founderName'>Dipak Dhawade</div>
          </div>
          <div className='founderImage'>
            <img src='https://3extent.vercel.app/Assets/CGO.jpeg' className='ceoImg' />
            <div className='founderImgText'>FOUNDER, Chief Growth Officer (CGO)</div>
            <div className='founderName'>Vinod Gade</div>
          </div>
        </div>
        <div className='mission'>
          <div className='OurMission'>Our Mission</div>
          <div className='ourMissionText'>To become India’s most trusted wholesale partner for second-hand and refurbished mobiles by consistently delivering quality, value, and customer satisfaction.
          </div>
          <div className='OurMission'>Our Values</div>
          <div className='ourValues'><strong>Quality First - </strong>Every device is tested for performance and reliability.</div>
          <div className='ourValues'><strong>Integrity in Business - </strong>We believe in honest pricing and transparent deals.</div>
          <div className='ourValues'><strong>Partnership Focused - </strong>Your success is our success.</div>
        </div>
        <div className='contactUsBox'>
          <div className='contactUsText'>Contact Us</div>
          <div className='description'>We’re here to help you with bulk orders, partnership inquiries, or any questions about our products and services. Get in touch with us through the details below — our team will respond promptly.
          </div>
          <div className='contactUsCards'>
          <div className='office'>
            <div className='officeAddText'>Office Address</div>
            <div className='officeDesc'>
              3_EXTENT Pvt. Ltd.
              Shop No. 310, Deluxe Mall,
              Pimpri, Pune – 411017,
              Maharashtra, India
              </div>
          </div>
          <div className='contact'>
            <div>Contact Us</div>
            <div>+91 9665856368</div>
            <div>dipak.dhawade@3extent.com</div>
          </div>
          <div>
            <div>Business Hours</div>
            <div>Monday – Saturday: 10:00 AM – 7:00 PM

              Sunday: Closed</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
