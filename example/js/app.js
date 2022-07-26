let page = document.querySelector('.centerChild');
let app = router('#!/home');
	app.routing({
		'#!/home': ()=>{
			page.innerText = 'route: home';
		},
		'#!/u/:user': (url, get)=>{
			page.innerHTML = `route: user/${url.user} ?test=${get.test || ''}<br><br>
			<a href="https://viewrouter.bryku.repl.co/#!/u/bryku">https://viewrouter.bryku.repl.co/#!/u/bryku</a><br>
			<a href="https://viewrouter.bryku.repl.co/#!/u/bryku?test=asdfasdf">https://viewrouter.bryku.repl.co/#!/u/bryku?test=asdfasdf</a><br>
			`;
		}
	});
	app.route('#!/about',()=>{
		page.innerText = 'route: about';
	});