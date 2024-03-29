// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router

// const Navbar = () => {
//   return (
//     // <div className='container my-2'>
//     //   <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//     //     <p className='m-0'><Link to="/" className="text-dark text-decoration-none"><i className="fa-solid fa-user" style={{ color: '#7E22CE' }}></i></Link></p>
//     //     <p className='m-0'><Link to="/" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>About</Link></p>
//     //   </div>
//     //   <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//     //     <p className='m-0'><Link to="/resume" className="text-dark text-decoration-none"><i className="fa-solid fa-file" style={{ color: '#7E22CE' }}></i></Link></p>
//     //     <p className='m-0'><Link to="/resume" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>Resume</Link></p>
//     //   </div>
//     //   <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//     //     <p className='m-0'><Link to="/skills" className="text-dark text-decoration-none"><i class="fa-solid fa-book" style={{ color: '#7E22CE' }}></i></Link></p>
//     //     <p className='m-0'><Link to="/skills" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>Skills</Link></p>
//     //   </div>
//     //   <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//     //     <p className='m-0'><Link to="/portfolio" className="text-dark text-decoration-none"><i className="fa-solid fa-briefcase" style={{ color: '#7E22CE' }}></i></Link></p>
//     //     <p className='m-0'><Link to="/portfolio" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>Portfolio</Link></p>
//     //   </div>
//     // </div>

//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//       <div class="container-fluid">

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav flex-column me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//             <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//          <p className='m-0'><Link to="/" className="text-dark text-decoration-none"><i className="fa-solid fa-user" style={{ color: '#7E22CE' }}></i></Link></p>
//          <p className='m-0'><Link to="/" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>About</Link></p>
//      </div>
//             </li>
//             <li class="nav-item">
//             <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//          <p className='m-0'><Link to="/resume" className="text-dark text-decoration-none"><i className="fa-solid fa-file" style={{ color: '#7E22CE' }}></i></Link></p>
//          <p className='m-0'><Link to="/resume" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>Resume</Link></p>
//        </div>
//             </li>
//             <li class="nav-item">
//             <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//          <p className='m-0'><Link to="/skills" className="text-dark text-decoration-none"><i class="fa-solid fa-book" style={{ color: '#7E22CE' }}></i></Link></p>
//         <p className='m-0'><Link to="/skills" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>Skills</Link></p>
//       </div>
//             </li>
//             <li class="nav-item">
//               <div className='my-2 mr-2 d-flex flex-column justify-content-center align-items-center rounded' style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
//                 <p className='m-0'><Link to="/portfolio" className="text-dark text-decoration-none"><i className="fa-solid fa-briefcase" style={{ color: '#7E22CE' }}></i></Link></p>
//                 <p className='m-0'><Link to="/portfolio" className="text-dark text-decoration-none" style={{ color: '#7E22CE' }}>Portfolio</Link></p>
//               </div>
//             </li>


//           </ul>

//         </div>
//       </div>
//     </nav>

//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-lg-column">
            <NavItem to="/" icon="fa-solid fa-user" text="About" />
            <NavItem to="/resume" icon="fa-solid fa-file" text="Resume" />
            <NavItem to="/skills" icon="fa-solid fa-book" text="Skills" />
            <NavItem to="/portfolio" icon="fa-solid fa-briefcase" text="Portfolio" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, text }) => {
  return (
    <li className="nav-item">
      <div className="my-2 mr-2 nav-link text-center" style={{ width: '70px', height: '70px', backgroundColor: '#f0f0f0', marginLeft: '-18px' }}>
        <Link to={to} className="text-dark text-decoration-none">
        <Link to={to} className="text-dark text-decoration-none"><i className={icon} style={{ color: '#7E22CE' }}></i></Link>
        </Link>
        <p className="m-0"><Link to={to} className="text-dark text-decoration-none">{text}</Link></p>
      </div>
    </li>
  );
};

export default Navbar;
