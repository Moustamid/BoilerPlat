//-Components :
import Layout from '../Layout/Layout';
import Navbar from '../components/Navbar/';
import Temperary from '../components/tmp';

const index = () => {
  return (
    <Layout>
      {
        <>
          <Navbar />
          <Temperary />
        </>
      }
    </Layout>
  );
};

export default index;
