import { useEffect, useState } from 'react';
import Header from './components/molecules/Header';
import ItemModel from './components/organisms/ItemModel';
import Loading from './components/atoms/Loading';
import Table from './components/organisms/Table';

const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8800/products')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, []);


  const createFunc = async (updatedData) => {
    setProducts([...products, updatedData]);
  };

  return (
    <>
      <div className="relative m-3 sm:mx-7 sm:my-10 xl:mx-auto max-w-7xl">
        <div
          className="pb-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center sm:text-left text-center">
          <Header />
        </div>
        {loading && <Loading />}
        {products && <Table products={products} />}
      </div>
      <ItemModel onCreateElement={createFunc} />
    </>
  );
};

export default App;
