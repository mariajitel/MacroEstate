const Report = () => {
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
      style="--select-button-svg: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(90,117,140)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e'); font-family: Inter, &quot;Noto Sans&quot;, sans-serif;"
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eef1] px-10 py-3">
          <div className="flex items-center gap-4 text-[#101519]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em]">EstateConnect</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#101519] text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-[#101519] text-sm font-medium leading-normal" href="#">Members</a>
              <a className="text-[#101519] text-sm font-medium leading-normal" href="#">Transactions</a>
              <a className="text-[#101519] text-sm font-medium leading-normal" href="#">Reports</a>
              <a className="text-[#101519] text-sm font-medium leading-normal" href="#">Settings</a>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWq3_aEexHyA-H_CvvwZnIcgEP63QjbBg-cUggdnKp8pc3PH-VJ10b63_hQuSYwmHhDVDKvdNdyyg2t_tK8oBE2doPR9FYg_DAwNHdF5U1lw4otDxs_HiLujAFXgdePW0PdqpufHs3ziiXkHhaRdWeVcbaeCVXLEu4uLYq1jNP_MFWfvj_KlEgYBLAyXY3TD6Dbey6RFJf3AuhG8gejEg0MzLXH5YrmfT83qMFmuv9yk4Z6f43ikiGnKyidfouHPQw0SsBDk9xdR4C");'
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101519] tracking-light text-[32px] font-bold leading-tight">Reports</p>
                <p className="text-[#5a758c] text-sm font-normal leading-normal">Generate and export reports on estate transactions, member activity, and financial status.</p>
              </div>
            </div>
            <h3 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Report Type</h3>
            <div className="flex flex-wrap gap-3 p-4">
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d3dce3] px-4 h-11 text-[#101519] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3986c5] relative cursor-pointer"
              >
                Transaction Summary
                <input type="radio" className="invisible absolute" name="d6d6b1d5-333f-495f-aac7-99947588d294" />
              </label>
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d3dce3] px-4 h-11 text-[#101519] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3986c5] relative cursor-pointer"
              >
                Member Activity
                <input type="radio" className="invisible absolute" name="d6d6b1d5-333f-495f-aac7-99947588d294" />
              </label>
              <label
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d3dce3] px-4 h-11 text-[#101519] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3986c5] relative cursor-pointer"
              >
                Financial Status
                <input type="radio" className="invisible absolute" name="d6d6b1d5-333f-495f-aac7-99947588d294" />
              </label>
            </div>
            <h3 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Date Range</h3>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101519] focus:outline-0 focus:ring-0 border border-[#d3dce3] bg-gray-50 focus:border-[#d3dce3] h-14 bg-[image:--select-button-svg] placeholder:text-[#5a758c] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one"></option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3986c5] text-gray-50 text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Generate Report</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9eef1] text-[#101519] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Export Report</span>
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