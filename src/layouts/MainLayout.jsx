import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({children}) => {
    return (
        <main className="container">
            <Header />
            {children}
            <Footer />
        </main>
    )
};

export default MainLayout