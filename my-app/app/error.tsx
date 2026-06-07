"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f4] px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 border-[1.5px] border-red-200 mb-6">
          <span className="font-caveat text-4xl font-bold text-red-500">!</span>
        </div>
        <h1 className="font-caveat text-4xl font-bold text-gray-900 mb-3">
          Something Went Wrong
        </h1>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn-sketch-filled inline-flex items-center gap-2 text-sm"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
