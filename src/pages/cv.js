// !
// 
// =========================================================
// * Argon Design System React - v1.1.0
// =========================================================
// 
// * Product Page: https://www.creative-tim.com/product/argon-design-system-react
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
// 
// * Coded by Creative Tim
// 
// =========================================================
// 
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// 
// 
// import React from "react";
// // nodejs library that concatenates classes
// //import classnames from "classnames";
// 
// // reactstrap components
// import {
//   Badge,
//   Button,
//   Card,
//   CardBody,
//   CardImg,
//   FormGroup,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// 
// // core components
// //import DemoNavbar from "components/Navbars/DemoNavbar.js";
// //import SimpleFooter from "components/Footers/SimpleFooter.js";
// 
// // index page sections
// //import Download from "../IndexSections/Download.js";
// 
// class cv extends React.Component {
//   state = {};
//   componentDidMount() {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     this.refs.main.scrollTop = 0;
//   }
//   render() {
//     return (
//       <>
//         {/* <DemoNavbar /> */}
//         <main ref="main">
//           <div className="position-relative">
//             {/* shape Hero */}
//             <section className="section section-lg section-shaped pb-250">
//               <div className="shape shape-style-1 shape-light">
//                 <span />
//                 <span />
//                 <span />
//                 <span />
//                 <span />
//                 <span />
//               </div>
//               <Container className="pt-4 d-flex">
//                 <div className="col px-0">
//                   <Row>
//                     <Col lg="6">
//                       <h1 className="display-3">
//                         <span>...Oh hello!</span>
//                         I'm Elena Calvillo
//                       </h1>
//                       <p className="lead">
//                         I'm a passionate Front-end Developer. Resolving problems
//                         with design and code is what I love to do.
//                       </p>
//                       <div className="btn-wrapper">
//                         <Button
//                           className="btn-icon bg-gradient-info"
//                           color="info"
//                           href="/"
//                         >
//                           <span className="btn-inner--icon align-middle">
//                             <i className="ni ni-single-copy-04" />
//                           </span>
//                           <span className="btn-inner--text">About me</span>
//                         </Button>
//                         <Button
//                           className="btn-icon bg-gradient-primary"
//                           color="primary"
//                           href="/"
//                         >
//                           <span className="btn-inner--icon align-middle">
//                             <i className="ni ni-chat-round" />
//                           </span>
//                           <span className="btn-inner--text">Get in touch</span>
//                         </Button>
//                       </div>
//                     </Col>
//                     <Col lg="6">
//                       <div className="text-center text-lg-right pt-5 pt-lg-0 px-lg-2">
//                         <img
//                           alt="Elena Calvillo"
//                           className="rounded img-fluid shadow shadow-lg--hover"
//                           src={require("assets/img/theme/me.png")}
//                         />
//                         {/* 
//                         <img
//                           alt="..."
//                           className="img-center img-fluid w-75"
//                           src={require("assets/img/theme/silhouette.png")}
//                         />
//                         */}
//                       </div>
//                     </Col>
//                   </Row>
//                 </div>
//               </Container>
//               {/* SVG separator */}
//             </section>
//             {/* 1st Hero Variation */}
//           </div>
// 
//           {/* Banner */}
//           <section className="section mt--150">
//             <Container>
//               <Row className="justify-content-center">
//                 <Col lg="12">
//                   <Card className="shadow border-0">
//                     <CardBody className="py-5 card-blockquote">
//                       <div className="d-flex px-3">
//                         <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
//                           <i className="fa fa-quote-left" />
//                         </div>
//                         <div className="pl-4">
//                           <h5 className="text-primary">— Jeff Patton</h5>
//                           <p>
//                             At the end of the day, your job isn’t to get the
//                             requirements right — your job is to change the
//                             world.
//                           </p>
//                         </div>
//                       </div>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
// 
//           {/* Case Studies */}
//           <section className="section section-lg mt--100">
//             <Container>
//               <Row className="justify-content-center">
//                 <Col lg="12">
//                   <div className="text-center">
//                     <h3 className="display-3">Case Studies</h3>
//                     <p className="lead text-muted">
//                       According to the National Oceanic and Atmospheric
//                       Administration, Ted, Scambos, NSIDClead scentist, puts the
//                       potentially record maximum.
//                     </p>
//                   </div>
//                   <Row className="row-grid mt-5">
//                     <Col lg="4">
//                       <Card className="card-lift--hover shadow border-0">
//                         <CardBody className="py-5">
//                           <div className="icon icon-shape icon-shape-info rounded bg-gradient-info text-white mb-4">
//                             <i className="ni ni-archive-2" />
//                           </div>
//                           <h6 className="font-weight-bold">Case Study 1</h6>
//                           <p className="description mt-3">
//                             Argon is a great free UI package based on Bootstrap
//                             4 that includes the most important components and
//                             features.
//                           </p>
//                           <div>
//                             <Badge color="secondary" pill className="mr-1">
//                               Process
//                             </Badge>
//                             <Badge color="secondary" pill className="mr-1">
//                               Design
//                             </Badge>
//                             <Badge color="secondary" pill className="mr-1">
//                               Develop
//                             </Badge>
//                             <Badge color="secondary" pill className="mr-1">
//                               UX
//                             </Badge>
//                           </div>
//                           <Button
//                             className="btn-icon bg-gradient-primary mt-4"
//                             color="primary"
//                             href="/"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             <span className="btn-inner--text">Learn more</span>
//                             <span className="btn-inner--icon align-middle">
//                               <i className="ni ni-bold-right" />
//                             </span>
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                     <Col lg="4">
//                       <Card className="card-lift--hover shadow border-0">
//                         <CardBody className="py-5">
//                           <div className="icon icon-shape icon-shape-info rounded mb-4">
//                             <i className="ni ni-archive-2" />
//                           </div>
//                           <h6 className="font-weight-bold">Case Study 1</h6>
//                           <p className="description mt-3">
//                             Argon is a great free UI package based on Bootstrap
//                             4 that includes the most important components and
//                             features.
//                           </p>
//                           <div>
//                             <Badge color="info" pill className="mr-1">
//                               design
//                             </Badge>
//                             <Badge color="warning" pill className="mr-1">
//                               system
//                             </Badge>
//                             <Badge color="default" pill className="mr-1">
//                               creative
//                             </Badge>
//                           </div>
//                           <Button
//                             className="btn-icon btn-gradient-primary mt-4"
//                             color="primary"
//                             href="/"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             <span className="btn-inner--text">Learn more</span>
//                             <span className="btn-inner--icon align-middle">
//                               <i className="ni ni-bold-right" />
//                             </span>
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                     <Col lg="4">
//                       <Card className="card-lift--hover shadow border-0">
//                         <CardBody className="py-5">
//                           <div className="icon icon-shape icon-shape-info rounded mb-4">
//                             <i className="ni ni-archive-2" />
//                           </div>
//                           <h6 className="font-weight-bold">Case Study 1</h6>
//                           <p className="description mt-3">
//                             Argon is a great free UI package based on Bootstrap
//                             4 that includes the most important components and
//                             features.
//                           </p>
//                           <div>
//                             <Badge color="success" pill className="mr-1">
//                               Process
//                             </Badge>
//                             <Badge color="warning" pill className="mr-1">
//                               Design
//                             </Badge>
//                             <Badge color="pinkish" pill className="mr-1">
//                               Develop
//                             </Badge>
//                             <Badge color="default" pill className="mr-1">
//                               UX
//                             </Badge>
//                           </div>
//                           <Button
//                             className="btn-icon btn-gradient-primary mt-4"
//                             color="primary"
//                             href="/"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             <span className="btn-inner--text">Learn more</span>
//                             <span className="btn-inner--icon align-middle">
//                               <i className="ni ni-bold-right" />
//                             </span>
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
// 
//           {/* Specialized in V2 */}
//           <section className="section section-lg bg-secondary">
//             <Container>
//               <h3 class="display-3 text-center">My Background</h3>
//               <Row className="row-grid align-items-center">
//                 <Col md="4">
//                   <Card className="card-lift--hover shadow border-0">
//                     <CardBody className="py-5">
//                       <h5 className="font-weight-bold">
//                         Front-end Design & Development
//                       </h5>
//                       <p className="description mt-3">
//                         The Front-end Development is my passion. Nothing like
//                         bring a design come to real life by putting passion,
//                         attention, beauty, and code.
//                       </p>
//                       <h6 className="font-weight-bold">Activities related</h6>
//                       <ul class="list-group list-group-flush description">
//                         <li class="list-group-item">Cras justo odio</li>
//                         <li class="list-group-item">Dapibus ac facilisis in</li>
//                         <li class="list-group-item">Vestibulum at eros</li>
//                       </ul>
//                     </CardBody>
//                   </Card>
//                 </Col>
//                 <Col md="4">
//                   <Card className="card-lift--hover shadow border-0">
//                     <CardBody className="py-5">
//                       <h6 className="text-uppercase">Quality Assurance</h6>
//                       <p className="description mt-3">
//                         One of the qualities that have brought me to where I'm
//                         right now is the attention to detail. Deliver everything
//                         with excellence is a must!
//                       </p>
//                       <i className="ni ni-paper-diploma text-primary display-3" />
//                     </CardBody>
//                   </Card>
//                 </Col>
//                 <Col md="4">
//                   <Card className="card-lift--hover shadow border-0">
//                     <CardBody className="py-5">
//                       <h6 className="text-uppercase">Product Owner</h6>
//                       <p className="description mt-3">
//                         Let's put a brain to that beautifully crafted front-end
//                         by connecting a database, adding frameworks, and much
//                         more.
//                       </p>
//                       <i className="ni ni-chart-pie-35 text-primary display-3" />
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
//           
//           {/* Technologies */}
//           <section className="section section-lg section-nucleo-icons bg-secondary">
//             <Container>
//               <h3 class="display-3 text-center">My Background</h3>
//               <Row className="row-grid align-items-center">
//                 <div class="d-flex flex-wrap justify-content-center align-items-center icons-container blur-item mt-5 on-screen">
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/html-5.png" alt="HTML"/>
//                 
//                                     <p class="d-inline align-middle">HTML</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/css3.png" alt="CSS"/>
//                 
//                                     <p class="d-inline align-middle">CSS</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img src="https://img.icons8.com/color/40/000000/javascript.png" alt="JavaScript"/>
//                 
//                                     <p class="d-inline align-middle">JavaScript</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header"><img class="d-inline" src="https://img.icons8.com/color/40/000000/php.png" alt="PHP"/></div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/bootstrap.png" alt="Bootstrap"/>
//                 
//                                     <p class="d-inline align-middle">Bootstrap</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/angularjs.png" alt="Angular"/>
//                                     <p class="d-inline align-middle">Angular</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/react-native.png" alt="React"/>
//                                     <p class="d-inline align-middle">React (soon)</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/ios-filled/40/000000/ionic.png" alt="Ionic"/>
//                                     <p class="d-inline align-middle">Ionic</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/wordpress.png" alt="Wordpress"/>
//                                     <p class="d-inline align-middle">Wordpress</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/git.png" alt="Git" />
//                 
//                                     <p class="d-inline align-middle">Git</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header"><img class="d-inline svg" src="https://wac-cdn.atlassian.com/dam/jcr:01f0ea80-2b31-4009-8eaf-da8ebcabdfe1/Bitbucket-blue.svg" alt="Bitbucket" /></div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header"><img class="d-inline svg" src="assets/img/invision.png" alt="Invision" /></div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <svg class="c-marvel display-block" viewBox="0 0 75 32" width="75" height="32" aria-label="Marvel App Logo" data-reactid="21">
//                                         <path fill="currentColor" d="M58.6,19.4c-25.1-2-45.8,4.1-50.5,6.4c-2.6,1.2-2.8,2.7-2.4,3.5c0.3,0.6,1.6,1,2.9,0.3 c10-5.4,30.1-9.7,50-8.5c0.5,0,0.9-0.4,0.9-0.9C59.5,19.8,59.1,19.4,58.6,19.4L58.6,19.4z M64.8,11.8c-1.1,1.2-2.6,2.1-3.1,1.7 s0-1.9,0-1.9C64.2,10,69,5.9,69,2.7c0-2.9-2.6-3.8-5.3-1.1C61.5,4,59.9,7,59,10.2c-1.4,1.4-3.7,3.2-5.7,3.2c-1.1,0-1.3-0.8-1.2-1.8 c1.7,0,6.5-1.4,6.5-5.4c0-0.7-0.3-1.3-0.8-1.8c-0.5-0.5-1.1-0.7-1.8-0.6c-2.2,0-4.9,2.2-6.3,5.4C49.4,9.1,49,9,48.7,8.8 c0.4-0.8,0.6-1.6,0.9-2.4c0.3-1.7-0.4-2.7-1.7-2.5C47,3.9,46,4.7,45.7,6.4c-0.1,0.9,0.1,1.8,0.4,2.5c-0.6,1.9-3,4.2-3.8,4.1 c-0.8-0.1,0.1-3.4,0.9-5.9c0.5-0.5,0.8-1,1.1-1.7c0.2-0.5,0.1-1.1-0.4-1.3c-1.2-0.5-2.6,0.1-3.1,1.3c-0.3,0.6-0.6,1.2-0.9,1.9 c-0.7,0.8-1.7,1.9-2,1.8c-0.4-0.3,1.1-2.3,0.9-3.5c-0.1-0.9-1-1.6-1.9-1.5c-1.4,0.2-3.1,2.8-3.1,2.8c0.2-0.5,0.3-1,0.4-1.5 c-0.1-1-1.9-1.4-2.8,0.4c-0.6,1.7-1.1,3.5-1.3,5.3c-0.4,0.8-1.9,3.2-3.1,3.3c-1,0.1,0.2-4.3,0.4-4.5c0.5-0.8,1.2-2.5,1.1-3.3 c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.2-0.7-0.3-1-0.2c-0.6,0.2-1.1,0.6-1.4,1.1c-0.4-0.5-1.1-0.8-1.8-0.7c-4,0.4-6.5,7.4-6.2,10.7 c0.2,1.8,1.1,2.9,2.6,2.6c1.7-0.2,3.1-2.8,3.1-2.8s0.4,2.1,2.3,1.9c1.4-0.4,2.6-1.3,3.5-2.5c0,0.1-0.1,0.2-0.1,0.4 c-0.3,1.8,2.6,1.6,2.8,0.2c0.9-6.7,3.1-9.4,3.7-9.4c0.5,0-1.4,3.1-0.3,4.4c0.9,1,2.4,0.2,3.7-0.9c-0.2,0.8-0.3,1.7-0.4,2.5 c-0.1,1.9,0.6,3.4,2.4,3.3c2.4-0.1,4.9-3.1,6.6-5.9c0.4,0.3,0.9,0.5,1.4,0.6c-0.2,0.7-0.2,1.4-0.2,2c0.1,2.2,1.6,3,3.4,2.9 c2-0.1,4.4-1.6,6-3.1c0,0.1,0,0.2-0.1,0.2c-0.1,1.1,0.1,3,1.6,3.1c1.7,0.1,4.7-1.6,6.2-3.5C67,12,65.7,10.8,64.8,11.8L64.8,11.8 L64.8,11.8z M66.4,2.8c0.2,0,0.3,0.2,0.3,0.4c0,1.9-4.6,5.8-4.6,5.8S65.1,2.8,66.4,2.8L66.4,2.8z M55.2,6.7c0.2,0,0.3,0,0.4,0.2 s0.1,0.3,0.1,0.4c0,1.1-1.4,1.9-3,1.9C53.6,7.9,54.5,6.7,55.2,6.7L55.2,6.7z M24.2,9.6c-0.1,1.1-2.1,6.2-3.1,6.2 c-1.3,0.1,0.7-7.1,2.8-7.1C24.3,8.7,24.3,9,24.2,9.6L24.2,9.6z M7.3,11c1.3,0-1.1,6.7-0.8,9.6s3.5,2.1,3.3,0.4 C9.4,18.1,11.4,9,13.3,9c1.4,0-1.6,6.2-1,10.1c0.4,2.5,3.8,1.8,3.4,0.1c-1.1-5.1,2.5-10,2-13.6c-0.2-1.5-1.1-2.3-2-2.3 c-3.2,0-5.8,6.6-5.8,6.6S10.3,6.2,7.6,6C3.8,5.8-0.1,15.4,0,24.1c0.1,2.8,3.5,2.3,3.3,0.1C3.1,20.3,5.3,11,7.3,11L7.3,11z" data-reactid="22"></path>
//                                     </svg>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/adobe-photoshop.png" alt="Photoshop" />
//                 
//                                     <p class="d-inline align-middle">Photoshop</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://img.icons8.com/color/40/000000/adobe-illustrator.png" alt="Illustrator" />
//                                     <p class="d-inline align-middle">Illustrator</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline" src="https://cdn.dribbble.com/users/2375395/avatars/small/c9599deaaa208db173e6a60a9194a104.png?1529516999" width="40" alt="Sketch" />
//                                     <p class="d-inline align-middle">Sketch</p>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header"><img class="d-inline svg" src="https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a55-3d297e509cc8/Jira%20Software-blue.svg" alt="Jira" /></div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline svg" src="https://www.workfront.com/themes/utopia/images/logo/workfront-orange.svg" alt="Workfront"/>
//                                 </div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline svg" src="https://xtm.cloud/wp-content/themes/xtm/svg/logo.svg" alt="XTM"/></div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header">
//                                     <img class="d-inline svg" src="https://www.opentext.com/file_source/OpenText/en_US/SVG/opentext-logo-dark.svg" alt="OpenText TeamSite"/></div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header"><img class="d-inline svg w-25" src="https://labs.mysql.com/common/logos/mysql-logo.svg?v2" alt="MySQL"/></div>
//                             </div>
//                 
//                             <div class="card">
//                                 <div class="card-header"><img class="d-inline" src="https://www.phpmyadmin.net/static/images/logo.png?2ccd9afd557e" alt="PHPMyAdmin"/></div>
//                             </div>
//                 
//                         </div>
//               </Row>
//             </Container>
//           </section>
//           
//           {/* Snake cube image 1 */}
//           <section className="section">
//             <Container>
//               <Row className="justify-content-center">
//                 <Col lg="12">
//                   <Card className="shadow border-0">
//                     <CardBody className="py-5 card-blockquote">
//                       <img
//                         alt="..."
//                         className="img-center img-fluid"
//                         src={require("assets/img/snake-start.png")}
//                       />
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
//           
//           {/* Snake cube image 2 */}
//           <section className="section">
//             <Container>
//               <Row className="justify-content-center">
//                 <Col lg="12">
//                   <Card className="shadow border-0">
//                     <CardBody className="py-5 card-blockquote">
//                       <img
//                         alt="..."
//                         className="img-center img-fluid w-50"
//                         src={require("assets/img/snake-progress.png")}
//                       />
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
//           
//           {/* Snake cube image 2 */}
//           <section className="section">
//             <Container>
//               <Row className="justify-content-center">
//                 <Col lg="12">
//                   <Card className="shadow border-0">
//                     <CardBody className="py-5 card-blockquote">
//                       <img
//                         alt="..."
//                         className="img-center img-fluid w-50"
//                         src={require("assets/img/snake-finished.png")}
//                       />
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
//           
//           {/* Contact me */}
//           <section className="section section-lg bg-gradient-primary">
//             <Container>
//               <Row className="text-center justify-content-center">
//                 <Col lg="10">
//                   <h2 className="display-3 text-white">Let's talk</h2>
//                   <p className="lead text-white">
//                     Have a project for me? I'll be glad to collaborate with you, nothing a cup of coffee can't solve.
//                   </p>
//                 </Col>
//               </Row>
//               <Row className="justify-content-center">
//                 <Col lg="6">
//                   <Card className="bg-secondary shadow">
//                     <CardBody className="p-lg-5">
//                       <h4 className="mb-1">Want to work with us?</h4>
//                       <p className="mt-0">
//                         Your project is very important to us.
//                       </p>
//                       <FormGroup
//                         className={classnames("mt-5", {
//                           focused: this.state.nameFocused,
//                         })}
//                       >
//                         <InputGroup className="input-group-alternative">
//                           <InputGroupAddon addonType="prepend">
//                             <InputGroupText>
//                               <i className="ni ni-badge" />
//                             </InputGroupText>
//                           </InputGroupAddon>
//                           <Input
//                             placeholder="Your name"
//                             type="text"
//                             onFocus={(e) =>
//                               this.setState({ nameFocused: true })
//                             }
//                             onBlur={(e) =>
//                               this.setState({ nameFocused: false })
//                             }
//                           />
//                         </InputGroup>
//                       </FormGroup>
//                       
//                       {/* Add email validation to this input, Formgroup > className="has-success" */}
//                       <FormGroup
//                         className={classnames({
//                           focused: this.state.emailFocused,
//                         })}
//                       >
//                         <InputGroup className="input-group-alternative">
//                           <InputGroupAddon addonType="prepend">
//                             <InputGroupText>
//                               <span>@</span>
//                             </InputGroupText>
//                           </InputGroupAddon>
//                           <Input
//                             className="is-valid"
//                             placeholder="Your email address"
//                             type="email"
//                             onFocus={(e) =>
//                               this.setState({ emailFocused: true })
//                             }
//                             onBlur={(e) =>
//                               this.setState({ emailFocused: false })
//                             }
//                           />
//                         </InputGroup>
//                       </FormGroup>
//                       <FormGroup className="mb-4">
//                         <InputGroup className="input-group-alternative">
//                         <InputGroupAddon addonType="prepend">
//                           <InputGroupText>
//                               <i className="ni ni-email-83" />
//                             </InputGroupText>
//                           </InputGroupAddon>
//                         <Input
//                           className="form-control-alternative"
//                           name="name"
//                           placeholder="Type your message..."
//                           type="textarea"
//                         />
//                         </InputGroup>
//                       </FormGroup>
//                       <div>
//                         <Button
//                           className="btn bg-gradient-primary"
//                           color="primary"
//                           type="button"
//                         >
//                           Send message
//                         </Button>
//                       </div>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
//                     
//         </main>
//         
//       {/* <SimpleFooter /> */}
//       
//       </>
//     );
//   }
// }
// 
// export default cv;
