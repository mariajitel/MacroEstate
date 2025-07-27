import { Link } from "react-router-dom";
import Header from "../components/Header";
const Dashboard = () => {
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
  {/* 'sb': {'raw': '(min-width: 541px) and (max-width:844px)'},
      'sl': {'raw': '(min-width: 200px) and (max-width:540px)'},
      'sx': {'raw': '(min-width:845px) and (max-width:1680px)'} */}
  <div
    className="relative flex size-full  sl: w-md  min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
    style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <Header/>
      <div className="gap-1 px-6 flex flex-1 justify-center py-5">
        
        <div className="layout-content-container flex flex-col w-80 sl:hidden">
          <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#101519] text-base font-medium leading-normal">
                Estate Manager
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#e9eef1]">
                  <div
                    className="text-[#101519]"
                    data-icon="House"
                    data-size="24px"
                    data-weight="fill"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
                    </svg>
                  </div>
                  <p className="text-[#101519] text-sm font-medium leading-normal">
                    Dashboard
                  </p>
                </div>
               <Link to='/transactions'>
                <div className="flex items-center gap-3 px-3 py-2">
                  <div
                    className="text-[#101519]"
                    data-icon="CurrencyDollar"
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
                      <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
                    </svg>
                  </div>
                  <p className="text-[#101519] text-sm font-medium leading-normal">
                    Transactions
                  </p>
                </div>
                </Link>
                <Link to='/members'>
                <div className="flex items-center gap-3 px-3 py-2">
                  <div
                    className="text-[#101519]"
                    data-icon="Users"
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
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                    </svg>
                  </div>
                  <p className="text-[#101519] text-sm font-medium leading-normal">
                    Members
                  </p>
                </div>
                </Link>
              </div>
            </div>
            <Link to = '/activation'>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 px-3 py-2">
                <div
                  className="text-[#101519]"
                  data-icon="Gear"
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
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" />
                  </svg>
                </div>
                <p className="text-[#101519] text-sm font-medium leading-normal">
                  Activation
                </p>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#101519] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Dashboard
            </p>
          </div>
          
          <h2 className="text-[#101519] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Financial Summary
          </h2>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Total Balance
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                $120,000
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Outstanding Dues
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                $5,000
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Reserve Funds
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                $50,000
              </p>
            </div>
          </div>
          <h2 className="text-[#101519] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Power Analytics
          </h2>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Total Power Purchased
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                1500 kWh
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Total Amount Spent on Power
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                $300
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Total Payments Remitted
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                $250
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Today's Power Purchase
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                50 kWh
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eef1]">
              <p className="text-[#101519] text-base font-medium leading-normal">
                Today's Amount Spent
              </p>
              <p className="text-[#101519] tracking-light text-2xl font-bold leading-tight">
                $10
              </p>
            </div>
          </div>
          <h2 className="text-[#101519] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Recent Transactions
          </h2>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e9eef1] pl-4 pr-2">
              <p className="text-[#101519] text-sm font-medium leading-normal">
                Date
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
                Member Name
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
                Amount Purchased
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
            <div className="flex overflow-hidden rounded-xl border border-[#d3dce3] bg-gray-50">
              <table className="flex-1">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-120 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Member Name
                    </th>
                    <th className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-240 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Amount Purchased
                    </th>
                    <th className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-360 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Date
                    </th>
                    <th className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-480 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Ethan Harper
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      20 kWh
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      2024-07-15
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      10:30 AM
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Olivia Bennett
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      15 kWh
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      2024-07-15
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      09:15 AM
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Noah Carter
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      25 kWh
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      2024-07-14
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      04:45 PM
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Ava Thompson
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      10 kWh
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      2024-07-14
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      02:20 PM
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Liam Foster
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      30 kWh
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-360 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      2024-07-13
                    </td>
                    <td className="table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-480 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      11:00 AM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                          @container(max-width:120px){.table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-120{display: none;}}\n                @container(max-width:240px){.table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-240{display: none;}}\n                @container(max-width:360px){.table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-360{display: none;}}\n                @container(max-width:480px){.table-11562a03-d244-40f8-9da5-30d8c2cd2b71-column-480{display: none;}}\n              "
              }}
            />
          </div>
          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9eef1] text-[#101519] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
              <div
                className="text-[#101519]"
                data-icon="DownloadSimple"
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
                  <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z" />
                </svg>
              </div>
              <span className="truncate">Export Transactions</span>
            </button>
          </div>
          <h2 className="text-[#101519] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Quick Actions
          </h2>
          <div className="flex justify-stretch">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3986c5] text-gray-50 text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">View Members</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9eef1] text-[#101519] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Report Issue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </>
  );
}
export default Dashboard;