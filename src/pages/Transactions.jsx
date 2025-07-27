import Header from "../components/Header";

const Transactions = () => {
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
      {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaeef1] px-10 py-3">
        <div className="flex items-center gap-4 text-[#101518]">
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
          <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">
            Estate Management App
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-[#101518] text-sm font-medium leading-normal"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-[#101518] text-sm font-medium leading-normal"
              href="#"
            >
              Transactions
            </a>
            <a
              className="text-[#101518] text-sm font-medium leading-normal"
              href="#"
            >
              Residents
            </a>
            <a
              className="text-[#101518] text-sm font-medium leading-normal"
              href="#"
            >
              Staff
            </a>
            <a
              className="text-[#101518] text-sm font-medium leading-normal"
              href="#"
            >
              Vendors
            </a>
            <a
              className="text-[#101518] text-sm font-medium leading-normal"
              href="#"
            >
              Settings
            </a>
          </div>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#eaeef1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-[#101518]"
              data-icon="Bell"
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
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </div>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAELgy3WyNBl9A-aXraXRr27eYIE72sJoRAHuss_kZGK6D3ROqHQoNKS6NDaLTdAoieZE5yemWOxNtXY3auhNGvcUTZ9IIjNGgSbkWB1WJlBn0lbWrKdbQyY7Y9AsyYkNaeepPRtnpwMVwYogsfN65lun2lSr-OnW6cK4b4X9o0kv7quHnIZ3w890GNwvT-4E9fozr--_K__1ONNIp2raljV3uOzxYYWGetV5QxQeyQHnOolWF2u9Sh7xh7kxpvCbRpFf8_LxQT_lNW")'
            }}
          />
        </div>
      </header> */}
      <Header/>
      <div className="px-10 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col sl:w-[385px] sb:w-[540px] sx:w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Transactions
            </p>
          </div>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2">
              <p className="text-[#101518] text-sm font-medium leading-normal">
                Date
              </p>
              <div
                className="text-[#101518]"
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
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2">
              <p className="text-[#101518] text-sm font-medium leading-normal">
                Amount
              </p>
              <div
                className="text-[#101518]"
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
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2">
              <p className="text-[#101518] text-sm font-medium leading-normal">
                Status
              </p>
              <div
                className="text-[#101518]"
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
            <div className="flex overflow-hidden overflow-x-auto rounded-xl border border-[#d4dce2] bg-gray-50">
              <table className="flex-1">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 px-4 py-3 text-left text-[#101518] w-[400px] text-sm font-medium leading-normal">
                      Phone Number
                    </th>
                    <th className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 px-4 py-3 text-left text-[#101518] w-[400px] text-sm font-medium leading-normal">
                      Name
                    </th>
                    <th className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 px-4 py-3 text-left text-[#101518] w-[400px] text-sm font-medium leading-normal">
                      Meter Number
                    </th>
                    <th className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 px-4 py-3 text-left text-[#101518] w-[400px] text-sm font-medium leading-normal">
                      Amount
                    </th>
                    <th className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 px-4 py-3 text-left text-[#101518] w-[400px] text-sm font-medium leading-normal">
                      Token
                    </th>
                    <th className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 px-4 py-3 text-left text-[#101518] w-60 text-sm font-medium leading-normal">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-123-4567
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Sophia Carter
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      1234567890
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $25.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      A1B2C3D4E5F6
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-987-6543
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Liam Bennett
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      9876543210
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $30.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      G7H8I9J0K1L2
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-246-8013
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Olivia Harper
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      1122334455
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $20.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      M3N4O5P6Q7R8
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-369-1470
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Noah Foster
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      6677889900
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $35.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      S9T0U1V2W3X4
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-159-7530
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Ava Mitchell
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      2244668800
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $40.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Y5Z6A7B8C9D0
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-753-9510
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Ethan Hayes
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      1357924680
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $15.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      E1F2G3H4I5J6
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-357-1590
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Isabella Reed
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      2468013579
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $28.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      K7L8M9N0O1P2
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-951-3570
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Mason Coleman
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      9753108642
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $22.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Q3R4S5T6U7V8
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-759-3150
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Mia Hughes
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      8642097531
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $32.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      W9X0Y1Z2A3B4
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d4dce2]">
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      +1-555-153-9750
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      Lucas Simmons
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      3141592653
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      $18.00
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600 h-[72px] px-4 py-2 w-[400px] text-[#5c758a] text-sm font-normal leading-normal">
                      C5D6E7F8G9H0
                    </td>
                    <td className="table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#eaeef1] text-[#101518] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Successful</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                          @container(max-width:120px){.table-264b778d-06e7-4335-aa99-d017da3aacf2-column-120{display: none;}}\n                @container(max-width:240px){.table-264b778d-06e7-4335-aa99-d017da3aacf2-column-240{display: none;}}\n                @container(max-width:360px){.table-264b778d-06e7-4335-aa99-d017da3aacf2-column-360{display: none;}}\n                @container(max-width:480px){.table-264b778d-06e7-4335-aa99-d017da3aacf2-column-480{display: none;}}\n                @container(max-width:600px){.table-264b778d-06e7-4335-aa99-d017da3aacf2-column-600{display: none;}}\n                @container(max-width:720px){.table-264b778d-06e7-4335-aa99-d017da3aacf2-column-720{display: none;}}\n              "
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
export default Transactions;