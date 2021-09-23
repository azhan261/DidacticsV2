import axios from 'axios';

const LoginService = data => (
	console.log(data),
	axios.post('https://didactics.one/students/login', data)
		.then(res => res.status, )
		
)

export default LoginService;
