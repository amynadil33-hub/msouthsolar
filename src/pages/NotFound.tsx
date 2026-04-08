import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Sun, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-[#00A896]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Sun className="w-8 h-8 text-[#00A896]" />
        </div>
        <h1 className="text-6xl font-bold text-[#0A2540] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-2">Page not found</p>
        <p className="text-sm text-gray-500 mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A896] hover:bg-[#008F80] text-white font-semibold rounded-xl transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
