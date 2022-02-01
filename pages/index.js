function Home() {
  return <div>
       <html>
        <head>
        <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <link rel="stylesheet" href="assets/css/styles.css"/>

            
            <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>

            <title>Portfolio website completo</title>  
        </head>
        <body>
            
            <header class="l-header">
                <nav class="nav bd-grid">
                    <div>
                        <a href="#" class="nav__logo">Alexandre</a>
                    </div>

                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                            <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                            <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                            <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
                            <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                        </ul>
                    </div>

                    <div class="nav__toggle" id="nav-toggle">
                        <i class='bx bx-menu'></i>
                    </div>
                </nav>
            </header>

            <main class="l-main">
               
                <section class="home bd-grid" id="home">
                    <div class="home__data">
                        <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Alexandre</span><br/> full Stark Develop</h1>

                        <a href="#" class="button">Contact</a>
                    </div>

                    <div class="home__social">
                        <a href="https://www.linkedin.com/in/alexandre-oliveira-26449122b/" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/alexandrealecode" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                    </div>

                    <div class="home__img">    
                        <img src="assets/img/perfil.png" alt=""/>
                    </div>
                </section>

               
                <section class="about section " id="about">
                    <h2 class="section-title">About</h2>

                    <div class="about__container bd-grid">
                        <div class="about__img">
                            <img src="assets/img/about.png" alt=""/>
                        </div>
                        
                        <div>
                            <h2 class="about__subtitle">I'am Alexandre</h2>
                            <p class="about__text">Sou Desenvolvedor a 2 anos,  em busca de um sonho e aperfeiçoamento profissional, buscando sempre a boa comunicação, o trabalho em equipe, a flexibilidade, resiliência e a lógica de programação .</p>           
                        </div>                                   
                    </div>
                </section>

             
                <section class="skills section" id="skills">
                    <h2 class="section-title">Skills</h2>

                    <div class="skills__container bd-grid">          
                        
                            <h2 class="skills__subtitle">Professional Skills</h2>
                            <p class="skills__text">Aqui então algumas de minha habilidades que venho evoluindo a cada dia, com muita dedicação e sempre pronto para aprender coisas novas.</p>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-html5 skills__icon'></i>
                                    <span class="skills__name">HTML5</span>
                                </div>
                                <div class="skills__bar skills__html">

                                </div>
                                <div>
                                    <span class="skills__percentage">95%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-css3 skills__icon'></i>
                                    <span class="skills__name">CSS3</span>
                                </div>
                                <div class="skills__bar skills__css">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">85%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-javascript skills__icon' ></i>
                                    <span class="skills__name">JAVASCRIPT</span>
                                </div>
                                <div class="skills__bar skills__js">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">65%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxs-paint skills__icon'></i>
                                    <span class="skills__name">UX/UI</span>
                                </div>
                                <div class="skills__bar skills__ux">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">85%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-javascript skills__icon'></i>
                                    <span class="skills__name">TYPESCRIPT</span>
                                </div>
                                <div class="skills__bar skills__ts">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">35%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-vuejs skills__icon' ></i>
                                    <span class="skills__name">VUE.js</span>
                                </div>
                                <div class="skills__bar skills__vue">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">35%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-nodejs skills__icon'></i>
                                    <span class="skills__name">NODE.js</span>
                                </div>
                                <div class="skills__bar skills__node">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">45%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-github skills__icon'></i>
                                    <span class="skills__name">GITHUB</span>
                                </div>
                                <div class="skills__bar skills__github">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">39%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-bootstrap skills__icon' ></i>
                                    <span class="skills__name">BOOTSTRAP</span>
                                </div>
                                <div class="skills__bar skills__bootstrap">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">40%</span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class='bx bxl-react skills__icon'></i>
                                    <span class="skills__name">REACT</span>
                                </div>
                                <div class="skills__bar skills__react">
                                    
                                </div>
                                <div>
                                    <span class="skills__percentage">25%</span>
                                </div>
                            </div>
                        <div>              
                            <img src="assets/img/work3.jpg" alt="" class="skills__img"/>
                        </div>
                     </div>
                </section>

              
                <section class="work section" id="work">
                    <h2 class="section-title">Work</h2>

                    <div class="work__container bd-grid">
                        <div class="work__img">
                            <img src="assets/img/work1.jpg" alt=""/>
                        </div>
                        <div class="work__img">
                            <img src="assets/img/work2.jpg" alt=""/>
                        </div>
                        <div class="work__img">
                            <img src="assets/img/work3.jpg" alt=""/>
                        </div>
                        <div class="work__img">
                            <img src="assets/img/work4.jpg" alt=""/>
                        </div>
                        <div class="work__img">
                            <img src="assets/img/work5.jpg" alt=""/>
                        </div>
                        <div class="work__img">
                            <img src="assets/img/work6.jpg" alt=""/>
                        </div>
                    </div>
                </section>

                
                <section class="contact section" id="contact">
                    <h2 class="section-title">Contact</h2>

                    <div class="contact__container bd-grid">
                        <form action="" class="contact__form">
                            <input type="text" placeholder="Name" class="contact__input"/>
                            <input type="mail" placeholder="Email" class="contact__input"/>
                            <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                            <input type="button" value="Enviar" class="contact__button button"/>
                        </form>
                    </div>
                </section>
            </main>

          
            <footer class="footer">
                <p class="footer__title">Alexandre</p>
                <div class="footer__social">
                    <a href="https://www.facebook.com/?stype=lo&jlou=AfcHO--1TFR7uDlE6gfWQ9Xj-tKkyNPgrcpQ2eEogZcofhKK3lYCv8YRD8nzRZioKSYUKqaiwcaHZ08HRQj8ptGQUBVSLgkgGEbZVmdnn4tHeg&smuh=36331&lh=Ac_RZhfDzVI9opFx" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                    <a href="https://www.instagram.com/alexandreoliveira5164/" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                    
                </div>
                <p>&#169; 2020 copyright all right reserved</p>
            </footer>


            
            <script src="https://unpkg.com/scrollreveal"></script>

            
            <script src="assets/js/main.js"></script>
        </body>
       
       
       </html>             
     </div>       
 
}

export default Home