export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        Core Dance Company
      </p>
      <h1 className="max-w-xl text-center text-4xl font-semibold tracking-tight text-zinc-900">
        Site rebuild in progress
      </h1>
      <p className="max-w-md text-center text-zinc-600">
        Next.js + Sanity scaffold is live. Content studio is at{" "}
        <a className="underline underline-offset-4" href="/admin">
          /admin
        </a>
        .
      </p>
    </main>
  );
}
