import React from 'react';
import '../css/bootstrap.css';
import '../css/homepage.css';

import { MoreProducts } from '../Components';
import { Link } from 'react-router-dom';
import { StandardHeader, MakeParagraphs } from './ProductsComponents';
import Prism from 'prismjs';

export default class Connect extends React.Component {
	highlightHTML = code => {
		console.log('wa');
		return Prism.highlight(code, Prism.languages.html, 'html');
	};
	codeBlock = code => {
		return (
			<pre class="mb-4 code-block">
				<code class=" language-handlebars">{code}</code>
			</pre>
		);
	};
	Description = () => {
		const contents = [['sample text']];
		return (
			<div className="bg-white p-128 maxer mx-auto connect">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 pb-128 mb-0 text-purple">SAMPLE TEXT</h4>
					<MakeParagraphs object={contents} />
					<this.ConnectBASEapi />
					{/* <this.ConnectMOODLEapi /> */}
				</div>
			</div>
		);
	};
	ConnectBASEapi = () => {
		return (
			<div className="text-purple maxer-880">
				<div id="oer-provider-token" class="resource">
					<h4>Your X5GON Token</h4>
					<p class="form-text">
						This is the X5GON Token generated for the your OER repository. Copy
						this token somewhere safe as it is your identification token in the
						X5GON OER Network.
					</p>
					{this.codeBlock('vjr4n2')}
				</div>
				<div id="oer-provider-library" class="resource mt-5">
					<h4>The X5GON Connect</h4>
					<p class="form-text">
						The X5GON Connect library contains functions for providing
						information about the user activity. What kind of user information
						the functions provide is listed in the{' '}
						<Link to="/privacy_policy" target="_blank">
							privacy policy
						</Link>
						, section "About the Data We Collect".
					</p>
					<p class="form-text">
						Include the X5GON Connect Library in the{' '}
						<code class=" language-handlebars">
							<span class="token tag">
								<span class="token tag">
									<span class="token punctuation">&lt;</span>head
								</span>
								<span class="token punctuation">&gt;</span>
							</span>
						</code>
						of the website containing the OER material.
					</p>

					<p className="p2">Latest Library</p>
					{this.codeBlock(
						'<script type="text/javascript" src="https://platform.x5gon.org/api/v1/snippet/latest/x5gon-log.min.js" integrity="sha384-ZfzlS43MMnlhhaZGNiNLYUcwbS+ndioybwxGNvzEFR7XcaLun22bDz+tCvCUWfq0" crossorigin="anonymous" ></script>'
					)}

					<p className="p2">Latest Library with Added Security Measurements</p>
					<p>
						The added security measurements is called{' '}
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity"
							target="blank"
						>
							Subresource Integrity
						</a>
						, which is a security feature that enables browsers to verify that
						resources they fetch are delivered without unexpected manipulations.
						<br />
						<b>NOTE:</b> Since this security measurement is dependent on the
						script you are fetching, the source url needs to state which version
						of the library you wish to retrieve.
					</p>
					{this.codeBlock(
						'<script type="text/javascript" src="https://platform.x5gon.org/api/v1/snippet/v2/x5gon-log.min.js" integrity="sha384-ZfzlS43MMnlhhaZGNiNLYUcwbS+ndioybwxGNvzEFR7XcaLun22bDz+tCvCUWfq0" crossorigin="anonymous" ></script>'
					)}
				</div>
				<div className="enable">
					<h4>Enabling X5GON Connect</h4>
					<p>
						To enable the X5GON Connect functionality, the OER repository
						maintainer needs to set up when to send the user activity
						information. The function that needs to be activated is:
					</p>
					{this.codeBlock(
						"x5gonActivityTracker('vjr4n2', testingEnvironment);"
					)}

					<p>
						where the <code>testingEnvironment</code> is a boolean value
						indicating if the function is used for testing. Once in production,
						this variable can be omited.
					</p>
					<p className="p2">
						Include the Functionality into your Cookie Policy Manager
					</p>

					<p class="form-text">
						The best way is to include this function into your cookie policy
						manager. If you don't have a cookie policy manager, we provide one
						of the solutions by using the{' '}
						<a href="https://cookieconsent.insites.com/" target="blank">
							Cookie Consent
						</a>{' '}
						API. This solution allows the user to decide if they wish to provide
						their activity data and act appropriately.
					</p>

					<p>
						Included the provided lines of code in the{' '}
						<code class=" language-handlebars">
							<span class="token tag">
								<span class="token tag">
									<span class="token punctuation">&lt;</span>head
								</span>
								<span class="token punctuation">&gt; </span>
							</span>
						</code>
						of the website containing the OER material. In addition, the{' '}
						<code>condition</code> in the
						<code> onInitialise</code> and <code>onStatusChange</code> should be
						a boolean value (i.e.
						<code> true</code> or <code>false</code>) indicating that the page
						contains OER material.
						<b> NOTE:</b> we recommend you to save the{' '}
						<code>cookieconsent.min.css</code> and
						<code> cookieconsent.min.js</code> source files on your server and
						import it into your repository.
					</p>
					{this.codeBlock(
						`<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"
						integrity="sha384-AJ82o1PQz2xMlVWjJ+IdPSfyCVS/nJeYbLcpPhm/cEPrewaEdaYkaG6LCsquvogf"
						crossorigin="anonymous"
					/>
					
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"
						integrity="sha384-l+e8/kt7mRYg7RUc/i3MsNwDJlWxkWkFDX10LF/iNglZLT96GBMAPrbaH2GP2lQy"
						crossorigin="anonymous"
					></script>
					
					<script>
						window.addEventListener('load', function() {
							window.cookieconsent.initialise({
								palette: {
									popup: {
										background: '#1d8a8a'
									},
									button: {
										background: '#62ffaa'
									}
								},
								type: 'opt-in',
								content: {
									message: \`This website uses cookies for functional and analytical purposes. In addition,
							  we use cookies to deliver personalized, responsive services and to improve the site.
							  This is done in collaboration with the X5GON project.\`,
									dismiss: 'Decline',
									allow: 'Allow cookies',
									link: 'Learn more',
									// link to the X5GON platform privacy policy - describing what are we collecting
									// through the platform
									href: 'https://platform.x5gon.org/privacy_policy'
								},
								onInitialise: function(status) {
									var type = this.options.type;
									var didConsent = this.hasConsented();
									if (type == 'opt-in' && didConsent) {
										// enable cookies - send user data to the platform
										// only if the user enabled cookies
										if (typeof x5gonActivityTracker !== 'undefined') {
											x5gonActivityTracker('vjr4n2');
										}
									}
								},
								onStatusChange: function(status, chosenBefore) {
									var type = this.options.type;
									var didConsent = this.hasConsented();
									if (type == 'opt-in' && didConsent) {
										// enable cookies - send user data to the platform
										// only if the user enabled cookies
										if (typeof x5gonActivityTracker !== 'undefined') {
											x5gonActivityTracker('vjr4n2');
										}
									}
								},
								onRevokeChoice: function() {
									var type = this.options.type;
									if (type == 'opt-in') {
										// disable cookies - set what to do when
										// the user revokes cookie usage
									}
								}
							});
						});
					</script>
					`
					)}
				</div>
				<h4>Documentation</h4>
				<p class="information">
					For information about what user data is acquired and how the snippet
					works access the documentation available{' '}
					<a
						href="https://platform.x5gon.org/docs/x5gon-docs.pdf"
						target="blank"
					>
						HERE
					</a>
					.
				</p>
			</div>
		);
	};
	ConnectMOODLEapi = () => {
		return (
			<div className="text-purple">
				---------------
				<p>
					It is easy to install <em>X5-GON Moodle plugin</em>. Briefly, the
					plugin will be functional once the next steps have been followed:
				</p>
				<ol>
					<li>
						Import the plugin folder in localfolder of Moodle installation, if
						you have enough permissions for that.
						<br />
						Alternatively you can install it from “Plugins / Install
						plugins”under your Siteadministrationpanel of your Moodle
						administration GUI as a local plugin.
					</li>
				</ol>
				<p>
					Moodle will detect the new plugin (by verifying notifications
					section), then will ask you to install it.
				</p>
				<ol>
					<li>Proceed with the plugin installation.</li>
					<li>Enable Web serviceunder “Plugins / Web services”.</li>
					<li>
						Enable XML-RPC Protocolfrom Manage Protocolsunder “Plugins / Web
						services”.
					</li>
					<li>
						Create a user (system user, or a user with limited permissions) with
						at least the ability to use the XML-RPC Protocol.
					</li>
					<li>
						Create an external serviceunder “Plugins / Web services / External
						Services”associated to X5-GON plugin newly installed,{' '}
						<strong>
							<u>if it is not automatically created</u>
						</strong>
						.
					</li>
					<li>
						Generate a Tokenassociated to the external service(newly created
						related to X5-GON plugin) and the user(newly created). Here, you can
						precise a number of restrictions on how to use the webservice: IP,
						validity durations, users…
					</li>
				</ol>
				<p>
					The generated token is meant to be used by the external parties when
					they make their xmlrpcrequests to Moodle.
				</p>
				<ol>
					<li>
						Communicate the generated Tokento X5-GON server admin with a secure
						way.
					</li>
					<li>Configure Provider Tokenfield in plugin settings page.</li>
					<li>Configure OER categoriesfield in plugin settings page.</li>
					<li>
						Do the <strong>first </strong>save changes in plugin settings page
						to store plugin settings in Moodle DB for the first time.
					</li>
				</ol>
				<h4>Plugin settings page</h4>
				<p>
					This section explains the main functionalities of the plugin settings
					page and the different settings that admin can control in order to
					better characterize OERs within his LMS.
				</p>
				<img src="/imgs/products/moodleAPI.png" alt="moodleAPI" width="100%" />
				<p className="text-figure">Fig. 5: X5-GON plugin settings page</p>
				<p>
					<strong>Enabled:</strong>Activate/Deactivate the plugin.
				</p>
				<p>
					<strong>Provider Token: </strong>Generated token from the registration
					of OER repository in X5GON on{' '}
					<a href="https://platform.x5gon.org/application-form">
						platform.x5gon.org/application-form
					</a>
					site.
				</p>
				<p>
					<strong>OER Categories</strong>: List of categories IDs(separated with
					commas) that meant to be containing OERs.
				</p>
				<p>
					<strong>Allow “hidden courses”</strong>: Consider hidden coursesalso
					as OER courses.
				</p>
				<p>
					<strong>Allow “enrolment types with passwords”</strong>: Consider
					courses with enrolment typesusing a passwordas OER courses.
				</p>
				<p>
					<strong>Allowed enrolment types</strong>: List of allowed enrolment
					types(separated with commas) for which the courses are considered as
					OER courses.
				</p>
				<p>
					<strong>Allowed module types</strong>: List of allowed Moodle module
					typeswhich are treated by the plugin.
				</p>
				<p>
					<strong>Allow “hidden modules”</strong>: Consider hidden modulesalso
					as OER modules.
				</p>
				<p>
					<strong>Ignore availability restrictions</strong>: Consider
					moduleswith availabilityrestrictions also as OER modules.
				</p>
				<p>
					<strong>Allowed licenses</strong>: List of licenses(licenses short
					namesseparated by commas).
				</p>
				<h4>Technical specifications</h4>
				<p>
					This plugin version has been developed and tested on Moodle version{' '}
					<strong>3.4 </strong>&amp; <strong>3.6 </strong>which is based on{' '}
					<strong>
						<em>PHP </em>7
					</strong>
					. So, it is optimized for those versions and it is theoretically
					compatible with the newer versions which are also based on PHP 7.
				</p>
				<p>
					Depending on Moodle version, the plugin will add automatically X5GON
					project privacy policy. As result, all users will be asked to give
					their consents. If the user doesn’t give his consent, there will be no
					activities tracing sent to X5GON.
				</p>
			</div>
		);
	};

	render() {
		const currentProduct = 'Connect';
		return (
			<div>
				<StandardHeader
					object={{
						product: currentProduct,
						description: 'Make your users connected to all OER sites in Moodle',
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
