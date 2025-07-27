import Header from "../components/Header";

const Activate = () => {
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
        <div className="flex flex-1 justify-end gap-8">
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
              Billing
            </a>
            <a
              className="text-[#101519] text-sm font-medium leading-normal"
              href="#"
            >
              Settings
            </a>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1xZ3t0vGaZHKR-qoxLSX3bN0N_SLKh8ekNoQXsyfP8XSUOQ_8kNUPvf41e396LdYuzSQa2kkVeU9-a9U8it0_MPwu5aGhgBRPyQ5poaBDVwC9d9yMA7013ZOJjEyQwEJAZNBtku-e_CBNfJZrvPbKli1LDaNH8xgXI9rXhA-2939ij33VXxPrAWUXdxEclJv6X6nQcFZY0NUy_wpcGIEC8W9yOpw7JX4pR4tmDkmRGHUo_Al8GzlFfocheNmTQ5xbuOMtNjbeWama")'
            }}
          />
        </div>
      </header> */}
      <Header/>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#101519] tracking-light text-[32px] font-bold leading-tight">
                Manage Members
              </p>
              <p className="text-[#5a758c] text-sm font-normal leading-normal">
                Activate or deactivate members of your estate.
              </p>
            </div>
          </div>
          <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-xl border border-[#d3dce3] bg-gray-50">
              <table className="flex-1">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-120 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Member Name
                    </th>
                    <th className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-240 px-4 py-3 text-left text-[#101519] w-[400px] text-sm font-medium leading-normal">
                      Email
                    </th>
                    <th className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-360 px-4 py-3 text-left text-[#101519] w-60 text-sm font-medium leading-normal">
                      Status
                    </th>
                    <th className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-480 px-4 py-3 text-left text-[#101519] w-60 text-[#5a758c] text-sm font-medium leading-normal">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Sophia Carter
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      sophia.carter@email.com
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-480 h-[72px] px-4 py-2 w-60 text-[#5a758c] text-sm font-bold leading-normal tracking-[0.015em]">
                      Deactivate
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Ethan Bennett
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      ethan.bennett@email.com
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-480 h-[72px] px-4 py-2 w-60 text-[#5a758c] text-sm font-bold leading-normal tracking-[0.015em]">
                      Deactivate
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Olivia Hayes
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      olivia.hayes@email.com
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Inactive</span>
                      </button>
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-480 h-[72px] px-4 py-2 w-60 text-[#5a758c] text-sm font-bold leading-normal tracking-[0.015em]">
                      Activate
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Noah Parker
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      noah.parker@email.com
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-480 h-[72px] px-4 py-2 w-60 text-[#5a758c] text-sm font-bold leading-normal tracking-[0.015em]">
                      Deactivate
                    </td>
                  </tr>
                  <tr className="border-t border-t-[#d3dce3]">
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#101519] text-sm font-normal leading-normal">
                      Ava Reynolds
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#5a758c] text-sm font-normal leading-normal">
                      ava.reynolds@email.com
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e9eef1] text-[#101519] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Inactive</span>
                      </button>
                    </td>
                    <td className="table-5138d445-b774-4c64-a168-2908cda3b76e-column-480 h-[72px] px-4 py-2 w-60 text-[#5a758c] text-sm font-bold leading-normal tracking-[0.015em]">
                      Activate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                          @container(max-width:120px){.table-5138d445-b774-4c64-a168-2908cda3b76e-column-120{display: none;}}\n                @container(max-width:240px){.table-5138d445-b774-4c64-a168-2908cda3b76e-column-240{display: none;}}\n                @container(max-width:360px){.table-5138d445-b774-4c64-a168-2908cda3b76e-column-360{display: none;}}\n                @container(max-width:480px){.table-5138d445-b774-4c64-a168-2908cda3b76e-column-480{display: none;}}\n              "
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
export default Activate;