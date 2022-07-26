// 2022-07-26 - drburnett
function router(index){
	let o = {
		root: index,
		routes: [],
		route: function(path, cb){
			this.routes.push({path: path, callback: cb})
		},
		routing: function(o){
			Object.keys(o).forEach((r)=>this.route(r, o[r]))
		},
		router: function(hash, query, params = {}){
			let route = this.routes.find((route)=>{
				if(route.path === hash){
					return true
				}else if(route.path.indexOf('/:') > -1){
					let hashArray = hash.split('/');
					let pathArray = route.path.split('/');
					return pathArray.every((v,i)=>{
						if(v.startsWith(':')){
							params[v.replace(':','')] = hashArray[i];
							return true
						}
						else if(v == hashArray[i]){return true}
						else{return false}
					});
				}
				return false
			});
			if(route){route.callback(params, query)}
		},
		load: function(){
			let url = location.hash.split('?');
			let hash = url[0] || this.root;
			let query = {};
			if(url[1]){
				url[1].split('?').forEach((v)=>{
					let i = v.indexOf('=');
					query[v.substr(0,i)] = v.substr(i + 1)
				})
			}
			this.router(hash, query)
		},
		routerInit: function(){
			// You have to wrap the events otherwise some browsers run it multiple times.
			window.addEventListener('hashchange', ()=>{this.load()}, false);
			window.addEventListener('load', ()=>{this.load()});
		}
	}
	o.routerInit();
	return o
}