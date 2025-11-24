import { DocumentSheet } from './DocumentSheet';

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="font-serif text-black text-[18px] leading-relaxed mb-4 pl-6 relative text-justify">
    <span className="absolute left-0">●</span>
    {children}
  </li>
);

export default function RequirementsInfo({ pageNumber = 1 }: { pageNumber?: number }) {
  return (
    <>
      {/* Page 1 - Basic Requirements */}
      <DocumentSheet>
        {/* Logo */}
        <div className="flex justify-end mb-8">
          <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">Axper</span>
        </div>

        {/* Header */}
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
            I. BASIC REQUIREMENTS:
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-[750px] mx-auto">
          <ul className="list-none p-0 m-0 space-y-3">
            <BulletItem>NEITHER YOU NOR YOUR DRIVER(S) ARE COMPANY EMPLOYEES.</BulletItem>
            <BulletItem>YOU AND YOUR DRIVER(S) MUST BE AT LEAST 21 YEARS OLD.</BulletItem>
            <BulletItem>MINIMUM OF 6 MONTHS OVER THE ROAD DRIVING EXPERIENCE FOR ALL CARGO VANS, SPRINTER VANS AND SMALL STRAIGHT BOX TRUCKS (UNDER 10,000 GVW).</BulletItem>
            <BulletItem>YOU MUST OWN A CELL PHONE WITH NATIONWIDE COVERAGE AND KNOW HOW TO OPERATE IT.</BulletItem>
            <BulletItem>YOU AND YOUR DRIVERS MUST BE ABLE TO ACCEPT MACRO POINT (OR INSTALL THE APPLICATION THAT THE CLIENT REQUIRES FOR TRACKING PURPOSES WHILE HIS LOAD IS IN YOUR VEHICLE) AT THE REQUEST OF THE DISPATCHER.</BulletItem>
            <BulletItem>YOU MUST OWN A GPS SYSTEM AND KNOW HOW TO USE IT.</BulletItem>
            <BulletItem>NEITHER YOU NOR YOUR DRIVER(S) MAY HAVE HAD A DUI WITHIN THE PAST DECADE.</BulletItem>
            <BulletItem>YOU MUST POSSESS A VALID DRIVER'S LICENSE ISSUED BY YOUR STATE OF RESIDENCE.</BulletItem>
            <BulletItem>YOU MUST PROVIDE AN INSURANCE CERTIFICATE LISTING COMPANY AS AN ADDITIONAL INSURED.</BulletItem>
          </ul>
        </div>

        {/* Footer Page Number */}
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-15">{pageNumber}</span>
        </div>
      </DocumentSheet>

      {/* Page 2 - Vehicle Requirements */}
      <DocumentSheet>
        {/* Logo */}
        <div className="flex justify-end mb-8">
          <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">Axper</span>
        </div>

        {/* Header */}
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
            II. VEHICLE REQUIREMENTS:
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-[750px] mx-auto">
          <ul className="list-none p-0 m-0 space-y-3">
            <BulletItem>ALL VEHICLES MUST BE YEAR 2014 OR NEWER.</BulletItem>
            <BulletItem>VEHICLES WITH PAPER PLATES ARE NOT ACCEPTED.</BulletItem>
            <BulletItem>MUST HAVE "FOR HIRE" OR "COMMERCIAL" PLATE.</BulletItem>
            <BulletItem>TEMPORARY REGISTRATIONS ARE NOT ACCEPTED.</BulletItem>
            <BulletItem>ALL DECALS MUST BE REMOVED UNLESS THE COMPANY IS UNDER YOUR AUTHORITY.</BulletItem>
            <BulletItem>IF YOU CHANGE THE VEHICLE YOU ARE SET UP WITH, YOU MUST LET THE COMPANY KNOWS PRIOR TO PUTTING THE VEHICLE ON THE ROAD. YOU MUST SEND NEW REGISTRATION AND INSURANCE FOR THAT VEHICLE.</BulletItem>
          </ul>
        </div>

        {/* Footer Page Number */}
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-15">{pageNumber + 1}</span>
        </div>
      </DocumentSheet>
    </>
  );
}
