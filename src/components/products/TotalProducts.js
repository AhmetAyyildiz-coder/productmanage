function TotalProducts() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setTotalProducts(response.data.length);
    });
  }, []);

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                Toplam Ürün Sayısı
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl leading-8 font-semibold text-gray-900">
                  {totalProducts}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
