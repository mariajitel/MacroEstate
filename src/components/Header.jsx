import { Link } from "react-router-dom";

const Header = () => {
  return(
    <>
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eef1] px-10 py-3">
       
          <div className="flex items-center gap-4 text-[#101519]">
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
            <h2 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em]">
              MacroEstate
            </h2>
          </div>
          <div className="flex items-center gap-9">
            <Link to = '/dashboard'
              className="text-[#101519] text-sm font-medium leading-normal"
            >
              Dashboard
            </Link>
            <Link to = '/members'
              className="text-[#101519] text-sm font-medium leading-normal"
            >
              Members
            </Link>
            <Link to = '/transactions'
              className="text-[#101519] text-sm font-medium leading-normal"
            >
              Transactions
            </Link>
            <Link to = '/activation'
              className="text-[#101519] text-sm font-medium leading-normal"
            >
              Settings
            </Link>
          </div>
    
        {/* <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#5a758c] flex border-none bg-[#e9eef1] items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101519] focus:outline-0 focus:ring-0 border-none bg-[#e9eef1] focus:border-none h-full placeholder:text-[#5a758c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                defaultValue=""
              />
            </div>
          </label>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnKyA916A4whhDA6B7EamuYhSPSy2UbJyWeLSLULj4O9U2LUShn17pDTNQtb2IlLzYv6yhOIIPxlzvhrZhyTUgaAp81CkKYpNEzZOFOufPt0YGTr7Q8EQhmI9XOWCJ_021QWF3LmUbc9SQBWdpT7IQiBwlss5N5BBUkRLktkPZeydrvtXHJK78a7dsgWfDMuYHXqN82C1ztTRYzMhzftdCMG4LsZVgLfMJuC5nBHJwIOKrZTrKfHBH2pHlRq7gIc32mCkDVzQx8my5")'
            }}
          />
        </div> */}
      </header>
    </>
  );
}
export default Header;