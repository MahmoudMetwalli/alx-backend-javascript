export default function getResponseFromAPI() {
	const promise = new Promise(function(resolve, reject) {
		  resolve("Stuff worked!");
	  });
	return promise;
}
