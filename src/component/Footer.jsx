import logo from '../assets/log.svg'
import "../App.css"
const Footer = () => {
  return (
    <footer className='footer p-10 bg-red-200/30 text-base '>
        <aside>
            <img src={logo} alt="" />
        </aside>
        <nav className="">
            <header className='footer-title text-[#f54748] text-xl'>Services</header>
            <a href="" className=' link link-hover'>Branding</a>
            <a href="" className=' link link-hover'>Design</a>
            <a href="" className=' link link-hover'>Marketing</a>
            <a href="" className=' link link-hover'>Advertisement</a>
        </nav>
        <nav className="">
            <header className='footer-title text-[#f54748] text-xl'>Company</header>
            <a href="" className=' link link-hover'>About Us</a>
            <a href="" className=' link link-hover'>Contact</a>
            <a href="" className=' link link-hover'>Jobs</a>
            <a href="" className=' link link-hover'>Press Kit</a>
        </nav>
        <nav className="">
            <header className='footer-title text-[#f54748] text-xl'>Terms Of uses</header>
            <a href="" className=' link link-hover'>Privacy Plicy</a>
            <a href="" className=' link link-hover'>Cookies Policy</a>
            <a href="" className=' link link-hover'>Marketing</a>

        </nav>
   
    </footer>
  )
}

export default Footer