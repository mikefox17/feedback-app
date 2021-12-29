import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <Card>
            {' '}
            <div className='about'>
                <h1>About This Project</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, aliquid!
                </p>
                <p>v: 1.1.0</p>
                <Link to='/'>Back to home</Link>
            </div>
        </Card>
    );
};

export default AboutPage;
