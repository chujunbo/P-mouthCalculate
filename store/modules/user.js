export default{
	namespaced:true,
	state:{
		classMsg:''
	},
	mutations:{
		upDataClass(state,payload){
			// state.classText = payload
			state.classMsg = payload
			// console.log('state',state);
			console.log('payload',payload);
			console.log('state.classMsg',state.classMsg);
		}
	}
}