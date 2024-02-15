class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="navbar">
        <img src="/images/logomaiztransparente.ico" alt="Logo de la empresa" class="logo" >
        <ul class="nav-links">
            <li><a href="index.html">Inicio de mi Cuaderno de Entorno Cliente</a></li>
        </ul>
        <img src="/images/burger.png" alt="menu-hamburguesa" class="hamburger">
        <a href="/login.html"><img src="/images/loginbien-Photoroom.png-Photoroom.png" alt="carrito" class="login"></a>
    </header>
    <style>
    body {
      margin: 0;
      padding: 0;
  }
  :root {
      --main-background-color: #2880ec;
      --text-color: white;
      --link-color: rgb(0, 187, 255);
      --link-hover-color: #555;
      --navbar-color: #333;
  }
      
  .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      background-image: url(/images/headerWindows.jpg);
      color: var(--text-color);
      height: 5vh;
      width: auto;
      position: sticky;
      top: 0;
      z-index: 1000; /* Establece un valor alto para asegurarte de que esté por encima */
  
  }
  
  .logo {
      max-height: 100px;
      max-width: auto;
      height: 10vh;
      border-radius:50% ;
  }
  
  ul {
      list-style: none;
      align-items: center;
  }
  
  
  .nav-links {
      display: flex;
      gap: 3rem;
      font-size: 20px;
  }
  
  .nav-links a {
      color: salmon;
      font-weight: bolder;
      text-shadow: 
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
      font-size: 1.5rem;
      text-decoration: none;
      transition: text-decoration 0.3s ease;
  }
  
  .nav-links a:focus {
      background-color: #555;
      color: #fff;
  }
  
  .nav-links a:hover {
      color: rgb(0, 187, 255);
      text-decoration: underline;
  
  }
  
  .hamburger{
      display: none;
      cursor: pointer;
  }
  
  
  .content {
      padding: 20px;
  }
  
  .login {
      height: 5vh;
      
  }
  
  @media (width <= 768px) {
      
  
      .nav-links {
          display: none;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
          position: absolute;
          left: 0;
          background-color: #333;
          width: 100%;
          padding: 20px 0;
      }
  
      
      .nav-links.active {
          
          display: flex;
          margin-top: 18rem;
          gap: 20px;
          justify-content: center;
  
      }
      .hamburger {
          display: block;
          justify-self: end;
          width:  40px;
          height: 40px;
      }
  }
  </style>`;


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

customElements.define('header-component', HeaderComponent);