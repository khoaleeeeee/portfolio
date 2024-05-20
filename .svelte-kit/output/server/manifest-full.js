export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cd8AY3OV.js","app":"_app/immutable/entry/app.Bp42m2j7.js","imports":["_app/immutable/entry/start.Cd8AY3OV.js","_app/immutable/chunks/entry.CIOt2lqy.js","_app/immutable/chunks/scheduler.DE2pIWnW.js","_app/immutable/chunks/index.RxIHFkaI.js","_app/immutable/entry/app.Bp42m2j7.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DE2pIWnW.js","_app/immutable/chunks/index.BS_ntrwo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
