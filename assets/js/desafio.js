//BASE URL
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
//REQUEST
const request = async (url) => {
	const results = await fetch(url);
	const response = await results.json();
	return response;
};
//GET POST
const getUser = async (userName) => {
	const url = `${baseUrl}/${userName}`;
	return request(url);
};

function getPosts() {
	let userId = [1, 2, 3, 4, 5, 6];

	Promise.all([
		getUser(userId[0]),
		getUser(userId[1]),
		getUser(userId[2]),
		getUser(userId[3]),
		getUser(userId[4]),
		getUser(userId[5]),
	])
		.then((resp) => {
			let post = resp;
			console.log(post);
			let node = document.createElement('ul');
			let container = ``;
			post.forEach((element) => {
				container += `<li><p><strong>${element.title}</strong></p><p>${element.body}</p></li>`;
			});
			document.getElementById('post-data').appendChild(node).innerHTML = container;
		})
		.catch((err) => console.log('error', err));
}
