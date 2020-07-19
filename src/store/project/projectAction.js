import * as types from './projectTypes'


export function storeData(data) {
	let obj ={};
	switch(data.buttonData.data.id){
		case 'box1':
		   obj = data.buttonData.data.photosynthesis;
		   return { type: types.ADD_COUNT_PHOTOSYNTHESIS, obj };
		   break;
		case 'box2':
		   obj = data.buttonData.data.ad
		   return { type: types.ADD_COUNT_ADVERTISEMENT, obj};
		   break;
		default:
		   return null;
	}
 
}


export function storeGameCount(data) {
	let obj = data === undefined ? undefined : data.buttonData.photosynthesis;
	return { type: types.ADD_COUNT_PHOTOSYNTHESIS, obj };
 
}

export function storeAdCount(data) {
	let obj = data === undefined ? undefined : data.buttonData.ad;
	return { type: types.ADD_COUNT_ADVERTISEMENT, obj };
 
}





