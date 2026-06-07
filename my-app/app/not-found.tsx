import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f4] px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-50 border-[1.5px] border-orange-200 mb-6">
          <span className="font-caveat text-4xl font-bold text-orange-500">?</span>
        </div>
        <h1 className="font-caveat text-4xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist on The Project Shelf.
        </p>
        <Link
          href="/project-shelf"
          className="btn-sketch-filled inline-flex items-center gap-2 text-sm"
        >
          Back to Project Shelf
        </Link>
      </div>
    </div>
  );
}
