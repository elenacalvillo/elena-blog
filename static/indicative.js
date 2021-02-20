var NewComponent = React.createClass({
	  render: function() {
		return (
		  <div>
			&lt; script type = "text/javascript" &gt; (function (apiKey)
			{'{'}
			var ind = document.createElement('script');
			ind.src = '//cdn.indicative.com/js/Indicative.min.js';
			ind.type = 'text/javascript';
			ind.async = 'true';
			var ind_init = false;
			ind.onload = ind.onreadystatechange = function ()
			{'{'}
			var rs = this.readyState;
			if (ind_init || (rs &amp;&amp; rs != 'complete' &amp;&amp; rs != 'loaded')) return;
			ind_init = true;
			Indicative.initialize(apiKey,
			{'{'}
			recordSessions: true,
			sessionsThreshold: 30,
			cookiesOnMainDomain: true
			{'}'});
			Indicative.buildEvent('Page View');
			{'}'};
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ind, s);
			{'}'})("ad4f601c-5e68-468a-a4c1-3b79883dded6"); &lt; /script&gt;
		  </div>
		);
	  }
	});