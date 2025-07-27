const AddMember = () => {
  return(
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Inter%3Awght%40400%3B500%3B700%3B900&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
    />

    <title>Stitch Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>


    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{"fontFamily: Inter, &quot;Noto Sans&quot, sans-serif;"}}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaeef1] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#101518]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">EstateConnect</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Members</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Payments</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Settings</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#5c758a] flex border-none bg-[#eaeef1] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-full placeholder:text-[#5c758a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnKyA916A4whhDA6B7EamuYhSPSy2UbJyWeLSLULj4O9U2LUShn17pDTNQtb2IlLzYv6yhOIIPxlzvhrZhyTUgaAp81CkKYpNEzZOFOufPt0YGTr7Q8EQhmI9XOWCJ_021QWF3LmUbc9SQBWdpT7IQiBwlss5N5BBUkRLktkPZeydrvtXHJK78a7dsgWfDMuYHXqN82C1ztTRYzMhzftdCMG4LsZVgLfMJuC5nBHJwIOKrZTrKfHBH2pHlRq7gIc32mCkDVzQx8my5");'
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">Members</p>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal"
              >
                <span className="truncate">Add New Member</span>
              </button>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101518] text-base font-medium leading-normal pb-2">Name</p>
                <input
                  placeholder="Enter member's full name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-14 placeholder:text-[#5c758a] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101518] text-base font-medium leading-normal pb-2">Unit Number</p>
                <input
                  placeholder="Enter unit number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-14 placeholder:text-[#5c758a] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101518] text-base font-medium leading-normal pb-2">Contact Number</p>
                <input
                  placeholder="Enter contact number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-14 placeholder:text-[#5c758a] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101518] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Enter email address"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-14 placeholder:text-[#5c758a] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101518] text-base font-medium leading-normal pb-2">Address</p>
                <input
                  placeholder="Enter address"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-14 placeholder:text-[#5c758a] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101518] text-base font-medium leading-normal pb-2">Meter Number</p>
                <input
                  placeholder="Enter meter number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-14 placeholder:text-[#5c758a] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#101518] text-base font-medium leading-normal pb-2">Meter Type</p>
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#5c758a] p-4 text-base font-normal leading-normal"
                >
                  <option value="one">Select meter type</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#5291c5] text-gray-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Add Member</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default AddMember;
