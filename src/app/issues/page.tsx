import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-7 items-center justify-center lg:p-24 p-4">
      <h6 className=" text-6xl">Issues With App router</h6>
      <div className="text-base">
        <p>
          You'll have to wrap your page in a HOC to slow down the app router in
          NextJS 13/14. The solution presented below will introduce more issues
          to work through though such as:
        </p>
        <ul className="flex flex-col gap-3 w-full list-disc px-2">
          <li>
            Suspense Boundaries from using loading.js file in app directory will
            fail to properly load in the children in effect making it so that
            you can't use loading.js
            <ul className="flex flex-col gap-3 px-4 list-disc">
              <li>
                The solution will cause the page to re-render more but will
                effectively provide the exit transitions you're looking for.
              </li>
            </ul>
          </li>
          <li>
            Page will be 'frozen' after it's loaded in, this puts strain on the
            app router in its current state.
          </li>
          <li className="font-semibold text-lg">
            Not support loading component, will make infinite loop
          </li>
          <li>
            Credit :{" "}
            <Link href="https://www.reddit.com/r/nextjs/comments/116v7pg/framer_exit_animation_using_app_directory/">
              Solution Link
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
