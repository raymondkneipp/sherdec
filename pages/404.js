import { Layout, SEOTags } from "../components";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEOTags title="Page Not Found" />
      <div
        className="container py-20 sm:py-32 md:py-40 lg:py-56 xl:py-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/tree-with-climber-flipped.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="max-w-3xl text-center">
          <h6 className="mb-2 text-primary uppercase font-bold">404 Error</h6>
          <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold">
            Page not found.
          </h1>
          <p className="mb-5 text-lg md:text-2xl opacity-80">
            Sorry, we could not find the page you are looking for.
          </p>

          <Link href="/">
            <a className="btn md:btn-lg">Back to Home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
