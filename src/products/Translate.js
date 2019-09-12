import React from 'react';
import '../css/bootstrap.css';
import '../css/components.css';
import { Link } from 'react-router-dom';
import { MoreProducts } from '../Components';
import { StandardHeader, MakeParagraphs } from './ProductsComponents';

export default class Translate extends React.Component {
	Description = () => {
		const contents = [
			[
				'While most translation services aim to be general purpose, we have optimized ours for OER content. We took great care in designing the Deep Neural Networks for acoustic modeling, speech recognition and machine translation, using thousands of selected OER materials and lectures from our case studies as training data. At this moment we have the following language pairs: German, Spanish, French, Italian, Slovenian to English, German to French and Portuguese to Spanish. More are coming.'
			],
			[
				'We created an Automatic Speech Recognition system for automatic transcription of OER in different languages, and then trained our Machine Translation tools for translating those OER. Our machine translation systems are on par with Google Translate for all our language pairs.'
			]
		];
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 pb-128 mb-0 text-purple">
						X5GON's Translate not just translates, but also transcribes any type
						of content from videos to textbooks. Using cutting-edge machine
						learning software, our service provides results that come close to
						human translations. Your text is processed within seconds and
						quality comparable with Google Translate.
					</h4>
					<MakeParagraphs object={contents} />
					<p className="p2 pt-128 pb-5 mb-3">Check the API</p>
					<this.Accordion />
				</div>
			</div>
		);
	};
	ServiceAPI = () => (
		<div className="maxer mx-auto translate-api">
			<div className="api-header">
				<h3 className="text-purple">Web Service API</h3>
				<ul>
					<li key={1}>
						<Link to="#translate">/translate</Link>
					</li>
					<li key={2}>
						<Link to="#ingest ">/ingest </Link>
					</li>
					<li key={3}>
						<Link to="#ingest_status">/ingest_status</Link>
					</li>
					<li key={4}>
						<Link to="#ingest_control">/ingest_control</Link>
					</li>
					<li key={5}>
						<Link to="#system_status">/system_status</Link>
					</li>
					<li key={6}>
						<Link to="#identify_language_(future)">
							/identify_language (future)
						</Link>
					</li>
				</ul>
			</div>
			<hr />
			<div className="api-docs maxer-880 text-purple">
				<div className="layoutArea">
					<div className="column">
						<p>
							Web Service is implemented as a Python Web Server Gateway
							Interface (WSGI) and a set of processes controlling data flow.
						</p>
						{/* <img
							src="/imgs/translate-api-schreme.png"
							alt="scheme"
							width="100%"
						/> */}
						<p>
							WSGI application is accepting API calls, which are then relayed:
						</p>
						<ul>
							<li>
								<p>
									via NMT Controller to NMT Core engines for direct translation
									or
								</p>
							</li>

							<li>
								<p>to database for queued translation</p>
							</li>
						</ul>
						<p>
							NMT Controller is responsible for starting new NMT Core engines
							with proper language pairs on the next free GPU or reusing the
							existing ones, returning the connection parameters for them. There
							can be several NMT Core engines (each with different language
							pair) running in parallel on different GPU cards as long as there
							is sufficient memory left on GPU cards. With the current
							configuration of 2 NVIDIA GeForce GTX 1080Ti with 11GB memory each
							there can be 8-9 concurrent NMT Core engines running in parallel.
						</p>
						<p>
							Queue Processor listens for notifications from database (or after
							timeout) and process new requests from the database queue via NMT
							Controller and NMT Core engines in the same way as WSGI
							application for direct translation. After the request has been
							processed, the callback (if specified in the API call) is
							executed. If there was no callback, one can get the result of
							translation via another API call.
						</p>
						<p>
							In the case of direct translation, the translation is returned as
							text (or in original format) and in all other cases the relevant
							data is returned as JSON data structure. If there has been an
							error processing request or some of the data hasn't been found, an
							appropriate HTTP 500 or 404 error is returned with more detailed
							explanation in the body of the returned HTML.
						</p>
						<p>
							Base URL for {/* TraMOOC */} Web service API is{' '}
							<a href="http://matterhorn.ijs.si/trans" target="blank">
								http://matterhorn.ijs.si/trans
							</a>
							.<br /> On top of that API defines the following set of HTTP
							interfaces:
						</p>
					</div>
				</div>
				<p>&nbsp;</p>
				<hr />
				<div id="translate">
					<h4 className="">/translate</h4>
					<p>
						Translates document immediately.
						<br />
						Limitations: size, frequency, number of queued documents, format,
						...
					</p>
					<p>&nbsp;</p>
					<p>Input (POST):</p>
					<ul className="list-items">
						<li>
							<b>auth</b> – authentication data (future, ignored)
							<ul>
								<li>Username/password, authentication key, ...</li>
								<li>Currently ignored</li>
							</ul>
						</li>
						<li>
							<b>src</b> – source language (future, optional)
							<ul>
								<li>Follows ISO 639-1 language code</li>
								<li>Currently only English ('en') is supported</li>
								<li>Default: 'en'</li>
							</ul>
						</li>
						<li>
							<b>dst</b> – destination language (required)
							<ul>
								<li>Follows ISO 639-1 language code</li>
								<li>
									Currently supported languages:
									<ul>
										<li>Bulgarian ('bg')</li>
										<li>Czech ('cs')</li>
										<li>German ('de')</li>
										<li>Greek ('el')</li>
										<li>Croatian ('hr')</li>
										<li>Italian ('it')</li>
										<li>Dutch ('nl')</li>
										<li>Polish ('pl')</li>
										<li>Portuguese ('pt')</li>
										<li>Russian ('ru')</li>
										<li>Chinese ('zh')</li>
									</ul>
								</li>
								<li>No default</li>
							</ul>
						</li>
						{/* blabla */}
						<li>
							<b>domain</b> – domain (optional)
							<ul>
								<li>Currently only 'informal' domain is supported</li>
								<li>Default: 'informal'</li>
							</ul>
						</li>
						{/* blabla */}
						{/* blabla */}
						<li>
							<b>type</b> – document format (optional)
							<ul>
								<li>
									Text, subtitle (WebVTT, srt, DFXP, ...), HTML, docx, pptx,
									PDF, ...
								</li>
								<li>Follows MIME type specification</li>
								<li>
									Currently the following formats are supported:
									<ul>
										<li>
											text ('text/plain')
											<br />
											subtitle ('text/vtt')
										</li>
										<li>
											Subtitle format is converted to and returned as WebVTT.
											<br />
											HTML ('text/html')
										</li>
										<li>
											Text inside {'<pre>'} and comment blocks is not
											translated.
										</li>
										<li>
											Microsoft Open XML documents:
											<ul>
												<li>
													MS Word docx (' application/vnd.openxmlformats-
													officedocument.wordprocessingml.document ')
												</li>
												<li>
													MS PowerPoint pptx (' application/vnd.openxmlformats-
													officedocument.presentationml.presentation')
												</li>
												<li>
													MS Excel xlsx (' application/vnd.openxmlformats-
													officedocument.spreadsheetml.sheet')
												</li>
												<li>Default: 'text/plain'</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						{/* blabla */}
						{/* blabla */}
						<li>
							<b>data</b> – document (data, required)
							<ul>
								<li>Should be encoded as UTF-8</li>
							</ul>
						</li>
					</ul>
					{/* blabla */}
					<p>&nbsp;</p>
					<p>Output (raw data):</p>
					<ul>
						<li>
							Translated document
							<ul>
								<li>Encoded as UTF-8</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p className="text-danger">Errors:</p>
					<ul>
						<li>
							500 Internal Server Error
							<ul>
								<li>All other possible errors</li>
							</ul>
						</li>
						<li>
							503 Service Unavailable
							<ul>
								<li>Translation service unavailable</li>
							</ul>
						</li>
						<li>
							400 Bad Request
							<ul>
								<li>Target language not present</li>
								<li>Invalid target language specified</li>
								<li>Zero length or no input data</li>
							</ul>
						</li>
					</ul>
					<p>
						Example &ndash; translate text in file sample.txt from English to
						German:
					</p>
					<div className="code-block">
						<p>
							$ curl -F dst=de -F type=text/plain -F data=@sample.txt -u
							user:password http://matterhorn.ijs.si/trans/translate
						</p>
						<p>200 OK</p>
						<p>...translated text...</p>
					</div>
					<p>
						Example &ndash; translate subtitle sample.vtt from English to
						Italian:
					</p>
					<div className="code-block">
						<p>
							$ curl -F dst=it -F type=text/vtt -F data=@sample.vtt -u
							user:password http://matterhorn.ijs.si/trans/translate
						</p>
						<p>200 OK</p>
						<p>...translated subtitle...</p>
					</div>
				</div>
				<hr />
				<div id="ingest">
					<h4>/ingest</h4>
					<p>
						Ingests a document into a queue for postponed translation.
						<br />
						Limitations: size, number of queued documents, format, &hellip;
					</p>
					<p>&nbsp;</p>
					<p>Input (POST):</p>
					<ul>
						<li>
							<strong>auth</strong>&ndash; authentication data (future, ignored)
							<ul>
								<li>Username/password, authentication key, &hellip;</li>
								<li>Currently ignored</li>
							</ul>
						</li>
						<li>
							<strong>src</strong>&ndash; source language (future, optional)
							<ul>
								<li>Follows ISO 639-1 language code</li>
								<li>Currently only English ('en') is supported</li>
								<li>Default: 'en'</li>
							</ul>
						</li>
						<li>
							<strong>dst</strong>&ndash; destination language (required)
							<ul>
								<li>Follows ISO 639-1 language code</li>
								<li>
									Currently supported languages:
									<ul>
										<li>Bulgarian ('bg')</li>
										<li>Czech ('cs')</li>
										<li>German ('de')</li>
										<li>Greek ('el')</li>
										<li>Croatian ('hr')</li>
										<li>Italian ('it')</li>
										<li>Dutch ('nl')</li>
										<li>Polish ('pl')</li>
										<li>Portuguese ('pt')</li>
										<li>Russian ('ru')</li>
										<li>Chinese ('zh')</li>
									</ul>
								</li>
								<li>No default</li>
							</ul>
						</li>
						<li>
							<strong>domain</strong>&ndash; domain (optional)
							<ul>
								<li>Currently only 'informal' domain is supported</li>
								<li>Default: 'informal'</li>
							</ul>
						</li>
						<li>
							<strong>type</strong>&ndash; document format (optional)
							<ul>
								<li>
									Text, subtitle (WebVTT, srt, DFXP, &hellip;), HTML, docx,
									pptx, PDF, &hellip;
								</li>
								<li>Follows MIME type specification</li>
								<li>
									Currently the following formats are supported:
									<ul>
										<li>text ('text/plain')</li>
										<li>
											subtitle ('text/vtt')
											<br />
											Subtitle format is converted to and returned as WebVTT.
										</li>
										<li>
											HTML ('text/html')
											<br />
											Text inside &lt;pre&gt; and comment blocks is not
											translated.
										</li>
										<li>
											Microsoft Open XML documents:
											<ul>
												<li>
													MS Word docx ('
													application/vnd.openxmlformats-officedocument.wordprocessingml.document
													')
												</li>
												<li>
													MS PowerPoint pptx ('
													application/vnd.openxmlformats-officedocument.presentationml.presentation')
												</li>
												<li>
													MS Excel xlsx ('
													application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
												</li>
											</ul>
										</li>
										<li>Default: 'text/plain'</li>
									</ul>
								</li>
								<li>
									<strong>data</strong>&ndash; document (data, required)
									<ul>
										<li>Should be encoded as UTF-8</li>
									</ul>
								</li>
								<li>
									<strong>prio</strong>&ndash; document priority (for queue,
									optional)
									<ul>
										<li>Integer value between 1 and 9</li>
										<li>Default: 5</li>
									</ul>
								</li>
								<li>
									<strong>callback</strong>&ndash; callback URL (optional)
									<ul>
										<li>
											HTTP or e-mail notification, executed when translation is
											done
										</li>
										<li>Follows URI specification</li>
										<li>
											Currently only e-mail notification
											('mailto:user@domain.com') is supported
										</li>
										<li>No default</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Output (JSON):</p>
					<ul>
						<li>Document ID</li>
						<li>Status (queued)</li>
						<li>Source language (en)</li>
						<li>Destination language</li>
						<li>Domain (informal)</li>
						<li>Document type</li>
						<li>Queue entered date</li>
						<li>Translation started date (null)</li>
						<li>Finished date (null)</li>
						<li>Translation status (null)</li>
						<li>Callback URL</li>
						<li>Priority</li>
						<li>Document size</li>
						<li>Queue position</li>
					</ul>
					<p>&nbsp;</p>
					<p className="text-danger">Errors:</p>
					<ul>
						<li>
							500 Internal Server Error
							<ul>
								<li>Insert into database failed</li>
								<li>All other possible errors</li>
							</ul>
						</li>
						<li>
							503 Service Unavailable
							<ul>
								<li>Translation service unavailable</li>
							</ul>
						</li>
						<li>
							400 Bad Request
							<ul>
								<li>Target language not present</li>
								<li>Invalid target language specified</li>
								<li>Zero length or no input data</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>
						Example &ndash; put text in file sample.txt into translation queue
						from English to German:
					</p>
					<div className="code-block">
						<p>
							$ curl -F dst=de -F callback=mailto:user@domain.com -F
							data=@sample.txt -u user:password
							http://matterhorn.ijs.si/trans/ingest
						</p>
					</div>
					<div className="json-colors">
						<p>{'{'}</p>
						<p>"id": 2,</p>
						<p>"status": "queued",</p>
						<p>"src_lang": "en",</p>
						<p>"dst_lang": "de",</p>
						<p>"domain": "informal",</p>
						<p>"type": "text/plain",</p>
						<p>"enter_date": "2017-10-31T12:31:53.052",</p>
						<p>"trans_date": null,</p>
						<p>"finish_date": null,</p>
						<p>"trans_status": null,</p>
						<p>"callback": "mailto:user@domain.com",</p>
						<p>"prio": 5,</p>
						<p>"size": 1536,</p>
						<p>"que_pos": 1</p>
						<p>}</p>
					</div>
					<p>&nbsp;</p>
					<p>
						When queued text has been processed, the following e-mail arrives:
					</p>
					<div className="code-block">
						<p>
							<em>From: Translation Service &lt;user@ijs.si&gt;</em>
						</p>
						<p>
							<em>Subject: Translated request id: 2 (en-de, plain text)</em>
						</p>
						<p>
							<em>&nbsp;</em>
						</p>
						<p>
							<em>Translated request id: 2</em>
						</p>
						<p>
							<em>Source language: en</em>
						</p>
						<p>
							<em>Target language: de</em>
						</p>
						<p>
							<em>Document type: text/plain</em>
						</p>
						<p>
							<em>Document size: 1536</em>
						</p>
						<p>
							<em>Entered in queue: 2017-10-31 12:31:53.052047</em>
						</p>
						<p>
							<em>Translation finished: 2017-10-31 12:50:45.183930</em>
						</p>
						<p>
							<em>Translation status: success</em>
						</p>
					</div>
					<p>&nbsp;</p>
					<p>Attached to the e-mail are two files:</p>
					<ul>
						<li>
							Original input text (random file name with an extension '.en.txt')
						</li>
						<li>
							Translated output text (random file name with an extension
							'.en-de.txt')
						</li>
					</ul>
				</div>
				<hr />
				<div id="ingest_status">
					<h4>/ingest_status</h4>
					<p>Returns status of queued document.</p>
					<p>&nbsp;</p>
					<p>Input (GET):</p>
					<ul>
						<li>
							<strong>auth</strong>&ndash; authentication data (future, ignored)
							<ul>
								<li>Username/password, authentication key, &hellip;</li>
								<li>Currently ignored</li>
							</ul>
						</li>
						<li>
							<strong>id</strong>&ndash; document ID (required)
							<ul>
								<li>as returned from /ingest API</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Output (JSON):</p>
					<ul>
						<li>Document ID</li>
						<li>Status (queued, finished or failed)</li>
						<li>Source language (en)</li>
						<li>Destination language</li>
						<li>Domain (informal)</li>
						<li>Document type</li>
						<li>Queue entered date</li>
						<li>Translation started date</li>
						<li>Finished date</li>
						<li>Translation status</li>
						<li>Callback URL</li>
						<li>Priority</li>
						<li>Document size</li>
						<li>Queue position</li>
					</ul>
					<p>&nbsp;</p>
					<p className="text-danger">Errors:</p>
					<ul>
						<li>
							500 Internal Server Error
							<ul>
								<li>All other possible errors</li>
							</ul>
						</li>
						<li>
							400 Bad Request
							<ul>
								<li>No document id specified or id is empty</li>
							</ul>
						</li>
						<li>
							404 Not Found
							<ul>
								<li>Document id &lt;n&gt; not found</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Example &ndash; check status of document in translation queue:</p>
					<div className="code-block">
						<p>
							$ curl -u user:password
							http://matterhorn.ijs.si/trans/ingest_status?id=2
						</p>
					</div>
					<div className="json-colors">
						<p>{'{'}</p>
						<p>"id": 2,</p>
						<p>"status": "finished",</p>
						<p>"src_lang": "en",</p>
						<p>"dst_lang": "de",</p>
						<p>"domain": "informal",</p>
						<p>"type": "text/plain",</p>
						<p>"enter_date": "2017-10-31T12:31:53.052",</p>
						<p>"trans_date": "2017-10-31T12:50:31.181",</p>
						<p>"finish_date": "2017-10-31T12:50:45.183",</p>
						<p>"trans_status": "success",</p>
						<p>"callback": "mailto:user@domain.com",</p>
						<p>"prio": 5,</p>
						<p>"size": 1536,</p>
						<p>"que_pos": null</p>
						<p>}</p>
					</div>
				</div>
				<hr />
				<div id="ingest_control">
					<h4>/ingest_control</h4>
					<p>
						Executes action (get, modify or delete) on queued document. You can
						get current status of queued document with /ingest_status API.
					</p>
					<p>&nbsp;</p>
					<p>Input (GET):</p>
					<ul>
						<li>
							<strong>auth</strong>&ndash; authentication data (future, ignored)
							<ul>
								<li>Username/password, authentication key, &hellip;</li>
								<li>Currently ignored</li>
							</ul>
						</li>
						<li>
							<strong>id</strong>&ndash; document ID (required)
							<ul>
								<li>as returned from /ingest API</li>
							</ul>
						</li>
						<li>
							<strong>action</strong>&ndash; action to be executed on document
							ID (required)
							<ul>
								<li>
									Currently supported actions:
									<ul>
										<li>
											<strong>get</strong>
											<br />
											Transfers translated document as raw data.
											<br />
											Usable for example when no callback was specified.
										</li>
										<li>
											<strong>
												modify
												<br />
											</strong>
											Modifies specified document ID in queue.
											<br />
											You can modify src, dst, domain, type, prio and callback
											parameters. This is reasonable only before the document
											has been processed.
										</li>
										<li>
											<strong>delete</strong>
											<br />
											Deletes specified document ID from queue.
										</li>
									</ul>
								</li>
								<li>No default</li>
							</ul>
						</li>
						<li>
							<strong>src</strong>&ndash; source language (future, optional for
							modify action)
							<ul>
								<li>Follows ISO 639-1 language code</li>
								<li>Currently only English ('en') is supported</li>
								<li>No default</li>
							</ul>
						</li>
						<li>
							<strong>dst</strong>&ndash; destination language (optional for
							modify action)
							<ul>
								<li>Follows ISO 639-1 language code</li>
								<li>
									Currently supported languages:
									<ul>
										<li>Bulgarian ('bg')</li>
										<li>Czech ('cs')</li>
										<li>German ('de')</li>
										<li>Greek ('el')</li>
										<li>Croatian ('hr')</li>
										<li>Italian ('it')</li>
										<li>Dutch ('nl')</li>
										<li>Polish ('pl')</li>
										<li>Portuguese ('pt')</li>
										<li>Russian ('ru')</li>
										<li>Chinese ('zh')</li>
									</ul>
								</li>
								<li>No default</li>
							</ul>
						</li>
						<li>
							<strong>domain</strong>&ndash; domain (optional for modify action)
							<ul>
								<li>Currently only 'informal' domain is supported</li>
								<li>No default</li>
							</ul>
						</li>
						<li>
							<strong>type</strong>&ndash; document format (optional for modify
							action)
							<ul>
								<li>
									Text, subtitle (WebVTT, srt, DFXP, &hellip;), HTML, docx,
									pptx, PDF, &hellip;
								</li>
								<li>Follows MIME type specification</li>
								<li>
									Currently the following formats are supported:
									<ul>
										<li>text ('text/plain')</li>
										<li>
											subtitle ('text/vtt')
											<br />
											Subtitle format is converted to and returned as WebVTT.
										</li>
										<li>
											HTML ('text/html')
											<br />
											Text inside &lt;pre&gt; and comment blocks is not
											translated.
										</li>
										<li>
											Microsoft Open XML documents:
											<ul>
												<li>
													MS Word docx ('
													application/vnd.openxmlformats-officedocument.wordprocessingml.document
													')
												</li>
												<li>
													MS PowerPoint pptx ('
													application/vnd.openxmlformats-officedocument.presentationml.presentation')
												</li>
												<li>
													MS Excel xlsx ('
													application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
												</li>
											</ul>
										</li>
										<li>No default</li>
									</ul>
								</li>
								<li>
									<strong>prio</strong>&ndash; document priority (optional for
									modify action)
									<ul>
										<li>Integer value between 1 and 9</li>
										<li>No default</li>
									</ul>
								</li>
								<li>
									<strong>callback</strong>&ndash; callback URL (optional for
									modify action)
									<ul>
										<li>
											HTTP or e-mail notification, executed when translation is
											done
										</li>
										<li>Follows URI specification</li>
										<li>
											Currently only e-mail notification
											('mailto:user@domain.com') is supported
										</li>
										<li>No default</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Output (raw data):</p>
					<ul>
						<li>
							Translated document
							<ul>
								<li>Encoded as UTF-8</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Output (JSON):</p>
					<ul>
						<li>Document ID</li>
						<li>Status (modified, deleted or failed)</li>
					</ul>
					<p>&nbsp;</p>
					<p className="text-danger">Errors:</p>
					<ul>
						<li>
							500 Internal Server Error
							<ul>
								<li>Update database failed</li>
								<li>All other possible errors</li>
							</ul>
						</li>
						<li>
							400 Bad Request
							<ul>
								<li>No document id specified or id is empty</li>
								<li>No action specified or action is empty</li>
								<li>No valid action specified</li>
								<li>Document id &lt;n&gt; has not been translated yet</li>
							</ul>
						</li>
						<li>
							404 Not Found
							<ul>
								<li>Document id &lt;n&gt; not found</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>
						Example &ndash; get the translated document from the translation
						queue:
					</p>
					<div className="code-block">
						<p>
							$ curl -u user:password
							http://matterhorn.ijs.si/trans/ingest_control?id=2&amp;action=get
						</p>
						<p>200 OK</p>
						<p>...translated text...</p>
					</div>
					<p>&nbsp;</p>
					<p>
						Example &ndash; modify the priority of the document in the
						translation queue:
					</p>
					<div className="code-block">
						<p>
							$ curl -u user:password
							http://matterhorn.ijs.si/trans/ingest_control?id=2&amp;action=modify&amp;prio=9
						</p>
					</div>
					<div className="json-colors">
						<p>{'{'}</p>
						<p>"id": 2,</p>
						<p>"status": "modified"</p>
						<p>}</p>
					</div>

					<p>Example &ndash; delete the document in the translation queue:</p>
					<div className="code-block">
						<p>
							$ curl -u user:password
							http://matterhorn.ijs.si/trans/ingest_control?id=2&amp;action=delete
						</p>
					</div>
					<div className="json-colors">
						<p>{'{'}</p>
						<p>"id": 2,</p>
						<p>"status": "deleted"</p>
						<p>}</p>
					</div>
				</div>
				<hr />
				<div id="system_status">
					<h4>/system_status</h4>
					<p>Returns system status.</p>
					<p>&nbsp;</p>
					<p>Output (JSON):</p>
					<ul>
						<li>API version</li>
						<li>System status (available or unavailable)</li>
						<li>List of available language pairs</li>
						<li>
							Concurrency (number of possible concurrent NMT cores/language
							pairs)
						</li>
						<li>Current queue size</li>
					</ul>
					<p>&nbsp;</p>
					<p className="text-danger">Errors:</p>
					<ul>
						<li>
							500 Internal Server Error
							<ul>
								<li>All other possible errors</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Example &ndash; get the system status:</p>
					<div className="code-block">
						<p>
							$ curl -u user:password
							http://matterhorn.ijs.si/trans/system_status
						</p>
					</div>
					<div className="json-colors">
						<p>{'{'}</p>
						<p>"API_version": "1.0",</p>
						<p>"status": "available",</p>
						<p>
							"lang_pairs": ["en-bg", "en-cs", "en-de", "en-el", "en-hr",
							"en-it", "en-nl", "en-pl", "en-pt", "en-ru", "en-zh"],
						</p>
						<p>"concurrency": 2,</p>
						<p>"queue_size": 0</p>
						<p>}</p>
					</div>
				</div>
				<hr />
				<div id="identify_language_(future)">
					<h4>/identify_language (future)</h4>
					<p>Identify document language (not implemented yet).</p>
					<p>&nbsp;</p>
					<p>Input (POST):</p>
					<ul>
						<li>
							<strong>auth</strong>&ndash; authentication data (future, ignored)
							<ul>
								<li>Username/password, authentication key, &hellip;</li>
								<li>Currently ignored</li>
							</ul>
						</li>
						<li>
							<strong>type</strong>&ndash; document format (optional)
							<ul>
								<li>
									Text, subtitle (WebVTT, srt, DFXP, &hellip;), HTML, docx,
									pptx, PDF, &hellip;
								</li>
								<li>Follows MIME type specification</li>
								<li>
									Currently the following formats are supported:
									<ul>
										<li>text ('text/plain')</li>
										<li>
											subtitle ('text/vtt')
											<br />
											Subtitle format is converted to and returned as WebVTT.
										</li>
										<li>
											HTML ('text/html')
											<br />
											Text inside &lt;pre&gt; and comment blocks is not
											translated.
										</li>
										<li>
											Microsoft Open XML documents:
											<ul>
												<li>
													MS Word docx ('
													application/vnd.openxmlformats-officedocument.wordprocessingml.document
													')
												</li>
												<li>
													MS PowerPoint pptx ('
													application/vnd.openxmlformats-officedocument.presentationml.presentation')
												</li>
												<li>
													MS Excel xlsx ('
													application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
												</li>
											</ul>
										</li>
										<li>Default: 'text/plain'</li>
									</ul>
								</li>
								<li>
									<strong>data</strong>&ndash; document (data, required)
									<ul>
										<li>Should be encoded as UTF-8</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Output (JSON):</p>
					<ul>
						<li>Detected document language (currently hardcoded to 'en')</li>
					</ul>
					<p>&nbsp;</p>
					<p className="text-danger">Errors:</p>
					<ul>
						<li>
							500 Internal Server Error
							<ul>
								<li>All other possible errors</li>
							</ul>
						</li>
						<li>
							400 Bad Request
							<ul>
								<li>Zero length or no input data</li>
							</ul>
						</li>
					</ul>
					<p>&nbsp;</p>
					<p>Example &ndash; identify document language:</p>
					<div className="code-block">
						<p>
							$ curl -F type=text/plain -F data=@sample.txt -u user:password
							http://matterhorn.ijs.si/trans/identify_language
						</p>
					</div>
					<div className="json-colors">
						<p>{'{'}</p>
						<p>"lang": "en"</p>
						<p>}</p>
					</div>
					<p>&nbsp;</p>
				</div>
			</div>
		</div>
	);
	Accordion = () => {
		const targetID = 'API';
		const object = { title: 'Translate API' };
		return (
			<div className="accordion accordion-single" id="accordionExample">
				<div className="card">
					<div className="card-header" id="headingOne">
						<div
							className="btn w-100 text-left .h4"
							data-toggle="collapse"
							data-target={'#' + targetID}
							aria-expanded="true"
							aria-controls={'collapse' + targetID}
						>
							<h4 className="mb-0 text-green">
								{object.title}
								<span
									id={targetID}
									className="float-right collapse show plus-minus"
								></span>
							</h4>
						</div>
					</div>

					<div id={targetID} className="collapse" aria-labelledby="headingOne">
						<div className="card-body">
							<this.ServiceAPI />
						</div>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const currentProduct = 'Translate';
		return (
			<div>
				<StandardHeader
					object={{
						product: currentProduct,
						description: 'Translate all of your content',
						button: {
							text: 'Try Now',
							link: ''
						}
					}}
				/>
				<this.Description />
				<MoreProducts current={currentProduct} padding />
			</div>
		);
	}
}
