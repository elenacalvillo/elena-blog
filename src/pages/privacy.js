import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout-404';
import SEO from '../components/seo';

import { Button, Container, Card } from 'react-bootstrap';

const Privacy = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Privacy Policy" />
			<div className="mb-3">
				<h1 className="">PRIVACY NOTICE</h1>
				
				<div>
					<div>
						<div>
							<span>
								<strong>
									<span>
										<span data-custom-class="subtitle">Last updated <bdt className="question">December 30, 2020</bdt></span>
									</span>
								</strong>
							</span>
						</div>
						<div><br /></div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										Thank you for choosing to be part of our community at <bdt className="question">Elena Calvillo</bdt>
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" /></span>
										</span>
										("
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" /></span>
										</span>
										<strong>Company</strong>
									</span>
									<span>
										<span>
											<span data-custom-class="body_text">
												<span>
													<span data-custom-class="body_text">
														<bdt className="statement-end-if-in-editor"><span data-custom-class="body_text" /></bdt>
													</span>
												</span>
											</span>
										</span>
									</span>
									<span data-custom-class="body_text">
										", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy
										notice, or our practices with regards to your personal information, please contact us at <bdt className="question">hello@elenacalvillo.com</bdt>.
									</span>
								</span>
							</span>
						</div>
						<div>
							<span><br /></span>
						</div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										When you
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" /></span>
										</span>
										visit our website <bdt className="question"><a href="https://www.elenacalvillo.com" target="_blank" data-custom-class="link">https://www.elenacalvillo.com</a></bdt> (the "<strong>Website</strong>"),
										<span>
											<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span>
										</span>
										and more generally, use any of our services (the "<strong>Services</strong>", which include the&nbsp;
									</span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<span data-custom-class="body_text">
													<bdt className="block-component"><span data-custom-class="body_text" /></bdt>Website
													<span>
														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
													</span>
													<bdt className="block-component" />
												</span>
											</span>
										</span>
										<span data-custom-class="body_text">
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" /></span>
											</span>
										</span>
									</span>
								</span>
								<span data-custom-class="body_text">
									), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect,
									how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please
									discontinue use of our Services immediately.
								</span>
							</span>
						</div>
						<div>
							<span><br /></span>
						</div>
						<div>
							<span>
								<span>
									<span>
										<span data-custom-class="body_text">This privacy notice applies to all information collected through our Services (which, as described above, includes our&nbsp;</span>
										<span>
											<span data-custom-class="body_text">
												<bdt className="block-component"><span data-custom-class="body_text" /></bdt>Website
												<span>
													<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
												</span>
												<bdt className="block-component"><bdt className="block-component" /></bdt>
											</span>
										</span>
									</span>
								</span>
							</span>
							<span data-custom-class="body_text">), as well as, any related services, sales, marketing or events.</span>
						</div>
						<div>
							<span><br /></span>
						</div>
						<div>
							<span>
								<span>
									<span>
										<span data-custom-class="body_text"><strong>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</strong></span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span><br /></span>
						</div>
						<div>
							<span>
								<span>
									<span>
										<strong><span data-custom-class="heading_1">TABLE OF CONTENTS</span></strong>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span><br /></span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#infocollect"><span>1. WHAT INFORMATION DO WE COLLECT?</span></a>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span><bdt className="block-component" /></span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#infouse"><span>2. HOW DO WE USE YOUR INFORMATION?</span></a>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<span><bdt className="statement-end-if-in-editor" /></span>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<span><a data-custom-class="link" href="#infoshare">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></span>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span><bdt className="block-component" /></span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<span><a data-custom-class="link" href="#whoshare">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</a></span>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<span><bdt className="statement-end-if-in-editor" /></span><bdt className="block-component" />
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#cookies"><span>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<bdt className="statement-end-if-in-editor" /><span><bdt className="block-component" /><bdt className="block-component" /></span>
											</span>
											<bdt className="block-component" /><bdt className="block-component" />
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#inforetain"><span>6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<span><bdt className="block-component" /></span>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#infosafe"><span>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span><bdt className="statement-end-if-in-editor" /><bdt className="block-component" /></span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#infominors"><span>8. DO WE COLLECT INFORMATION FROM MINORS?</span></a>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span><bdt className="statement-end-if-in-editor" /></span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span>
								<span><a data-custom-class="link" href="#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a></span>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#DNT"><span>10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#caresidents"><span>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a>
							</span>
						</div>
						<div>
							<span>
								<a data-custom-class="link" href="#policyupdates"><span>12. DO WE MAKE UPDATES TO THIS NOTICE?</span></a>
							</span>
						</div>
						<div>
							<a data-custom-class="link" href="#contact"><span>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a>
						</div>
						<div>
							<a data-custom-class="link" href="#request"><span>14. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</span></a>
						</div>
						<div><br /></div>
						<div id="infocollect">
							<span>
								<span>
									<span>
										<span>
											<span id="control">
												<strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong>
												<span data-custom-class="heading_1">
													<bdt className="block-component"><span data-custom-class="body_text" /></bdt>
												</span>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<span data-custom-class="heading_2">
								<span>
									<strong>
										<u><br /></u>
									</strong>
									<strong>Personal information you disclose to us</strong>
								</span>
							</span>
						</div>
						<div>
							<div><br /></div>
							<div>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<span>
													<span data-custom-class="body_text">
														<strong><em>In Short:&nbsp;</em></strong>
													</span>
												</span>
											</span>
										</span>
										<span data-custom-class="body_text">
											<span>
												<span>
													<span data-custom-class="body_text">
														<strong><em>&nbsp;</em></strong><em>We collect personal information that you provide to us.</em>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</div>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										We collect personal information that you voluntarily provide to us when you <span><bdt className="block-component" /></span>
									</span>
									<span data-custom-class="body_text">
										express an interest in obtaining information about us or our products and Services, when you participate in activities on the
										<span><bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span><bdt className="block-component" />
									</span>
								</span>
								<span data-custom-class="body_text">&nbsp;or otherwise when you contact us.</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										The personal information that we collect depends on the context of your interactions with us and the
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span>, the
											choices you make and the products and features you use. The personal information we collect may include the following:<bdt className="block-component" />
										</span>
									</span>
								</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										<strong>Personal Information Provided by You.</strong> We collect
										<span>
											<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="question">names</bdt>;&nbsp;</span>
											<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="question">email addresses</bdt>;&nbsp;</span>
											<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="question">job titles</bdt>;&nbsp;</span>
											<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="question">feedback</bdt>;&nbsp;</span>
											<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="question">contact preferences</bdt>;&nbsp;</span>
											<span data-custom-class="body_text"><bdt className="forloop-component" />and other similar information.</span>
											<span data-custom-class="body_text">
												<bdt className="statement-end-if-in-editor" /><bdt className="block-component"><bdt className="block-component" /></bdt>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
										<span>
											<bdt className="statement-end-if-in-editor"><bdt className="statement-end-if-in-editor" /></bdt>
										</span>
										<bdt className="block-component" />
									</span>
								</span>
							</span>
						</div>
						<div>
							<span data-custom-class="heading_2">
								<span>
									<strong>
										<u><br /></u>
									</strong>
									<strong>Information automatically collected</strong>
								</span>
							</span>
						</div>
						<div>
							<div><br /></div>
							<div>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<span>
													<span data-custom-class="body_text">
														<strong><em>In Short:&nbsp;</em></strong>
													</span>
												</span>
											</span>
										</span>
										<span data-custom-class="body_text">
											<span>
												<span>
													<span data-custom-class="body_text">
														<strong><em>&nbsp;</em></strong>
														<em>
															Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our
															<span data-custom-class="body_text">
																<em>
																	<span data-custom-class="body_text">
																		<span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																			</span>
																		</span>
																	</span>
																</em>
															</span>
															.
														</em>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</div>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										We automatically collect certain information when you visit, use or navigate the
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span>
										</span>
										. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating
										system, language preferences, referring URLs, device name, country, location, information about how and when you use our
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span>
										</span>
										and other technical information. This information is primarily needed to maintain the security and operation of our
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span>
										</span>
										, and for our internal analytics and reporting purposes.<bdt className="block-component" />
									</span>
								</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										Like many businesses, we also collect information through cookies and similar technologies. <bdt className="block-component" /><bdt className="block-component" />
										<bdt className="statement-end-if-in-editor"><span data-custom-class="body_text" /></bdt><bdt className="block-component" />
									</span>
								</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">The information we collect includes:<bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span data-custom-class="body_text">
																<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
															</span>
														</span>
													</span>
												</span>
											</span>
											and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span data-custom-class="body_text">
																<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
															</span>
														</span>
													</span>
												</span>
												&nbsp;
											</span>
											(such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error
											reports (sometimes called 'crash dumps') and hardware settings).
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span><bdt className="statement-end-if-in-editor" /></span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<bdt className="block-component"><span /></bdt>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<em>Device Data.</em> We collect device data such as information about your computer, phone, tablet or other device you use to access the
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span>
											</span>
											. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet
											service provider and/or mobile carrier, operating system and system configuration information.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span><bdt className="statement-end-if-in-editor" /></span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<bdt className="block-component"><span /></bdt>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the
											device you use to access the
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span data-custom-class="body_text">
																<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
															</span>
														</span>
													</span>
												</span>
											</span>
											. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either
											by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span><bdt className="statement-end-if-in-editor" /></span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<bdt className="block-component"><span /></bdt><bdt className="statement-end-if-in-editor" />
							<span data-custom-class="body_text">
								<span>
									<bdt className="statement-end-if-in-editor">
										<bdt className="statement-end-if-in-editor">
											<span>
												<span data-custom-class="body_text">
													<span>
														<span data-custom-class="body_text">
															<bdt className="statement-end-if-in-editor">
																<bdt className="statement-end-if-in-editor"><bdt className="block-component" /></bdt>
															</bdt>
														</span>
													</span>
												</span>
											</span>
											<span>
												<span data-custom-class="body_text">
													<span>
														<span data-custom-class="body_text">
															<bdt className="statement-end-if-in-editor"><bdt className="block-component" /></bdt>
														</span>
													</span>
												</span>
											</span>
										</bdt>
									</bdt>
								</span>
							</span>
							<bdt className="block-component" />
						</div>
						<div><br /></div>
						<div id="infouse">
							<span>
								<span>
									<span>
										<span>
											<span id="control">
												<strong><span data-custom-class="heading_1">2. HOW DO WE USE YOUR INFORMATION?</span></strong>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div>
							<div><br /></div>
							<div>
								<span>
									<span>
										<span data-custom-class="body_text">
											<span>
												<span>
													<span data-custom-class="body_text">
														<strong><em>In Short: &nbsp;</em></strong>
														<em>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</div>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										We use personal information collected via our
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" /></span>
										</span>
										for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you,
										with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.<bdt className="block-component" />
									</span>
								</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">We use the information we collect or receive:<bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed
											us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.
											<span>
												<span>
													<span>
														<span data-custom-class="body_text">
															<bdt className="block-component">
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			<span>
																				<span>
																					<span data-custom-class="body_text">
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									<span>
																										<span>
																											<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</bdt>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text"><bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>To post testimonials.</strong> We post testimonials on our
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
											that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please
											contact us at
											<span>
												<span>
													<span data-custom-class="body_text"><bdt className="block-component" /><bdt className="question">hello@elenacalvillo.com</bdt><bdt className="else-block" /></span>
												</span>
											</span>
											and be sure to include your name, testimonial location, and contact information.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span>
																						<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text"><bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Request feedback.&nbsp;</strong>We may use your information to request feedback and to contact you about your use of our
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																</span>
															</span>
														</span>
														.
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span>
																						<span data-custom-class="body_text">
																							<span>
																								<span>
																									<span data-custom-class="body_text">
																										<span>
																											<span>
																												<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text"><bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>To enable user-to-user communications.</strong> We may use your information in order to enable user-to-user communications with each user's consent.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text"><bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>To manage user accounts.&nbsp;</strong>We may use your information for the purposes of managing our account and keeping it in working order.<bdt className="statement-end-if-in-editor" />
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div><bdt className="block-component" /></div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>To send administrative information to you.&nbsp;</strong>We may use your personal information to send you product, service and new feature information and/or information about changes to our terms,
											conditions, and policies.
											<span>
												<span>
													<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div><bdt className="block-component" /></div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>To protect our Services.&nbsp;</strong>We may use your information as part of our efforts to keep our
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
											safe and secure (for example, for fraud monitoring and prevention).
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div><bdt className="block-component" /></div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>
												To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span>
																				<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</strong>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div><bdt className="block-component" /></div>
						<ul>
							<li>
								<span>
									<span>
										<span>
											<span data-custom-class="body_text">
												<strong>To respond to legal requests and prevent harm.&nbsp;</strong>If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<p><bdt className="block-component" /></p>
						<ul>
							<li>
								<span>
									<span>
										<span>
											<span data-custom-class="body_text">
												<strong>Fulfill and manage your orders.&nbsp;</strong>We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component">.</bdt>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<p><bdt className="block-component" /></p>
						<ul>
							<li>
								<span>
									<span>
										<span>
											<span data-custom-class="body_text">
												<strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<p><bdt className="block-component" /></p>
						<ul>
							<li>
								<span>
									<span>
										<span>
											<span data-custom-class="body_text">
												<strong>To deliver and facilitate delivery of services to the user.</strong> We may use your information to provide you with the requested service.
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<p><bdt className="block-component" /></p>
						<ul>
							<li>
								<span>
									<span>
										<span>
											<span data-custom-class="body_text">
												<strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<bdt className="block-component"><span /></bdt>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in
											accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
											, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "
											<a data-custom-class="link" href="#privacyrights">
												<span><span>WHAT ARE YOUR PRIVACY RIGHTS</span></span>
											</a>
											" below).
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<bdt className="block-component"><span /></bdt>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text"><strong>Deliver targeted advertising to you.</strong></span>
										<span data-custom-class="body_text">
											&nbsp;We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" /></span>
											</span>
											<bdt className="statement-end-if-in-editor" />
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<bdt className="block-component"><span /></bdt>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text"><strong>For other business purposes.</strong></span>
										<span data-custom-class="body_text">
											&nbsp;We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our
											<span>
												<span data-custom-class="body_text">
													<span>
														<span data-custom-class="body_text">
															<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
														</span>
													</span>
												</span>
											</span>
											, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information.
											We will not use identifiable personal information without your consent.<bdt className="statement-end-if-in-editor" />
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span><bdt className="block-component" /></span><bdt className="statement-end-if-in-editor"><span /></bdt>
						</div>
						<div><br /></div>
						<div id="infoshare">
							<span>
								<span>
									<span>
										<span>
											<span id="control">
												<strong><span data-custom-class="heading_1">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</span></strong>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										<strong><em>In Short:</em></strong><em>&nbsp; We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em>
									</span>
								</span>
							</span>
						</div>
						<div><br /></div>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">We may process or share your data that we hold based on the following legal basis:<bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.
											<span>
												<span>
													<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										<span>
											<span>
												<span data-custom-class="body_text">
													<bdt className="statement-end-if-in-editor">
														<span>
															<span>
																<span data-custom-class="body_text"><bdt className="block-component" /></span>
															</span>
														</span>
													</bdt>
												</span>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										<span>
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" /></span>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										<span>
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" /></span>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or
											legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text">
										<span>
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" /></span>
											</span>
										</span>
									</span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud,
											situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span><span data-custom-class="body_text">More specifically, we may need to process your data or share your personal information in the following situations:</span></span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of
											our business to another company.
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text"><bdt className="block-component" /></span>
								</span>
							</span>
						</div>
						<ul>
							<li>
								<span>
									<span>
										<span data-custom-class="body_text">
											<strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our
											behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected
											third parties to use tracking technology on the
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
											, which will enable them to collect data on our behalf about how you interact with our
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
											over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in
											this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.
											<span>
												<span>
													<span data-custom-class="body_text"><bdt className="block-component" /></span>
												</span>
											</span>
											We have contracts in place with our data processors, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have
											instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we
											instruct.
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
													<span data-custom-class="body_text">
														<span>
															<span><bdt className="statement-end-if-in-editor" /></span>
														</span>
													</span>
												</span>
											</span>
										</span>
									</span>
								</span>
							</li>
						</ul>
						<div>
							<span>
								<span>
									<span data-custom-class="body_text"><bdt className="block-component" /></span>
									<span data-custom-class="body_text">
										<bdt className="block-component">
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span><bdt className="statement-end-if-in-editor" /></span>
														</span>
													</span>
												</span>
											</span>
										</bdt>
									</span>
								</span>
							</span>
							<div>
								<span>
									<span>
										<span>
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" /></span>
											</span>
										</span>
									</span>
								</span>
								<div>
									<span>
										<span>
											<span data-custom-class="body_text"><bdt className="block-component" /></span>
										</span>
									</span>
									<div>
										<span>
											<span>
												<span data-custom-class="body_text"><bdt className="block-component" /></span>
											</span>
										</span>
										<div>
											<span>
												<span>
													<span>
														<span data-custom-class="body_text"><bdt className="block-component" /></span>
													</span>
												</span>
											</span>
											<div>
												<span><bdt className="block-component" /></span>
											</div>
											<div><br /></div>
											<div id="whoshare">
												<span>
													<span>
														<span>
															<span>
																<span id="control">
																	<strong><span data-custom-class="heading_1">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</span></strong>&nbsp;
																</span>
																&nbsp;
															</span>
															&nbsp;
														</span>
														&nbsp;
													</span>
													&nbsp;
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															<strong><em>In Short:</em></strong><em>&nbsp; We only share information with the following third parties.</em>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															We only share and disclose your information with the following third parties. We have categorized each party so that you may be easily understand the purpose of our data collection and processing
															practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in the section below titled "
															<a data-custom-class="link" href="#contact"><span>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a>".<bdt className="block-component" />
														</span>
													</span>
												</span>
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><span data-custom-class="body_text" /><span data-custom-class="body_text" /><span data-custom-class="body_text"><bdt className="block-component" /></span>
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
											</div>
											<ul>
												<li>
													<span>
														<span>
															<span data-custom-class="body_text"><strong>Communicate and Chat with Users</strong></span>
														</span>
													</span>
												</li>
											</ul>
											<div>
												<span>
													<span>
														<bdt className="forloop-component"><span data-custom-class="body_text" /></bdt>
														<span data-custom-class="body_text">
															<span>
																<span><bdt className="block-component" /><bdt className="question">Hotjar</bdt><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" /><bdt className="statement-end-if-in-editor" />
												</span>
												<bdt className="block-component" />
											</div>
											<ul>
												<li>
													<span>
														<span>
															<span data-custom-class="body_text"><strong>Content Optimization</strong></span>
														</span>
													</span>
												</li>
											</ul>
											<div>
												<span>
													<span>
														<bdt className="forloop-component"><span data-custom-class="body_text" /></bdt>
														<span data-custom-class="body_text">
															<span>
																<span><bdt className="block-component" /><bdt className="question">Google Fonts</bdt><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span>
															<bdt className="block-component" />,
															<span>
																<span>&nbsp;<bdt className="question">Instagram embed</bdt><bdt className="else-block" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span>
															<bdt className="block-component" />,
															<span>
																<span>&nbsp;<bdt className="question">Hotjar Recruiter widget</bdt><bdt className="else-block" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span><bdt className="block-component" /></span>
													</span>
													and <bdt className="question">YouTube video embed</bdt>
													<span>
														<span>
															<span>
																<span><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" /><bdt className="statement-end-if-in-editor" />
												</span>
												<bdt className="block-component" /><bdt className="block-component" />
											</div>
											<ul>
												<li>
													<span>
														<span>
															<span data-custom-class="body_text"><strong>Functionality and Infrastructure Optimization</strong></span>
														</span>
													</span>
												</li>
											</ul>
											<div>
												<span>
													<span>
														<bdt className="forloop-component"><span data-custom-class="body_text" /></bdt>
														<span data-custom-class="body_text">
															<span>
																<span><bdt className="block-component" /><bdt className="question">GitHub Pages</bdt><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span>
															<bdt className="block-component" />,
															<span>
																<span>&nbsp;<bdt className="question">Netlify </bdt><bdt className="else-block" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span><bdt className="block-component" /></span>
													</span>
													and <bdt className="question">Termly.io</bdt>
													<span>
														<span>
															<span>
																<span><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" /><bdt className="statement-end-if-in-editor" />
												</span>
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
											</div>
											<ul>
												<li>
													<span>
														<span>
															<span data-custom-class="body_text"><strong>Social Media Sharing and Advertising</strong></span>
														</span>
													</span>
												</li>
											</ul>
											<div>
												<span>
													<span>
														<bdt className="forloop-component"><span data-custom-class="body_text" /></bdt>
														<span data-custom-class="body_text">
															<span>
																<span><bdt className="block-component" /><bdt className="question">Instagram advertising</bdt><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" /><bdt className="statement-end-if-in-editor" />
												</span>
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
											</div>
											<ul>
												<li>
													<span>
														<span>
															<span data-custom-class="body_text"><strong>Web and Mobile Analytics</strong></span>
														</span>
													</span>
												</li>
											</ul>
											<div>
												<span>
													<span>
														<bdt className="forloop-component"><span data-custom-class="body_text" /></bdt>
														<span data-custom-class="body_text">
															<span>
																<span><bdt className="block-component" /><bdt className="question">Google Analytics</bdt><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span>
															<bdt className="block-component" />,
															<span>
																<span>&nbsp;<bdt className="question">Hotjar </bdt><bdt className="else-block" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span>
															<bdt className="block-component" />,
															<span>
																<span>&nbsp;<bdt className="question">MixPanel </bdt><bdt className="else-block" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" />
												</span>
												<span data-custom-class="body_text">
													<span>
														<span><bdt className="block-component" /></span>
													</span>
													and <bdt className="question">Google Tag Manager</bdt>
													<span>
														<span>
															<span>
																<span><bdt className="statement-end-if-in-editor" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" /><bdt className="statement-end-if-in-editor" />
												</span>
												<bdt className="block-component" />
											</div>
											<ul>
												<li>
													<span>
														<span>
															<span data-custom-class="body_text"><strong>Website Hosting</strong></span>
														</span>
													</span>
												</li>
											</ul>
											<div>
												<span>
													<span>
														<bdt className="forloop-component"><span data-custom-class="body_text" /></bdt>
														<span data-custom-class="body_text">
															<span>
																<span><bdt className="block-component" /><bdt className="question">GitHub Pages</bdt><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" /><bdt className="statement-end-if-in-editor" />
												</span>
												<bdt className="block-component" />
											</div>
											<ul>
												<li>
													<span>
														<span>
															<span data-custom-class="body_text"><strong>Website Performance Monitoring</strong></span>
														</span>
													</span>
												</li>
											</ul>
											<div>
												<span>
													<span>
														<bdt className="forloop-component"><span data-custom-class="body_text" /></bdt>
														<span data-custom-class="body_text">
															<span>
																<span><bdt className="block-component" /><bdt className="question">HappyApps</bdt><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
													<bdt className="forloop-component" /><bdt className="statement-end-if-in-editor" />
												</span>
												<bdt className="block-component" /><span data-custom-class="body_text" /><span data-custom-class="body_text" /><span data-custom-class="body_text" /><span data-custom-class="body_text" />
												<span data-custom-class="body_text" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><span data-custom-class="body_text" /><span data-custom-class="body_text" />
												<span data-custom-class="body_text" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" />
												<bdt className="block-component" /><bdt className="block-component" /><bdt className="block-component" /><span data-custom-class="body_text" /><span data-custom-class="body_text" />
												<span data-custom-class="body_text" /><span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
											</div>
											<div>
												<span>
													<span>
														<span>
															<span>
																<span>
																	<bdt className="block-component"><span data-custom-class="heading_1" /></bdt>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div id="cookies">
												<span>
													<span>
														<span>
															<span>
																<span id="control">
																	<strong><span data-custom-class="heading_1">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															<strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We may use cookies and other tracking technologies to collect and store your information.</em>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse
															certain cookies is set out in our Cookie Notice
															<span>
																<span data-custom-class="body_text"><bdt className="block-component" />.</span>
																<span>
																	<span>
																		<span>
																			<span>
																				<span>
																					<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																					<span data-custom-class="body_text"><bdt className="block-component" /><bdt className="block-component" /></span>
																					<bdt className="block-component">
																						<span data-custom-class="body_text">
																							<bdt className="block-component">
																								<span>
																									<span>
																										<span>
																											<span>
																												<span>
																													<span>
																														<span>
																															<span>
																																<span>
																																	<span data-custom-class="body_text"><bdt className="block-component" /></span>
																																</span>
																															</span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</bdt>
																						</span>
																					</bdt>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div id="inforetain">
												<span>
													<span>
														<span>
															<span>
																<span id="control">
																	<strong><span data-custom-class="heading_1">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															<strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such
															as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than
															<span>
																<span>
																	<span data-custom-class="body_text"><bdt className="block-component" /><bdt className="question">90 days</bdt><bdt className="statement-end-if-in-editor" /></span>
																</span>
															</span>
															.
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your
															personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
															<span><bdt className="block-component" /></span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div id="infosafe">
												<span>
													<span>
														<span>
															<span>
																<span id="control">
																	<strong><span data-custom-class="heading_1">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															<strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We aim to protect your personal information through a system of organizational and technical security measures.</em>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts
															to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
															cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to
															protect your personal information, transmission of personal information to and from our
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
															is at your own risk. You should only access the
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
															within a secure environment.<span><bdt className="statement-end-if-in-editor" /></span>
															<span>
																<span data-custom-class="body_text"><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div id="infominors">
												<span>
													<span>
														<span>
															<span>
																<span id="control">
																	<strong><span data-custom-class="heading_1">8. DO WE COLLECT INFORMATION FROM MINORS?</span></strong>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															<strong><em>In Short:</em></strong><em>&nbsp; We do not knowingly collect data from or market to children under 18 years of age.</em>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															We do not knowingly solicit data from or market to children under 18 years of age. By using the
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
															, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
															. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our
															records. If you become aware of any data we may have collected from children under age 18, please contact us at
															<span>
																<span data-custom-class="body_text"><bdt className="block-component" /><bdt className="question">hello@elenacalvillo.com</bdt><bdt className="else-block" /></span>
															</span>
															.
															<span>
																<span>
																	<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div id="privacyrights">
												<span>
													<span>
														<span>
															<span>
																<span id="control">
																	<strong><span data-custom-class="heading_1">9. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															<strong><em>In Short:</em></strong>
															<em>
																&nbsp;
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			<em><bdt className="block-component" /></em>
																		</span>
																	</span>
																</span>
																In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information.
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			<em><bdt className="statement-end-if-in-editor" /></em>
																		</span>
																	</span>
																</span>
																You may review, change, or terminate your account at any time.
															</em>
															<span>
																<span><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your
															personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain
															circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the
															<a data-custom-class="link" href="#contact">
																<span><span>contact details</span></span>
															</a>
															provided below. We will consider and act upon any request in accordance with applicable data protection laws.
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the
															processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span><bdt className="statement-end-if-in-editor" /></span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</div>
											<div><span>&nbsp;</span></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection
															supervisory authority. You can find their contact details here:
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span data-custom-class="body_text">
																				<a data-custom-class="link" href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank">
																					<span>http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</span>
																				</a>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
															.
														</span>
													</span>
												</span>
											</div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															If you are a resident in Switzerland, the contact details for the data protection authorities are available here:
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">https://www.edoeb.admin.ch/edoeb/en/home.html</a>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
															.<bdt className="block-component" /><bdt className="block-component" />
														</span>
													</span>
												</span>
											</div>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														<strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to
														reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text">
																			<span>
																				<span>
																					<span data-custom-class="body_text">
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" />
																									<bdt className="block-component" />
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														. To opt-out of interest-based advertising by advertisers on our
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text">
																			<span>
																				<span>
																					<span data-custom-class="body_text">
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" />
																									<bdt className="block-component" />
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														visit
														<span>
															<span data-custom-class="body_text">
																<a data-custom-class="link" href="http://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank"><span>http://www.aboutads.info/choices/</span></a>
															</span>
														</span>
														.
														<span>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component" />
																	<span>
																		<span>
																			<span>
																				<span>
																					<span>
																						<span><bdt className="statement-end-if-in-editor" /></span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
																<span data-custom-class="body_text"><bdt className="block-component" /></span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<div id="DNT">
											<span>
												<span>
													<span>
														<span>
															<span id="control">
																<strong><span data-custom-class="heading_1">10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong>
															</span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about
														your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently
														respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the
														future, we will inform you about that practice in a revised version of this privacy notice.
													</span>
												</span>
												&nbsp;
											</span>
										</div>
										<div><br /></div>
										<div id="caresidents">
											<span>
												<span>
													<span>
														<span>
															<span id="control">
																<strong><span data-custom-class="heading_1">11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong>
															</span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														<strong><em>In Short:&nbsp;</em></strong><em>&nbsp;Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em>
													</span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge,
														information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal
														information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact
														information provided below.
													</span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														If you are under 18 years of age, reside in California, and have a registered account with
														<span>
															<span data-custom-class="body_text">
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span>
																				<span data-custom-class="body_text">
																					<bdt className="block-component" />the Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														, you have the right to request removal of unwanted data that you publicly post on the
														<span>
															<span data-custom-class="body_text">
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span>
																				<span data-custom-class="body_text">
																					<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in
														California. We will make sure the data is not publicly displayed on the
														<span>
															<span data-custom-class="body_text">
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span>
																				<span data-custom-class="body_text">
																					<bdt className="block-component" />Website<bdt className="statement-end-if-in-editor" /><bdt className="block-component" /><bdt className="block-component" />
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
														<span>
															<span data-custom-class="body_text"><bdt className="block-component" /></span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<div>
											<span data-custom-class="heading_2">
												<span>
													<strong>
														<u><br /></u>
													</strong>
													<strong>CCPA Privacy Notice</strong>
												</span>
											</span>
										</div>
										<div>
											<div><br /></div>
											<div>
												<span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span><span data-custom-class="body_text">The California Code of Regulations defines a "resident" as:</span></span>
															</span>
														</span>
													</span>
												</span>
											</div>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span><span data-custom-class="body_text">(1) every individual who is in the State of California for other than a temporary or transitory purpose and</span></span>
											</span>
										</div>
										<div>
											<span>
												<span><span data-custom-class="body_text">(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</span></span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span><span data-custom-class="body_text">All other individuals are defined as "non-residents."</span></span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span><span data-custom-class="body_text">If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</span></span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text"><strong>What categories of personal information do we collect?</strong></span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														We have collected the following categories of personal information in the past twelve (12) months:
														<span>
															<span data-custom-class="body_text"><bdt className="block-component" /></span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<table>
											<tbody>
												<tr>
													<td>
														<br />
														<span>
															<span>
																<span data-custom-class="body_text"><strong>Category</strong></span>
															</span>
														</span>
														<br />
														<br />
													</td>
													<td>
														<br />
														<span>
															<span>
																<span data-custom-class="body_text"><strong>Examples</strong></span>
															</span>
														</span>
														<br />
														<br />
													</td>
													<td>
														<br />
														<span>
															<span>
																<span data-custom-class="body_text"><strong>Collected</strong></span>
															</span>
														</span>
														<br />
														<br />
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">A. Identifiers</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address
																		and account name
																	</span>
																</span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
															</span>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		YES
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span><span data-custom-class="body_text"><bdt className="forloop-component" /></span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																				</bdt>
																			</span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component">
																								<span>
																									<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																									<span data-custom-class="body_text">
																										<bdt className="statement-end-if-in-editor">
																											<span>
																												<span data-custom-class="body_text"><bdt className="block-component" /></span>
																											</span>
																										</bdt>
																									</span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">B. Personal information categories listed in the California Customer Records statute</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">Name, contact information, education, employment, employment history and financial information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div>
															<span>
																<span><span data-custom-class="body_text">YES</span></span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">C. Protected classification characteristics under California or federal law</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">Gender and date of birth</span></span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
															</span>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		YES
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span><span data-custom-class="body_text"><bdt className="forloop-component" /></span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																				</bdt>
																			</span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component">
																								<span>
																									<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																									<span data-custom-class="body_text">
																										<bdt className="statement-end-if-in-editor">
																											<span>
																												<span data-custom-class="body_text"><bdt className="block-component" /></span>
																											</span>
																										</bdt>
																									</span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">D. Commercial information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">Transaction information, purchase history, financial details and payment information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /></span><span data-custom-class="body_text"><bdt className="block-component" /></span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																		</span>
																	</bdt>
																</span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																						<span data-custom-class="body_text">
																							<bdt className="statement-end-if-in-editor">
																								<span>
																									<span data-custom-class="body_text"><bdt className="block-component" /></span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</bdt>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">E. Biometric information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">Fingerprints and voiceprints</span></span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /></span><span data-custom-class="body_text"><bdt className="block-component" /></span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																		</span>
																	</bdt>
																</span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																						<span data-custom-class="body_text">
																							<bdt className="statement-end-if-in-editor">
																								<span>
																									<span data-custom-class="body_text"><bdt className="block-component" /></span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</bdt>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">F. Internet or other similar network activity</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements
																	</span>
																</span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
															</span>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		YES
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span><span data-custom-class="body_text"><bdt className="forloop-component" /></span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																				</bdt>
																			</span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component">
																								<span>
																									<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																									<span data-custom-class="body_text">
																										<bdt className="statement-end-if-in-editor">
																											<span>
																												<span data-custom-class="body_text"><bdt className="block-component" /></span>
																											</span>
																										</bdt>
																									</span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</div>
														<div>
															<span>
																<span>
																	<span data-custom-class="body_text"><br /></span>
																</span>
															</span>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">G. Geolocation data</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">Device location</span></span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
															</span>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		YES
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span><span data-custom-class="body_text"><bdt className="forloop-component" /></span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																				</bdt>
																			</span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component">
																								<span>
																									<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																									<span data-custom-class="body_text">
																										<bdt className="statement-end-if-in-editor">
																											<span>
																												<span data-custom-class="body_text"><bdt className="block-component" /></span>
																											</span>
																										</bdt>
																									</span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">H. Audio, electronic, visual, thermal, olfactory, or similar information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">Images and audio, video or call recordings created in connection with our business activities</span></span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
															</span>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		YES
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span><span data-custom-class="body_text"><bdt className="forloop-component" /></span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																				</bdt>
																			</span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="block-component">
																								<span>
																									<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																									<span data-custom-class="body_text">
																										<bdt className="statement-end-if-in-editor">
																											<span>
																												<span data-custom-class="body_text"><bdt className="block-component" /></span>
																											</span>
																										</bdt>
																									</span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">I. Professional or employment-related information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us
																	</span>
																</span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /></span><span data-custom-class="body_text"><bdt className="block-component" /></span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																		</span>
																	</bdt>
																</span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																						<span data-custom-class="body_text">
																							<bdt className="statement-end-if-in-editor">
																								<span>
																									<span data-custom-class="body_text"><bdt className="block-component" /></span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</bdt>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">J. Education Information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">Student records and directory information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /><bdt className="block-component" /></span>
																<span data-custom-class="body_text"><bdt className="forloop-component" /></span><span data-custom-class="body_text"><bdt className="block-component" /></span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text"><bdt className="block-component" /></span>
																		</span>
																	</bdt>
																</span>
																<span data-custom-class="body_text">
																	<bdt className="block-component">
																		<span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component">
																					<span>
																						<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																						<span data-custom-class="body_text">
																							<bdt className="statement-end-if-in-editor">
																								<span>
																									<span data-custom-class="body_text"><bdt className="block-component" /></span>
																								</span>
																							</bdt>
																						</span>
																					</span>
																				</bdt>
																			</span>
																		</span>
																	</bdt>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<span>
																<span><span data-custom-class="body_text">K. Inferences drawn from other personal information</span></span>
															</span>
														</div>
													</td>
													<td>
														<div>
															<span>
																<span>
																	<span data-custom-class="body_text">
																		Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics
																	</span>
																</span>
															</span>
														</div>
													</td>
													<td>
														<div><br /></div>
														<div data-custom-class="body_text">
															<span data-custom-class="body_text"><bdt className="block-component" /></span>
															<span>
																<span>
																	<span data-custom-class="body_text">YES<bdt className="else-block" /></span>
																</span>
															</span>
														</div>
														<div><br /></div>
													</td>
												</tr>
											</tbody>
										</table>
										<div><bdt className="block-component" /></div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="block-component" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<ul>
											<li>
												<span>
													<span><span data-custom-class="body_text">Receiving help through our customer support channels;</span></span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span data-custom-class="body_text">
																						<span>
																							<span>
																								<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</li>
										</ul>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="block-component" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<ul>
											<li>
												<span>
													<span><span data-custom-class="body_text">Participation in customer surveys or contests; and</span></span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span data-custom-class="body_text">
																						<span>
																							<span>
																								<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</li>
										</ul>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span>
																<span data-custom-class="body_text">
																	<span>
																		<span data-custom-class="body_text"><bdt className="block-component" /></span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<ul>
											<li>
												<span>
													<span><span data-custom-class="body_text">Facilitation in the delivery of our Services and to respond to your inquiries.</span></span>
													<span>
														<span data-custom-class="body_text">
															<span>
																<span>
																	<span data-custom-class="body_text">
																		<span>
																			<span data-custom-class="body_text">
																				<span>
																					<span data-custom-class="body_text">
																						<span>
																							<span>
																								<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</li>
										</ul>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text"><strong>How do we use and share your personal information?</strong></span>
												</span>
											</span>
										</div>
										<div><br /></div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														<span>
															<span data-custom-class="body_text"><bdt className="block-component" /><bdt className="block-component" /></span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<div>
											<span>
												<span>
													<span data-custom-class="body_text">
														<bdt className="question">Elena Calvillo</bdt> collects and shares your personal information through:
														<span>
															<span data-custom-class="body_text"><bdt className="block-component" /></span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<ul>
											<li>
												<span>
													<span>
														<span data-custom-class="body_text">
															Targeting cookies/Marketing cookies
															<span>
																<span>
																	<span>
																		<span>
																			<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</li>
										</ul>
										<div>
											<span>
												<span>
													<span>
														<span>
															<span data-custom-class="body_text">
																<bdt className="statement-end-if-in-editor"><bdt className="block-component" /></bdt>
															</span>
														</span>
													</span>
												</span>
											</span>
										</div>
										<ul>
											<li>
												<span>
													<span>
														<span data-custom-class="body_text">
															Social media cookies
															<span>
																<span>
																	<span>
																		<span>
																			<span>
																				<span>
																					<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</li>
										</ul>
										<div>
											<span>
												<span>
													<span>
														<span>
															<span>
																<span>
																	<span data-custom-class="body_text"><bdt className="block-component" /></span>
																</span>
															</span>
														</span>
													</span>
												</span>
											</span>
											<div>
												<span>
													<span>
														<span>
															<span>
																<span>
																	<span>
																		<span>
																			<span>
																				<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
												</span>
												<div>
													<span>
														<span>
															<span>
																<span>
																	<span>
																		<span>
																			<span>
																				<span>
																					<span>
																						<span>
																							<span data-custom-class="body_text"><bdt className="block-component" /></span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
													</span>
													<div>
														<span>
															<span>
																<span>
																	<span>
																		<span>
																			<span>
																				<span>
																					<span>
																						<span>
																							<span>
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<bdt className="statement-end-if-in-editor"><bdt className="block-component" /></bdt>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														<span data-custom-class="body_text">
															<span>
																<span>
																	<span>
																		<span>
																			<span>
																				<span>
																					<span>
																						<span>
																							<span>
																								<span>
																									<span>
																										<span>
																											<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														<span data-custom-class="body_text">
															<span>
																<span>
																	<span>
																		<span>
																			<span>
																				<span>
																					<span>
																						<span>
																							<span>
																								<span>
																									<span>
																										<span>
																											<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</span>
														</span>
														<div>
															<span>
																<span data-custom-class="body_text">
																	<bdt className="block-component"><bdt className="block-component" /></bdt>
																</span>
															</span>
															<div>
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			More information about our data collection and sharing practices can be found in this privacy notice
																			<span>
																				<span data-custom-class="body_text">
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																				</span>
																			</span>
																			.
																			<span>
																				<span data-custom-class="body_text">
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</div>
															<div><br /></div>
															<div>
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			You may contact us
																			<span>
																				<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			</span>
																			by email at&nbsp;
																		</span>
																		<span>
																			<span data-custom-class="body_text"><bdt className="question">hello@elenacalvillo.com</bdt>, <bdt className="block-component" /><bdt className="block-component" /></span>
																			<span data-custom-class="body_text">
																				<bdt className="block-component" /><bdt className="block-component"><span data-custom-class="body_text" /></bdt>
																			</span>
																		</span>
																	</span>
																</span>
																<span data-custom-class="body_text">or by referring to the contact details at the bottom of this document.</span>
															</div>
															<div><br /></div>
															<div>
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to
																			act on your behalf.
																		</span>
																	</span>
																</span>
															</div>
															<div><br /></div>
															<div>
																<span>
																	<span>
																		<span data-custom-class="body_text"><strong>Will your information be shared with anyone else?</strong></span>
																	</span>
																</span>
															</div>
															<div><br /></div>
															<div>
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit
																			entity that processes the information on our behalf.
																			<span>
																				<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			</span>
																		</span>
																	</span>
																</span>
															</div>
															<div><br /></div>
															<div>
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			The current list of our service providers can be found in below.
																			<span>
																				<span data-custom-class="body_text">
																					<span>
																						<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</span>
																</span>
															</div>
															<div><br /></div>
															<div>
																<span>
																	<span>
																		<span data-custom-class="body_text">
																			We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not
																			considered to be "selling" of your personal data.
																			<span>
																				<span data-custom-class="body_text"><bdt className="block-component" /></span>
																			</span>
																		</span>
																	</span>
																	<bdt className="block-component" />
																</span>
															</div>
															<div>
																<span><br /></span>
															</div>
															<div>
																<span>
																	<span>
																		<span>
																			<span data-custom-class="body_text"><bdt className="question">Elena Calvillo</bdt></span>
																			<span data-custom-class="body_text">
																				&nbsp;has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
																				<bdt className="forloop-component" />
																			</span>
																		</span>
																	</span>
																</span>
																<p>
																	<span><bdt className="forloop-component" /><bdt className="block-component" /></span>
																	<span data-custom-class="body_text">
																		<span><bdt className="forloop-component" /></span>
																	</span>
																</p>
																<p>
																	<span><bdt className="block-component" /></span>
																</p>
																<ul>
																	<li>
																		<span>
																			<span>
																				<span>
																					<span data-custom-class="body_text">
																						Category B. Personal information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history
																						and financial information.
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									<span><bdt className="statement-end-if-in-editor" /></span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</li>
																</ul>
																<p>
																	<span><bdt className="forloop-component" /></span>
																</p>
																<p>
																	<span><bdt className="forloop-component" /><bdt className="block-component" /></span>
																	<span data-custom-class="body_text">
																		<span><bdt className="forloop-component" /></span>
																	</span>
																</p>
																<p>
																	<span><bdt className="forloop-component" /></span>
																</p>
																<p>
																	<span><bdt className="forloop-component" /><bdt className="block-component" /></span>
																</p>
																<ul>
																	<li>
																		<span>
																			<span>
																				<span>
																					<span data-custom-class="body_text">
																						Category D. Commercial information, such as transaction information, purchase history, financial details and payment information.
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									<span><bdt className="statement-end-if-in-editor" /></span>
																								</span>
																							</span>
																							<span data-custom-class="body_text">
																								<span><bdt className="forloop-component" /></span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</li>
																</ul>
																<p>
																	<span><bdt className="forloop-component" /></span>
																</p>
																<p>
																	<span><bdt className="forloop-component" /><bdt className="block-component" /></span>
																</p>
																<ul>
																	<li>
																		<span>
																			<span>
																				<span>
																					<span data-custom-class="body_text">
																						Category E. Biometric information, such as fingerprints and voiceprints.
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									<span><bdt className="statement-end-if-in-editor" /></span>
																								</span>
																							</span>
																							<span data-custom-class="body_text">
																								<span><bdt className="forloop-component" /></span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</span>
																		</span>
																	</li>
																</ul>
																<p>
																	<span><bdt className="forloop-component" /></span>
																</p>
																<div>
																	<span><bdt className="forloop-component" /></span><bdt className="block-component"><span /></bdt>
																	<span data-custom-class="body_text">
																		<span><bdt className="forloop-component" /></span>
																	</span>
																	<p><bdt className="forloop-component" /></p>
																	<p>
																		<bdt className="forloop-component" /><bdt className="block-component" />
																		<span data-custom-class="body_text">
																			<span>
																				<span><bdt className="forloop-component" /></span>
																			</span>
																		</span>
																	</p>
																	<p>
																		<bdt className="forloop-component"><span /></bdt>
																	</p>
																	<p>
																		<span><bdt className="forloop-component" /><bdt className="block-component" /></span>
																		<span data-custom-class="body_text">
																			<span><bdt className="forloop-component" /></span>
																		</span>
																	</p>
																	<div>
																		<span><bdt className="forloop-component" /></span>
																		<div>
																			<bdt className="forloop-component"><span /></bdt><bdt className="block-component"><span /></bdt>
																		</div>
																		<ul>
																			<li>
																				<span>
																					<span>
																						<span data-custom-class="body_text">
																							Category I. Professional or employment-related information, such as business contact details in order to provide you our services at a business level, job title as
																							well as work history and professional qualifications if you apply for a job with us.
																							<span>
																								<span>
																									<span data-custom-class="body_text">
																										<span>
																											<span>
																												<span>
																													<span>
																														<span>
																															<span><bdt className="statement-end-if-in-editor" /></span>
																														</span>
																													</span>
																												</span>
																												<bdt className="forloop-component" />
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</span>
																			</li>
																		</ul>
																		<div>
																			<bdt className="forloop-component"><span /></bdt>
																			<div>
																				<bdt className="forloop-component"><span /></bdt><bdt className="block-component"><span /></bdt>
																			</div>
																			<ul>
																				<li>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								Category J. Education information, such as student records and directory information.
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span><bdt className="statement-end-if-in-editor" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																										<span data-custom-class="body_text">
																											<span>
																												<span><bdt className="forloop-component" /></span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</li>
																			</ul>
																			<div>
																				<bdt className="block-component"><span /></bdt>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "
																								<span>
																									<span><a data-custom-class="link" href="#whoshare">WHO WILL YOUR INFORMATION BE SHARED WITH?</a></span>
																								</span>
																								<span>
																									<span>
																										<span>
																											<span>
																												<span>
																													<span>
																														<span>
																															<span>
																																<span data-custom-class="body_text"><span>"</span></span>
																															</span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																								.
																								<span>
																									<span>
																										<span>
																											<span>
																												<span>
																													<span>
																														<span>
																															<span>
																																<span data-custom-class="body_text">
																																	<span>
																																		<span>
																																			<span>
																																				<span>
																																					<span>
																																						<span>
																																							<span>
																																								<span>
																																									<span>
																																										<span data-custom-class="body_text">
																																											<bdt className="statement-end-if-in-editor">
																																												<span>
																																													<span>
																																														<span>
																																															<span>
																																																<span>
																																																	<span>
																																																		<span>
																																																			<span>
																																																				<span data-custom-class="body_text">
																																																					<bdt
																																																						className="statement-end-if-in-editor"
																																																					/>
																																																				</span>
																																																			</span>
																																																		</span>
																																																	</span>
																																																</span>
																																															</span>
																																														</span>
																																													</span>
																																												</span>
																																											</bdt>
																																										</span>
																																									</span>
																																								</span>
																																							</span>
																																						</span>
																																					</span>
																																				</span>
																																			</span>
																																		</span>
																																	</span>
																																</span>
																															</span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																								<span>
																									<span data-custom-class="body_text"><bdt className="block-component" /></span>
																								</span>
																							</span>
																						</span>
																					</span>
																					<span data-custom-class="body_text">
																						<bdt className="block-component">
																							<span>
																								<span data-custom-class="body_text"><bdt className="block-component" /></span>
																							</span>
																						</bdt>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text"><strong>Your rights with respect to your personal data</strong></span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text"><u>Right to request deletion of the data - Request to delete</u></span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your
																								personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free
																								speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text"><u>Right to be informed - Request to know</u></span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								Depending on the circumstances, you have a right to know:
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									whether we collect and use your personal information;
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									the categories of personal information that we collect;
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									the purposes for which the collected personal information is used;
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									whether we sell your personal information to third parties;
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									the categories of personal information that we sold or disclosed for a business purpose;
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									the business or commercial purpose for collecting or selling personal information.
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to
																								re-identify individual data to verify a consumer request.
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text"><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span><span data-custom-class="body_text">We will not discriminate against you if you exercise your privacy rights.</span></span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text"><u>Verification process</u></span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These
																								verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance,
																								depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information
																								we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use
																								other verification methods as the circumstances dictate.
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid
																								requesting additional information from you for the purposes of verification. If, however, if we cannot verify your identity from the information already
																								maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention
																								purposes. We will delete such additionally provided information as soon as we finish verifying you.
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text"><u>Other privacy rights</u></span>
																						</span>
																					</span>
																				</div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									you may object to the processing of your personal data
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text">
																															<span>
																																<span>
																																	<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																																</span>
																															</span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text">
																															<span>
																																<span>
																																	<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																																</span>
																															</span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit
																									proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text">
																															<span>
																																<span>
																																	<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																																</span>
																															</span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span data-custom-class="body_text">
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<span>
																															<span data-custom-class="body_text"><bdt className="block-component" /></span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<ul>
																					<li>
																						<span>
																							<span>
																								<span data-custom-class="body_text">
																									you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the
																									request as soon as feasibly possible, but no later than 15 days from the date of the request submission.
																									<span>
																										<span>
																											<span data-custom-class="body_text">
																												<span>
																													<span>
																														<span data-custom-class="body_text">
																															<span>
																																<span>
																																	<span data-custom-class="body_text"><bdt className="statement-end-if-in-editor" /></span>
																																</span>
																															</span>
																														</span>
																													</span>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</li>
																				</ul>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">To exercise these rights, you can contact us&nbsp;</span>
																							<span>
																								<span data-custom-class="body_text">
																									<span>
																										<span data-custom-class="body_text">
																											<bdt className="block-component" />by email at <bdt className="question">hello@elenacalvillo.com</bdt>, <bdt className="block-component" />
																											<bdt className="block-component" />
																										</span>
																										<span data-custom-class="body_text">
																											<bdt className="block-component" /><bdt className="block-component"><span data-custom-class="body_text" /></bdt>
																										</span>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																					<span data-custom-class="body_text">
																						or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
																					</span>
																					<span>
																						<span data-custom-class="body_text"><bdt className="block-component" /></span>
																					</span>
																					<span data-custom-class="body_text">
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span data-custom-class="body_text">
																										<bdt className="statement-end-if-in-editor"><span data-custom-class="body_text" /></bdt>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div id="policyupdates">
																					<span>
																						<span>
																							<span>
																								<span>
																									<span id="control">
																										<strong><span data-custom-class="heading_1">12. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong>&nbsp;
																									</span>
																									&nbsp;
																								</span>
																								&nbsp;
																							</span>
																							&nbsp;
																						</span>
																						&nbsp;
																					</span>
																				</div>
																				<div>
																					<em><br /></em>
																				</div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<em><strong>In Short:&nbsp;</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be
																								effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such
																								changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your
																								information.
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div id="contact">
																					<span>
																						<span>
																							<span>
																								<span>
																									<span id="control">
																										<strong><span data-custom-class="heading_1">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong>&nbsp;
																									</span>
																									&nbsp;
																								</span>
																								&nbsp;
																							</span>
																							&nbsp;
																						</span>
																						&nbsp;
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								If you have questions or comments about this notice, you may
																								<span>
																									<span data-custom-class="body_text">
																										<bdt className="block-component" />email us at <bdt className="question">hello@elenacalvillo.com</bdt><bdt className="statement-end-if-in-editor" />
																									</span>
																								</span>
																								or by post to:
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								<span>
																									<span>
																										<span>
																											<span data-custom-class="body_text"><bdt className="question">Elena Calvillo</bdt></span>
																										</span>
																									</span>
																								</span>
																							</span>
																							<span data-custom-class="body_text">
																								<span>
																									<span data-custom-class="body_text"><bdt className="block-component" /></span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<div>
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="question">__________</bdt>
																							<span>
																								<span><bdt className="block-component" /></span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<div>
																					<span>
																						<span data-custom-class="body_text">
																							<bdt className="question">Guadalajara</bdt>
																							<span>
																								<span>
																									<bdt className="block-component" />, <bdt className="question">Jalisco</bdt><bdt className="statement-end-if-in-editor" />
																									<bdt className="block-component" /> <bdt className="question">45080</bdt><bdt className="statement-end-if-in-editor" />
																								</span>
																								<span><bdt className="block-component" /><bdt className="block-component" /></span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<div>
																					<span>
																						<span data-custom-class="body_text">
																							<span>
																								<span data-custom-class="body_text">
																									<span><bdt className="block-component" /></span>
																								</span>
																							</span>
																							<bdt className="question">Mexico</bdt>
																							<span>
																								<span data-custom-class="body_text">
																									<span>
																										<bdt className="statement-end-if-in-editor">
																											<span>
																												<span data-custom-class="body_text">
																													<span>
																														<bdt className="statement-end-if-in-editor">
																															<span>
																																<span data-custom-class="body_text">
																																	<span><bdt className="statement-end-if-in-editor" /></span>
																																</span>
																															</span>
																														</bdt>
																														<bdt className="statement-end-if-in-editor" />
																													</span>
																												</span>
																											</span>
																											<span data-custom-class="body_text">
																												<span>
																													<span><bdt className="statement-end-if-in-editor" /></span>
																												</span>
																											</span>
																											<span>
																												<span>
																													<span data-custom-class="body_text">
																														<bdt className="block-component"><bdt className="block-component" /></bdt>
																													</span>
																												</span>
																											</span>
																										</bdt>
																									</span>
																								</span>
																							</span>
																						</span>
																					</span>
																				</div>
																				<div><br /></div>
																				<div id="request">
																					<span>
																						<span>
																							<span>
																								<span>
																									<span id="control">
																										<strong><span data-custom-class="heading_1">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong>&nbsp;
																									</span>
																									&nbsp;
																								</span>
																								&nbsp;
																							</span>
																							&nbsp;
																						</span>
																						&nbsp;
																					</span>
																				</div>
																				<div><br /></div>
																				<div>
																					<span>
																						<span>
																							<span data-custom-class="body_text">
																								Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information,
																								or delete it in some circumstances. To request to review, update, or delete your personal information, please <bdt className="block-component" />submit a
																								request form by clicking&nbsp;
																							</span>
																							<span>
																								<span data-custom-class="body_text">
																									<span>
																										<a data-custom-class="link" href="https://app.termly.io/notify/f2aeca7d-0172-458b-af70-33a5777b9fdd" rel="noopener noreferrer" target="_blank">here</a>
																									</span>
																								</span>
																							</span>
																							<bdt className="block-component"><span data-custom-class="body_text" /></bdt>
																						</span>
																					</span>
																					<span data-custom-class="body_text">. We will respond to your request within 30 days.</span>
																				</div>
																			</div>
																			<div>This privacy policy was created using <a href="https://termly.io/products/privacy-policy-generator/?ftseo">Termly’s Privacy Policy Generator</a>.</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</Layout>
	);
};

export default Privacy;

export const pageQuery = graphql`
  query {
	site {
	  siteMetadata {
		title
	  }
	}
  }
`;
