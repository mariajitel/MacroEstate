const Register = () => {
  return(
    <>
    <>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    as="style"
    onload="this.rel='stylesheet'"
    href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
  />
  <title>Stitch Design</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <div
    className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
    style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d151c]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">
            EstateConnect
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal"
              href="#"
            >
              Residents
            </a>
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal"
              href="#"
            >
              Payments
            </a>
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal"
              href="#"
            >
              Settings
            </a>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMvxEUs90oOZ4-WtMvytkppeI2_01JXYy69Oas8VkRwQHXzczMhPm3vK2h1kcxcI0aQPPASDVRCVK4sgOspQfncOWMMqGzln35vOowy42IjhCi3Ukq0g8UPPFPfbJfW_reJ7KbHNcYlorfIsoZSRIJfkX_1PA8jiXF2wr5UZS_j0bqLy4sp9XrngzZwIrhgVHmqAYlOi9FVjX534NaWXuwem-KSBfQW6WPhAxJTRlU6QKOGiQhQwg7IorZJZMG2nKICuwz6kNdSV05")'
            }}
          />
        </div>
      </header>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Register Your Estate
            </p>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Estate Name
              </p>
              <input
                placeholder="Enter estate name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Address
              </p>
              <input
                placeholder="Enter estate address"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
          </div>
          <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Add Members
          </h2>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Member Name
              </p>
              <input
                placeholder="Enter member name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Meter Number
              </p>
              <input
                placeholder="Enter meter number"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Member Name
              </p>
              <input
                placeholder="Enter member name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Meter Number
              </p>
              <input
                placeholder="Enter meter number"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Member Name
              </p>
              <input
                placeholder="Enter member name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Meter Number
              </p>
              <input
                placeholder="Enter meter number"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                defaultValue=""
              />
            </label>
          </div>
          <div className="flex px-4 py-3 justify-end">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2496f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Register</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    </>
  );
}
export default Register;