import axios from 'axios';

const LoginServiceTeacher = data => (
	console.log(data, "teacher"),
	axios.post('https://didactics.one/teachers/login', data)
		.then(res => res.status, )
		
)

export default LoginServiceTeacher;
