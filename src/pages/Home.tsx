import Layout from '../components/commons/Layout';

const Home = () => {
  return (
    <Layout>
      <main className="h-screen w-full bg-gray-900">
        {/* <!-- Background image --> */}
        <div
          className="relative h-full overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundPosition: '100%',
            backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          >
            <div className="flex h-screen items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-0 mb-6 text-5xl font-bold">Welcome yo My Blog</h1>
                <h3 className="mb-8 text-3xl font-bold">views blogs...</h3>
                <button
                  type="button"
                  className="hover:bg-opacity-1 inline-block rounded border-2 border-white px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-emerald-500 focus:outline-none focus:ring-0"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </main>
    </Layout>
  );
};

export default Home;
