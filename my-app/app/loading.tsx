export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f4]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 border-[1.5px] border-orange-200 mb-4 animate-pulse">
          <span className="font-caveat text-2xl font-bold text-orange-500">S</span>
        </div>
        <p className="text-sm text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
