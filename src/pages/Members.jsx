import { Link } from "react-router-dom";
import Header from "../components/Header";

const Members = () => {
  return(
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
    className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
    style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eef1] px-10 py-3">
        <div className="flex items-center gap-8">
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
              EstateConnect
            </h2>
          </div>
          <div className="flex items-center gap-9">
            <a
              className="text-[#101519] text-sm font-medium leading-normal"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-[#101519] text-sm font-medium leading-normal"
              href="#"
            >
              Members
            </a>
            <a
              className="text-[#101519] text-sm font-medium leading-normal"
              href="#"
            >
              Services
            </a>
            <a
              className="text-[#101519] text-sm font-medium leading-normal"
              href="#"
            >
              Payments
            </a>
            <a
              className="text-[#101519] text-sm font-medium leading-normal"
              href="#"
            >
              Settings
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
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
        </div>
      </header> */}
      <Header/>
      <div className="px-10 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col sl:w-[385px] sb:w-[540px] w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#101519] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Members
            </p>
            <Link to = '/addMembers'>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal">
              <span className="truncate m-0">Add New Member</span>
            </button>
            </Link>
          </div>
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
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
                  placeholder="Search members by name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101519] focus:outline-0 focus:ring-0 border-none bg-[#e9eef1] focus:border-none h-full placeholder:text-[#5a758c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9eef1] pl-4 pr-2">
              <p className="text-[#101519] text-sm font-medium leading-normal">
                Block Number
              </p>
              <div
                className="text-[#101519]"
                data-icon="CaretDown"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9eef1] pl-4 pr-2">
              <p className="text-[#101519] text-sm font-medium leading-normal">
                Status
              </p>
              <div
                className="text-[#101519]"
                data-icon="CaretDown"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9eef1] pl-4 pr-2">
              <p className="text-[#101519] text-sm font-medium leading-normal">
                Clear Filters
              </p>
              <div
                className="text-[#101519]"
                data-icon="CaretDown"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </button>
          </div>
          <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden overflow-x-auto rounded-xl border border-[#d3dce3] bg-gray-50">
              <table className="flex-1">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Name
                    </th>
                    <th className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Unit Number
                    </th>
                    <th className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Contact Number
                    </th>
                    <th className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Email
                    </th>
                    <th className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 px-4 py-3 text-left text-[#101519] w-60 text-sm font-medium leading-normal">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Sophia Carter
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 101
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-123-4567
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      sophia.carter@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Ethan Bennett
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 202
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-987-6543
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      ethan.bennett@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Olivia Hayes
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 303
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-246-8013
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      olivia.hayes@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Inactive</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Liam Foster
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 404
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-135-7924
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      liam.foster@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Ava Morgan
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 505
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-369-1215
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      ava.morgan@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Noah Parker
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 606
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-753-9516
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      noah.parker@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Inactive</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Isabella Reed
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 707
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-468-2317
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      isabella.reed@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Jackson Cole
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 808
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-802-5618
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      jackson.cole@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Mia Hughes
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 909
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-914-7819
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      mia.hughes@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Inactive</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Aiden Brooks
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      Unit 1010
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      +1-555-628-3020
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      aiden.brooks@email.com
                    </td>
                    <td className="table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                          @container(max-width:120px){.table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-120{display: none;}}\n                @container(max-width:240px){.table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-240{display: none;}}\n                @container(max-width:360px){.table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-360{display: none;}}\n                @container(max-width:480px){.table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-480{display: none;}}\n                @container(max-width:600px){.table-6ab9cd25-b67a-406a-98b1-bd5044f4170d-column-600{display: none;}}\n              "
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
export default Members;