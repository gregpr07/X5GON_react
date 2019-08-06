import React from 'react';
import './css/bootstrap.css';
import './css/feed.css';
import './css/animate.css';
import { Navbar } from './Components';

class Team extends React.Component {
	Team = () => {
		return (
			<main role="main">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="doc-navigation">
								<ul>
									<li>
										<a className="doc" href="#connect-service">
											Connect Service
										</a>
									</li>
									<li>
										<a className="doc" href="#connect-recommender">
											Connect Recommender
										</a>
									</li>
									<li>
										<a className="doc" href="#rest-api">
											REST API
										</a>
										<ul>
											<li>
												<a className="doc" href="#recommender-rest-api">
													Recommender REST API
												</a>
												<ul>
													<li>
														<a
															className="doc route"
															href="#get-list-of-rec-materials"
														>
															GET search for relevant materials
														</a>
													</li>
													<li>
														<a
															className="doc route"
															href="#get-list-of-rec-materials-2"
														>
															GET recommended materials
														</a>
													</li>
													<li>
														<a
															className="doc route"
															href="#get-list-of-rec-bundles"
														>
															GET recommended bundles (web pages)
														</a>
													</li>
													<li>
														<a
															className="doc route"
															href="#get-list-of-rec-collaborative"
														>
															GET personalized recommended bundles (web pages)
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a className="doc" href="#query-rest-api">
													Query REST API
												</a>
												<ul>
													<li>
														<a className="doc route" href="#get-list-of-oers">
															GET list of materials
														</a>
													</li>
													<li>
														<a className="doc route" href="#post-list-of-oers">
															POST list of materials
														</a>
													</li>
													<li>
														<a className="doc route" href="#get-info-about-oer">
															GET specific material
														</a>
													</li>
													<li>
														<a
															className="doc route"
															href="#get-list-of-oer-contents"
														>
															GET list of material contents
														</a>
													</li>
													<li>
														<a
															className="doc route"
															href="#get-info-about-oer-content"
														>
															GET specific material content
														</a>
													</li>
													<li>
														<a
															className="doc route"
															href="#get-info-about-oer-content-value"
														>
															GET the body value of a specific material content
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<h1>API Documentation</h1>
							<p className="information">
								This document contains the X5GON platform REST API
								documentation. It contains all of the API routes and their
								explanation; the route, the possible parameters, and the
								response. The document is split into sections based on the
								functionality of the API routes.
							</p>
							<div className="anchor" id="connect-service" />
							<h2 className="doc doc__section mt-5 mb-3">Connect Service</h2>
							<p className="information">
								The library that enables connection between the OER repository
								and the X5GON platform. The full documentation of the library is
								available <a href="/docs/x5gon-docs.pdf">HERE</a>.
							</p>
							<div className="doc url_baseline p-4 mb-3">
								<p className="information">
									<b className="doc">
										https://platform.x5gon.org/api/v1/snippet/{'{'}version{'}'}
										/x5gon-log.min.js
									</b>
								</p>
							</div>
							<h6 className="mt-2">Library URL parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">version</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Library
												Version
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> false
											</td>
											<td>
												The version of the library. The options are: v1, v2, and
												latest. If latest, it will automatically take the latest
												version available.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								To include the library add the following line in the repository
								site header. Replace the <b className="doc">latest</b> parameter
								with the appropriate library URL parameter value.
							</p>
							<div className="doc url_baseline p-4 mb-3">
								<p className="information">
									&lt;script
									<br /> &nbsp;&nbsp;&nbsp;&nbsp; type="text/javascript"
									<br /> &nbsp;&nbsp;&nbsp;&nbsp;
									src="https://platform.x5gon.org/api/v1/snippet/
									<b className="doc">latest</b>/x5gon-log.min.js"
									<br /> &gt;&lt;/script&gt;
								</p>
							</div>
							<div className="anchor" id="connect-recommender" />
							<h2 className="doc doc__section mt-5 mb-3">
								Connect Recommender
							</h2>
							<p className="information">
								Enables embedding of recommendations into HTML. The request URL
								is different, as shown below.
							</p>
							<div className="doc url_baseline p-4 mb-3">
								<p className="information">
									<b className="doc">
										https://platform.x5gon.org/embed/recommendations?text=text&amp;url=url&amp;width=width&amp;height=height
									</b>
								</p>
							</div>
							<h6 className="mt-2">Query string parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">text</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Query
												Text
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The query text. Longer text provides better results. If
												both text and url query parameters are present,{' '}
												<b className="doc">url</b> has the priority.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">url</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Query URL
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The query URL. The URL must be associated with a
												material stored in the X5GON database. If no such URL is
												found, it uses the
												<b className="doc">text</b> query parameter, if present.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">width</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Container
												Width
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The embedded containers width. Used to setup the
												container into HTML.
												<b className="doc">Default value</b> is <b>280px</b>.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">height</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Container
												Height
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The embedded containers maximum height. Used to setup
												the container into HTML.
												<b className="doc">Default value</b> is <b>400px</b>.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="doc doc__subsection mt-2">Embedding example</h6>
							<p className="information">
								The recommendation results can be embedded by using different
								tags. The example shows how to embed the recommendation results
								using the
								<code>iframe</code> tag. We only use the{' '}
								<b className="doc">text</b> query parameter for the
								recommendations, and both <b className="doc">width</b> and
								<b className="doc">height</b> parameters to assign the size of
								the embedded page.
								<br />
								<b className="doc">NOTE:</b> the difference between the{' '}
								<b className="doc">height</b> query parameter and the iframes{' '}
								<b className="doc">height</b> style, which is 25px. This is due
								to the iframes default configuration.
							</p>
							<div className="doc url_baseline p-4 mb-3">
								<p className="information">
									&lt;iframe
									<br /> &nbsp;&nbsp;&nbsp;&nbsp;
									src="https://platform.x5gon.org/embed/recommendations?
									<b className="doc">text</b>=machine%20learning&amp;
									<b className="doc">width</b>=100%25&amp;
									<b className="doc">height</b>=400px"
									<br /> &nbsp;&nbsp;&nbsp;&nbsp;
									style="border:0px;width:100%;height:425px"
									<br /> &gt;&lt;/iframe&gt;
								</p>
							</div>
							<p className="information">
								The representation of the embedded recommendations.
							</p>
							<iframe
								className="d-block mx-auto"
								src="https://platform.x5gon.org/embed/recommendations?text=machine%20learning&width=100%25&height=400px"
								style={{ border: '0px', width: '100%', height: '425px' }}
								title="iframe"
							/>
							<div className="anchor" id="rest-api" />
							<h2 className="doc doc__section mt-4">REST API</h2>
							<p className="information">
								All URLs referenced in the REST API section have the following
								base:
							</p>
							<div className="doc url_baseline p-4 mb-3">
								<p className="information">
									<b className="doc">https://platform.x5gon.org/api/v1</b>
								</p>
							</div>
							<p className="information">
								The X5GON Platform REST API is served over HTTPS.
							</p>
							<div className="anchor" id="recommender-rest-api" />
							<h3 className="doc doc__section mt-5">Recommender REST API</h3>
							<p className="information">
								The Recommender REST API allows the user to retrieve OER
								materials that are similar to the given query.
							</p>
							<h6 className="mt-2">Available methods</h6>
							<div className="table-responsive">
								<table className="table table-borderless table-hover">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
											<th className="doc doc__method description" />
										</tr>
									</thead>
									<tbody>
										<tr
											className="clickable-row"
											data-href="#get-list-of-rec-materials"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>/search</td>
											<td>Get a list of relevant open educational resources</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#get-list-of-rec-materials-2"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>/recommend/oer_materials</td>
											<td>Get a list of relevant open educational resources</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#get-list-of-rec-bundles"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>/recommend/oer_bundles</td>
											<td>
												Get a list of most relevant open educational bundles
											</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#get-list-of-rec-collaborative"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>/recommend/collaborative_filtering</td>
											<td>
												Get a list of personalized open educational bundles
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-list-of-rec-materials" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Search for relevant materials
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>/search</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get a list of relevant open educational resources (10 per page).
							</p>
							<h6 className="mt-2">Query string parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">text</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Query
												Text
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> false
											</td>
											<td>
												The seed text from which the system finds the relevant
												open educational resources.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">type</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Type
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The type of open educational resources. Possible
												options: all, video, audio and text.
												<b className="doc">Default value</b> is <b>all</b>.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">page</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Page
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The page number of the recommended list.
												<b className="doc">Default value</b> is <b>1</b>.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">query</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> JSON
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Query
												Parameters
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												A JSON object containing the provided query parameters.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">query object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">text</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Query Text
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The user provided query text.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Type
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The material type provided.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">page</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Result Page
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The page number of the results.</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">rec_materials</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span>{' '}
												Recommended Materials
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												An array of objects, each representing an recommended
												open educational resource.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">rec_materials object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">material_id</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material ID
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The unique ID of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">weight</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Float
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Recommendation Weight
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The number between 0 and 1 representing the
																relevance of the OER material. Greater weight
																means bigger relevance.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">url</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material URL
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The URL of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">title</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Title
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The title of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">description</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Description
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The description of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">provider</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Provider
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The name of the OER materials provider.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">language</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Language
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The language of the OER material in ISO 639-1
																code.
															</td>
														</tr>
														<tr className="no-bottom-border">
															<td>
																<b className="doc">wikipedia</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Array
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Wikipedia Concepts
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																An array of objects, each representing the most
																relevant wikipedia concept of the material.
															</td>
														</tr>
														<tr className="no-top-border">
															<td colSpan={5}>
																<b className="doc">
																	wikipedia object properties
																</b>
																<table className="table table-dashed-borders table--third-level">
																	<thead>
																		<tr>
																			<th className="doc doc__query name" />
																			<th className="doc doc__query type" />
																			<th className="doc doc__query title" />
																			<th className="doc doc__query optional" />
																			<th className="doc doc__query description" />
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<b className="doc">concept</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				String
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The Wikipedia concept represented as an
																				URL.
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<b className="doc">support</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				Integer
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept Support
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The amount of elements in the material
																				that support the given Wikipedia
																				concept.
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Type
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The type of the OER material.</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">metadata</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> JSON
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Result
												Metadata
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												A JSON object containing the associated metadata.
												Helpful for navigating through the recommendations.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">metadata object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">num_or_materials</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Number of Found Materials
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																Number of most relevant relevant
																recommendations.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">max_pages</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Max Pages
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The total number of result pages.</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-list-of-rec-materials-2" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get a list of most relevant open educational resources (similar
								to <code>/search</code>)
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>/recommend/oer_materials</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get a list of most relevant open educational resources.
							</p>
							<h6 className="mt-2">Query string parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">text</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Query
												Text
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> false
											</td>
											<td>
												The seed text from which the system finds the relevant
												open educational resources.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">type</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Type
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The type of open educational resources. Possible
												options: all, video, audio and text.
												<b className="doc">Default value</b> is <b>all</b>.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">page</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Page
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The page number of the recommended list.
												<b className="doc">Default value</b> is <b>1</b>.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">rec_materials</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span>{' '}
												Recommended Materials
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												An array of objects, each representing an recommended
												open educational resource.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">rec_materials object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">material_id</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material ID
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The unique ID of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">weight</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Float
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Recommendation Weight
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The number between 0 and 1 representing the
																relevance of the OER material. Greater weight
																means bigger relevance.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">url</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material URL
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The URL of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">title</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Title
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The title of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">description</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Description
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The description of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">provider</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Provider
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The name of the OER materials provider.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">language</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Language
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The language of the OER material in ISO 639-1
																code.
															</td>
														</tr>
														<tr className="no-bottom-border">
															<td>
																<b className="doc">wikipedia</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Array
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Wikipedia Concepts
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																An array of objects, each representing the most
																relevant wikipedia concept of the material.
															</td>
														</tr>
														<tr className="no-top-border">
															<td colSpan={5}>
																<b className="doc">
																	wikipedia object properties
																</b>
																<table className="table table-dashed-borders table--third-level">
																	<thead>
																		<tr>
																			<th className="doc doc__query name" />
																			<th className="doc doc__query type" />
																			<th className="doc doc__query title" />
																			<th className="doc doc__query optional" />
																			<th className="doc doc__query description" />
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<b className="doc">concept</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				String
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The Wikipedia concept represented as an
																				URL.
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<b className="doc">support</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				Integer
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept Support
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The amount of elements in the material
																				that support the given Wikipedia
																				concept.
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Type
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The type of the OER material.</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-list-of-rec-bundles" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get a list of relevant open educational bundles (web pages)
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>/recommend/oer_bundles</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get a list of relevant open educational bundles (web pages).
							</p>
							<h6 className="mt-2">Query string parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">url</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> website
												URL
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> false
											</td>
											<td>
												The URL of the website containing the OER materials. The
												URL must be present in the X5GON database
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">page</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Page
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The page number of the recommended list.
												<b className="doc">Default value</b> is <b>1</b>.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">rec_bundles</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span>{' '}
												Recommended Bundles
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												An array of objects, each representing an recommended
												open educational resource bundle.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">rec_bundles object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">weight</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Float
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Recommendation Weight
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The number of common concepts between the given
																url bundle and this OER bundle. Greater weight
																means bigger relevance.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">url</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle URL
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The URL of the OER bundle.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">title</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Title
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The title of the OER bundle.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">description</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Description
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The description of the OER bundle.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">provider</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Provider
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The name of the OER bundle provider.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">language</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Language
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The dominant language of the OER bundle in ISO
																639-1 code.
															</td>
														</tr>
														<tr className="no-bottom-border">
															<td>
																<b className="doc">wikipedia</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Array
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Wikipedia Concepts
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																An array of objects, each representing the most
																relevant wikipedia concept of the bundle.
															</td>
														</tr>
														<tr className="no-top-border">
															<td colSpan={5}>
																<b className="doc">
																	wikipedia object properties
																</b>
																<table className="table table-dashed-borders table--third-level">
																	<thead>
																		<tr>
																			<th className="doc doc__query name" />
																			<th className="doc doc__query type" />
																			<th className="doc doc__query title" />
																			<th className="doc doc__query optional" />
																			<th className="doc doc__query description" />
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<b className="doc">concept</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				String
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The Wikipedia concept represented as an
																				URL.
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<b className="doc">support</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				Integer
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept Support
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The amount of elements in the material
																				that support the given Wikipedia
																				concept.
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Type
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The dominant type of the OER bundle.</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-list-of-rec-collaborative" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get a list of personalized open educational bundles
								recommendations
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>/recommend/collaborative_filtering</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get a list of personalized open educational bundles
								recommendations. The personalization is performed via the
								<a href="https://en.wikipedia.org/wiki/Collaborative_filtering">
									<b className="doc">collaborative filtering</b>
								</a>
								method.
							</p>
							<h6 className="mt-2">Query string parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">page</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Page
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The page number of the recommended list.
												<b className="doc">Default value</b> is <b>1</b>.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">rec_bundles</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span>{' '}
												Personalized Bundles
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												An array of objects, each representing an recommended
												open educational resource bundle.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">rec_bundles object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">weight</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Float
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Recommendation Weight
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The number of times the bundle was viewed by
																similar users. Greater weight means bigger
																relevance.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">url</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle URL
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The URL of the OER bundle.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">title</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Title
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The title of the OER bundle.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">description</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Description
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The description of the OER bundle.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">provider</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Provider
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The name of the OER bundle provider.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">language</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Language
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The dominant language of the OER bundle in ISO
																639-1 code.
															</td>
														</tr>
														<tr className="no-bottom-border">
															<td>
																<b className="doc">wikipedia</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Array
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Wikipedia Concepts
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																An array of objects, each representing the most
																relevant wikipedia concept of the bundle.
															</td>
														</tr>
														<tr className="no-top-border">
															<td colSpan={5}>
																<b className="doc">
																	wikipedia object properties
																</b>
																<table className="table table-dashed-borders table--third-level">
																	<thead>
																		<tr>
																			<th className="doc doc__query name" />
																			<th className="doc doc__query type" />
																			<th className="doc doc__query title" />
																			<th className="doc doc__query optional" />
																			<th className="doc doc__query description" />
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<b className="doc">concept</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				String
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The Wikipedia concept represented as an
																				URL.
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<b className="doc">support</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				Integer
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Wikipedia Concept Support
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The amount of elements in the material
																				that support the given Wikipedia
																				concept.
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Bundle Type
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The dominant type of the OER bundle.</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="query-rest-api" />
							<h3 className="doc doc__section mt-5">Query REST API</h3>
							<p className="information">
								This section contains the API routes for retrieving resources
								based on the query parameters. It contains different examples of
								resource retrieval based on the provided query parameters.
								<b className="doc">NOTE:</b> Some of the API routes are private
								and are available only to those who have special credentials.
							</p>
							<h5 className="doc doc__subsection mt-2">
								Query REST API: Open Educational Resources
							</h5>
							<p className="information">
								The Open Educational Resources REST API allows the user to
								retrieve OER materials.
							</p>
							<h6 className="mt-2">Available methods</h6>
							<div className="table-responsive">
								<table className="table table-borderless table-hover">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
											<th className="doc doc__method description" />
										</tr>
									</thead>
									<tbody>
										<tr className="clickable-row" data-href="#get-list-of-oers">
											<td>
												<b className="doc">GET</b>
											</td>
											<td>/oer_materials</td>
											<td>Get a list of open educational resources</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#post-list-of-oers"
										>
											<td>
												<b className="doc">POST</b>
											</td>
											<td>/oer_materials</td>
											<td>Upload a list of open educational resources</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#get-info-about-oer"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												/oer_materials/{'{'}material_id{'}'}
											</td>
											<td>
												Get information of a specific open educational resource
											</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#get-list-of-oer-contents"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												/oer_materials/{'{'}material_id{'}'}/contents
											</td>
											<td>
												Get a list of content of a specific open educational
												resource
											</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#get-info-about-oer-content"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												/oer_materials/{'{'}material_id{'}'}/contents/{'{'}
												content_id{'}'}
											</td>
											<td>
												Get information of a specific content of a specific open
												educational resource
											</td>
										</tr>
										<tr
											className="clickable-row"
											data-href="#get-info-about-oer-content-value"
										>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												/oer_materials/{'{'}material_id{'}'}/contents/{'{'}
												content_id{'}'}/value
											</td>
											<td>
												Get the body value of a specific content of a specific
												open educational resource
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-list-of-oers" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get a list of open educational resources
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>/oer_materials</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get a list of open educational resources.
							</p>
							<h6 className="mt-2">Query string parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">languages</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Languages
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												A comma-separated list of languages in ISO 639-1 code.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">limit</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Limit
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The number of records to return.
												<b className="doc">Default value</b> is <b>20</b>.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">offset</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Offset
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The number of records from a collection to skip.
												Iterating over large collections with this parameter can
												be slow.
												<b className="doc">Default value</b> is <b>0</b>.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">page</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Page
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> true
											</td>
											<td>
												The page number of the record collection. It overrides
												the offset parameter.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">oer_materials</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span> OER
												Materials
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												An array of objects, each representing an open
												educational resource.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">oer_materials object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">material_id</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material ID
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The unique ID of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">title</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Title
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The title of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">description</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Description
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The description of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">url</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material URL
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The URL of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">language</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Language
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The language of the OER material in ISO 639-1
																code.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Type
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The type of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">mimetype</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Mimetype
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The mimetype of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">content_ids</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Array
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Content IDs
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The IDs of the material contents. Can be
																accessed through
																<a href="#get-info-about-oer-content">
																	content info method
																</a>
																.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">provider</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																JSON
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Provider
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The JSON object containing the provider's name
																and domain.
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="post-list-of-oers" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Upload a list of open educational resources
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">POST</b>
											</td>
											<td>
												<b>/oer_materials</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Uploads a list of open educational resources.
							</p>
							<h6 className="mt-2">Request body parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">api_key</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> API Key
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> false
											</td>
											<td>
												The API key used to submit the OER materials.
												<b className="doc">NOTE:</b> to obtain an API key,
												please contact the project administrator.
											</td>
										</tr>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">oer_materials</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span> OER
												Materials
											</td>
											<td>
												<span className="doc doc--small">Optional:</span> false
											</td>
											<td>
												An array of objects, each representing an open
												educational resource.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">oer_materials object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">title</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Title
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																false
															</td>
															<td>The title of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">description</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Description
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																true
															</td>
															<td>The description of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">provider_uri</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Provider URI
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																false
															</td>
															<td>
																The URL of the webpage on which the material is
																located.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">material_url</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material URL
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																false
															</td>
															<td>The URL of the OER material.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">language</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Language
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																false
															</td>
															<td>
																The language of the OER material in ISO 639-1
																code.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Type
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																false
															</td>
															<td>
																An object containing the type information of an
																open educational resource.
															</td>
														</tr>
														<tr className="no-top-border">
															<td colSpan={5}>
																<b className="doc">type object properties</b>
																<table className="table table-dashed-borders table--third-level">
																	<thead>
																		<tr>
																			<th className="doc doc__query name" />
																			<th className="doc doc__query type" />
																			<th className="doc doc__query title" />
																			<th className="doc doc__query optional" />
																			<th className="doc doc__query description" />
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<b className="doc">ext</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				String
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Material Extension
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Optional:
																				</span>{' '}
																				false
																			</td>
																			<td>
																				The extension of the material (i.e.
																				.pdf, .mov, etc).
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<b className="doc">mime</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				String
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Material Mimetype
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Optional:
																				</span>{' '}
																				false
																			</td>
																			<td>The mimetype of the material.</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">date_created</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Datetime
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Creation Date
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																true
															</td>
															<td>
																The date of the materials creation.
																<b className="doc">Format</b> is{' '}
																<b>YYYY-MM-DD</b>.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">provider_token</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material Provider Token
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																false
															</td>
															<td>
																The token of the material provider. Token must
																be first created via the
																<a href="/join" className="doc">
																	registration form
																</a>
																.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">license</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material License
															</td>
															<td>
																<span className="doc doc--small">
																	Optional:
																</span>{' '}
																false
															</td>
															<td>
																The material license. Since we are dealing with
																OER materials, the license should be CC-BY.
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">num_submitted</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Number of
												Materials Submitted
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>Number of successfully submitted materials.</td>
										</tr>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">errors</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Object
											</td>
											<td>
												<span className="doc doc--small">Title:</span>{' '}
												Submission Errors
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The object containing submission error information.
												<b className="doc">NOTE:</b> only present if there are
												any errors.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">errors object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">message</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Error Message
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The submission error message.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">invalid_count</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Invalid Count
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>Number of invalid materials.</td>
														</tr>
														<tr>
															<td>
																<b className="doc">invalid_materials</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Array
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Invalid Materials
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																An array of not valid material objects format.
															</td>
														</tr>
														<tr className="no-top-border">
															<td colSpan={5}>
																<b className="doc">
																	invalid_materials object properties
																</b>
																<table className="table table-dashed-borders table--third-level">
																	<thead>
																		<tr>
																			<th className="doc doc__query name" />
																			<th className="doc doc__query type" />
																			<th className="doc doc__query title" />
																			<th className="doc doc__query optional" />
																			<th className="doc doc__query description" />
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<b className="doc">material</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				Object
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				OER Material
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				The OER material object with a not valid
																				format.
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<b className="doc">errors</b>
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Type:
																				</span>{' '}
																				Array
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Title:
																				</span>{' '}
																				Material Errors
																			</td>
																			<td>
																				<span className="doc doc--small">
																					Read only:
																				</span>{' '}
																				true
																			</td>
																			<td>
																				An array of errors telling why is the
																				material object not valid.
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-info-about-oer" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get information of a specific open educational resource
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>
													/oer_materials/{'{'}material_id{'}'}
												</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get information of a specific open educational resource.
							</p>
							<h6 className="mt-2">Path parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">material_id</b>
											</td>
											<td>The unique ID of the open educational resource.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">material_id</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												ID
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>The unique ID of the OER material.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">title</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Title
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>The title of the OER material.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">description</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Description
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>The description of the OER material.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">url</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												URL
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>The URL of the OER material.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">language</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Language
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The language of the OER material in ISO 639-1 code.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">type</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Type
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>The type of the OER material.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">mimetype</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Mimetype
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>The mimetype of the OER material.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">content_ids</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Content IDs
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The IDs of the material contents. Can be accessed
												through
												<a href="#get-info-about-oer-content">
													content info method
												</a>
												.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">provider</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> JSON
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Material
												Provider
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												get-list-of-oer-contents The JSON object containing the
												provider's name and domain.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-list-of-oer-contents" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get a list of content of a specific open educational resource
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>
													/oer_materials/{'{'}material_id{'}'}/contents
												</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get a list of content of a specific open educational resource.
							</p>
							<h6 className="mt-2">Path parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">material_id</b>
											</td>
											<td>The unique ID of the open educational resource.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">oer_materials</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> JSON
											</td>
											<td>
												<span className="doc doc--small">Title:</span> OER
												Materials
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The JSON object of the OER material with ID equal to
												<code>material_id</code> (path parameter).
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">oer_materials object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">material_id</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Material ID
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>The unique ID of the OER material.</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr className="no-bottom-border">
											<td>
												<b className="doc">oer_contents</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Array
											</td>
											<td>
												<span className="doc doc--small">Title:</span> OER
												Material Contents
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												An array of objects, each representing a content of the
												open educational resource.
											</td>
										</tr>
										<tr className="no-top-border">
											<td colSpan={5}>
												<b className="doc">oer_contents object properties</b>
												<table className="table table-dashed-borders table--second-level">
													<thead>
														<tr>
															<th className="doc doc__query name" />
															<th className="doc doc__query type" />
															<th className="doc doc__query title" />
															<th className="doc doc__query optional" />
															<th className="doc doc__query description" />
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<b className="doc">content_id</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																Integer
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Content ID
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The unique ID of the content of OER material.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">type</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Content Type
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The type of content. Possible types:
																text_extraction, transcription, or translation.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">extension</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Content Extension
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The extension of content. Possible types: plain,
																or dfxp.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">value</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																JSON
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Content Value
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The value of the content. Dependant of the
																content type and extension.
															</td>
														</tr>
														<tr>
															<td>
																<b className="doc">language</b>
															</td>
															<td>
																<span className="doc doc--small">Type:</span>{' '}
																String
															</td>
															<td>
																<span className="doc doc--small">Title:</span>{' '}
																Content Language
															</td>
															<td>
																<span className="doc doc--small">
																	Read only:
																</span>{' '}
																true
															</td>
															<td>
																The language of the OER material in ISO 639-1
																code.
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-info-about-oer-content" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get information of a specific content of a specific open
								educational resource
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>
													/oer_materials/{'{'}material_id{'}'}/contents/{'{'}
													content_id{'}'}
												</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get information of a specific content of a specific open
								educational resource.
							</p>
							<h6 className="mt-2">Path parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">material_id</b>
											</td>
											<td>The unique ID of the open educational resource.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">content_id</b>
											</td>
											<td>The unique ID of the OER content.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response body attributes</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query title" />
											<th className="doc doc__query optional" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">content_id</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> Integer
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Content
												ID
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>The unique ID of the content of OER material.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">type</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Content
												Type
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The type of content. Possible types: text_extraction,
												transcription, or translation.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">extension</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Content
												Extension
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The extension of content. Possible types: plain, or
												dfxp.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">value</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> JSON
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Content
												Value
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The value of the content. Dependant of the content type
												and extension.
											</td>
										</tr>
										<tr>
											<td>
												<b className="doc">language</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												<span className="doc doc--small">Title:</span> Content
												Language
											</td>
											<td>
												<span className="doc doc--small">Read only:</span> true
											</td>
											<td>
												The language of the OER material in ISO 639-1 code.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="anchor" id="get-info-about-oer-content-value" />
							<h5 className="doc doc__subsection mt-5 mb-3">
								Get the body value of a specific content of a specific open
								educational resource
							</h5>
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">GET</b>
											</td>
											<td>
												<b>
													/oer_materials/{'{'}material_id{'}'}/contents/{'{'}
													content_id{'}'}/value
												</b>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="information">
								Get the body value of a specific content of a specific open
								educational resource.
							</p>
							<h6 className="mt-2">Path parameters</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__method request" />
											<th className="doc doc__method route" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">material_id</b>
											</td>
											<td>The unique ID of the open educational resource.</td>
										</tr>
										<tr>
											<td>
												<b className="doc">content_id</b>
											</td>
											<td>The unique ID of the OER content.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h6 className="mt-2">Response value</h6>
							<div className="table-responsive">
								<table className="table table-dashed-borders">
									<thead>
										<tr>
											<th className="doc doc__query name" />
											<th className="doc doc__query type" />
											<th className="doc doc__query description" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<b className="doc">content body</b>
											</td>
											<td>
												<span className="doc doc--small">Type:</span> String
											</td>
											<td>
												The body value of the content of a specific open
												educational resource.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	};
	render() {
		return (
			<div>
				<Navbar light={true} />
				<this.Team />
			</div>
		);
	}
}

export default Team;
