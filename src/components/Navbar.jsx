import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../assets/faundation.png';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState({ register: false, projects: false });
    const path = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        const isUser = localStorage.getItem("NGO");

        window.scrollTo({ top: 0, behavior: 'smooth' });

        const topBar = document.querySelector('.top-bar');
        const navbar = document.querySelector('.navbar');

        function toggleStickyNavbar() {
            if (window.scrollY > topBar.offsetHeight) {
                navbar.classList.add('nav-sticky');
                topBar.classList.add('hide-top-bar');
            } else {
                navbar.classList.remove('nav-sticky');
                topBar.classList.remove('hide-top-bar');
            }
        }

        window.addEventListener('scroll', toggleStickyNavbar);

        return () => {
            window.removeEventListener('scroll', toggleStickyNavbar);
        };
    }, []);

    return (
        <>
            {/* Top Bar Start */}
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:+91-9518790689"><p>+91-9823915612</p></a>
                                </div>
                                <div className="text">
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:yehovayirefoundation@gmail.com"><p>yyf.ngo@gmail.com</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social">
                                    <a href="https://www.facebook.com/profile.php?id=61562548876361&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/yehova_yire_foundation?utm_source=qr&igshid=Mmh1OW1janpibXhj"><i className="fab fa-instagram"></i></a>
                                    <a href="https://youtube.com/@yehovayirefoundation?si=eY0-nbiPZjQNLVNL"><i className="fab fa-youtube"></i></a>
                                    <a href="https://wa.me/message/SETYQJQ4UMKGC1"><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Bar End */}

            {/* Nav Bar Start */}
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={logo} alt="Logo" className="navbar-logo me-3" height={300} />
                        YYF
                    </Link>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className={`nav-item nav-link ${path === '/' ? "active" : ""}`}>Home</Link>
                            <Link to="/about" className={`nav-item nav-link ${path === '/about' ? "active" : ""}`}>About</Link>
                            <Link to="/event" className={`nav-item nav-link ${path === '/event' ? "active" : ""}`}>News&Events</Link>
                            <Link to="/achievements" className={`nav-item nav-link ${path === '/achievements' ? "active" : ""}`}>Achievements</Link>

                            <div className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(prevState => ({ ...prevState, register: true }))} onMouseLeave={() => setDropdownOpen(prevState => ({ ...prevState, register: false }))}>
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Register</Link>
                                <div className={dropdownOpen.register ? "dropdown-menu show" : "dropdown-menu"}>


                                <Link to="/contact" className="dropdown-item">Enquiry</Link>
                                <Link to="/volunteer" className="dropdown-item">Become A Volunteer</Link>
                                    <Link to="/member" className="dropdown-item">Become A Member</Link>
                                   
                                    <hr className='dropdown-divider' />
                                   
                                </div>
                            </div>

                            <div className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(prevState => ({ ...prevState, projects: true }))} onMouseLeave={() => setDropdownOpen(prevState => ({ ...prevState, projects: false }))}>
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
                                <div className={dropdownOpen.projects ? "dropdown-menu show" : "dropdown-menu"}>
                                    <Link to="/project1" className="dropdown-item">Go green project</Link>
                                    <hr className='dropdown-divider' />
                                    <Link to="/project2" className="dropdown-item"> EmpowerHer project</Link>
                                    <hr className='dropdown-divider' />
                                    <Link to="/project3" className="dropdown-item">HealthRise project</Link>
                                    <hr className='dropdown-divider' />
                                    <Link to="/project4" className="dropdown-item">EduElevate project</Link>
                                    <hr className='dropdown-divider' />
                                    <Link to="/project5" className="dropdown-item">Learn and earn</Link>
                                </div>
                            </div>
                           
                           <Link to="/donate" className={`nav-item done nav-link ${path === '/donate' ? "active" : ""}`}>Donate</Link>
                         
                        </div>
                    </div>
                </div>
            </div>
            {/* Nav Bar End */}
        </>
    );
}
