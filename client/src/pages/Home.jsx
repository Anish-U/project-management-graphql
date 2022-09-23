import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModel from '../components/AddClientModel';
import AddProjectModel from '../components/AddProjectModel';

const Home = () => {
	return (
		<>
			<div className='d-flex gap-3 mb-4'>
				<AddClientModel />
				<AddProjectModel />
			</div>
			<Clients />
			<hr />
			<Projects />
		</>
	);
};

export default Home;
