#Core-Kit README
##Introduction
RapidWeaver themes often require particular files and code essential for their function. For example, the styling applied to page styles shipped with RapidWeaver (like the blog, contact form, photo library and site map) is all handled by the theme. Likewise there are some components required in a theme (like html5.js and jQuery) which are required if an end user wants the ability to use their theme offline without an internet connection.

Rather than tediously going through every RapidWeaver theme repetitively and adding and updating code or libraries every time something minor changes, Core-Kit provides an instant repository of generic code and files. Core-Kit can be instantly pulled into theme repositories. This means that themes can be updated with latest code and library changes within seconds, rather than a task that could potentially take hours to update; if the updates were required to multiple themes. It also ensures that multiple themes are guaranteed to always contain the latest code changes, when a build is prepared for distribution or if a customer requests an update.

##Contents
Core-Kit currently comprises of the following files. These should be placed in a folder within the theme contents called **core** or similar. The folder name should be added to the **RWCopyFiles** array in the **theme.plist** file and each file called from within the theme **index.html** file.

####core.css
Contains all CSS code required by the RaidWeaver page styles. We also include styles for floating images, lists and a bit of code relating to Bootstrap buttons.

####jquery-1.js
A minified version of jQuery 1.9, used for IE9 and less. Older versions of IE are not compatible with newer versions of jQuery, so we provide this to extend support for legacy web browsers.

####jquery-2.js
A minified version of jQuery 2.0, used for all modern web browsers. jQuery 2 looses lots of browser hacks needed for older versions of IE, so it is faster and more optimised.

####html5.js
Required to enable support for HTML5 tags tags in older versions of IE (like IE7 and IE8). Although we could pull this file straight from the Google CDN, we would then loose the ability for RapidWeaver users to view their website offline on an old version of IE. This is sometimes required at a clients office or when a website has been built to run in kiosk-mode.

##Overrides
A RapidWeaver theme is still able to override styles defined in the **core.css** file. Ensure that **core.css** is called before **styles.css** in the theme **index.html** file. Then put any custom or overriding code in the **styles.css** file as per normal.

##No javascript.js support
We have purposefully not included the theme **javascript.js** file in Core-Kit, because this is something RapidWeaver looks for in the root of the theme contents. Moving it could risk breaking page styles like the Photo Album. This file has not been updated for over 6 years, so it does not really require inclusion in Core-Kit anyway.

##Placement and calls
The **html5.html** file must have its call located before any stylesheet calls, for it to take effect. So it should go towards the top of the head section, in the **index.html** file. Because this file is conditionally called, I've found that it has no effect on page speed tests or scorers; which rightly normally require all Javascript code to get called towards the end of a page.

The Javascript files should get called towards the bottom of a page. This will improve page performance and loading speed. The only disadvantage of this practice is that any theme style settings that were linked to jQuery Javascript will no longer work. I call jQuery like this in Themeflood themes:

	<!-- Function to load jQuery, required for various theme functions -->
		<!--[if lt IE 9]>
			<!-- If less than IE9, use jQuery 1.x -->
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
			<script type="text/javascript">
				if (typeof jQuery == 'undefined') {
					document.write(unescape("%3Cscript src='%pathto(core/jquery-1.min.js)%' type='text/javascript'%3E%3C/script%3E"));
					console.log('jQuery CDN connection not established. Using a local version of jQuery from the theme instead.');
				}
			</script>
		<![endif]-->
		<!--[if gte IE 9]><!-->
			<!-- If greater than IE9 and all other 'normal' web browsers with jQuery 2 support --> 
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
			<script type="text/javascript">
				if (typeof jQuery == 'undefined') {
					document.write(unescape("%3Cscript src='%pathto(core/jquery-2.min.js)%' type='text/javascript'%3E%3C/script%3E"));
					console.log('jQuery CDN connection not established. Using a local version of jQuery from the theme instead.');
				}
			</script>
		<!--<![endif]-->
	<!-- End jQuery calls -->
		
Two conditionals - one for less than IE10 and one for all newer web browsers. We try to get jQuery from Google API's first (requiring a live internet connection). If jQuery is 'undefined' (not found) we instead pull in the local version from Core-Kit. A console log message just politely explains to a curious end user that local-fallback is taking place.

We try to call jQuery from Google API's using 'https' protocol, to avoid nasty error messages in RapidWeaver websites published to servers with https protocols enabled. A specific version of jQuery is requested (rather than just the generic 'latest' version), to avoid redirects and to promote healthy caching.

---
Core-Kit was developed and is currently maintained by [Will Woodgate](http://willwoodgate.com). It is released under the [MIT Software License](http://opensource.org/licenses/MIT) and may be used in any personal or commercial projects.

[RapidWeaver](http://realmacsoftware.com/rapidweaver) is a registered trademark of Realmac Software LTD, Brighton, UK.