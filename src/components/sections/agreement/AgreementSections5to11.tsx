import { useAppDispatch } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { SignButton } from "@/components/ui/SignButton";
import { DocumentSheet } from "../DocumentSheet";

interface Props {
  pageNumber?: number;
}

export const AgreementSections5to11 = ({ pageNumber = 13 }: Props) => {
  const dispatch = useAppDispatch();

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ [field]: value }));
  };

  return (
    <>
      {/* Section 5 - Recovery Policy */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2
            className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide"
            style={{ fontSize: "18px" }}
          >
            5. RECOVERY POLICY
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify"
          style={{ fontSize: "18px" }}
        >
          <p>
            <span className="font-bold">5.1</span> Owner-Operator must promptly
            notify Company Dispatch if the truck breaks down during shipment.
          </p>

          <p>
            <span className="font-bold">5.2</span> Owner-Operator must provide
            Company with evidence of the damage within 24 hours.
          </p>

          <p>
            <span className="font-bold">5.3</span> Once the Owner-Operator's
            broken vehicle has been reloaded, his rate will be reduced to the
            required margin to compensate the new Owner-Operator for delivering
            the goods.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold" style={{ fontSize: "18px" }}>
                Signature
              </div>
              <SignButton
                onChange={(value) => handleChange("agreement5Signature", value)}
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>
            {pageNumber}
          </span>
        </div>
      </DocumentSheet>

      {/* Section 6 - Updates Policy */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2
            className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide"
            style={{ fontSize: "18px" }}
          >
            6. UPDATES POLICY
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify"
          style={{ fontSize: "18px" }}
        >
          <p>
            <span className="font-bold">6.1</span> Proper communication between
            Owner-Operator and Company is required. It includes, but is not
            limited to, updates of arrival on pickup/delivery site, update of
            the picked up freight (number of pieces, total weight, BOL#delivery
            address), update of the name of the person who received the freight
            and signed the BOL, update of current location with the zip-code
            every hour when on the way to the pick-up facility, and up to every
            two hours when traveling to the delivery destination, or additional
            updates upon dispatcher request.
          </p>

          <p>
            <span className="font-bold">6.2</span> The Owner-Operator must send{" "}
            <span className="text-[#2563eb] underline">ops@axpergroup.com</span>{" "}
            high-quality images of the goods made at the PU and at delivery.
            Before calling Company's Dispatch with information about the loading
            procedure, the images must be emailed. The Owner-Operator will incur
            a 10% penalty if, due to his own convictions, he refuses to send
            photographs at any of the locations. Owner-Operator must provide
            Company Dispatch with all pertinent information regarding the
            ongoing shipment and respond to all inquiries.
          </p>

          <p>
            <span className="font-bold">6.3</span>When an Owner-Operator is
            being loaded with damaged goods, he/she must notify Company
            Dispatch, provide photographs of the damaged goods, and wait until
            he/she receives approval to begin rolling. On the Bill of Lading,
            the owner-operator must have written notice of damaged goods prior
            to loading from a facility representative with his complete name and
            phone number .
          </p>

          <p className="text-center font-bold text-[#2563eb] mt-8 mb-8">
            On the BOL, the shipper must also include the phrase "Not driver’s
            fault."
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold" style={{ fontSize: "18px" }}>
                Signature
              </div>
              <SignButton
                onChange={(value) => handleChange("agreement6Signature", value)}
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>
            {pageNumber + 1}
          </span>
        </div>
      </DocumentSheet>

      {/* Section 7 - Termination Policy */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2
            className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide"
            style={{ fontSize: "18px" }}
          >
            7. TERMINATION POLICY
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify"
          style={{ fontSize: "18px" }}
        >
          <p className="font-bold">
            Termination grounds include, but are not limited to:
          </p>

          <p>
            <span className="font-bold">7.1</span>The Owner-Operator initiates a
            direct relationship with the broker, placing the Company in direct
            competition;
          </p>
          <p>
            <span className="font-bold">7.2</span>Owner-Operator changes the
            offer on a booked cargo, cancels the load, etc., thereby harming the
            Company's professional reputation and relationship with the broker;
          </p>
          <p>
            <span className="font-bold">7.3</span>Owner-Operator engages in
            extortion regarding tariff, detention, layover, or any additional
            pay
          </p>
          <p>
            <span className="font-bold">7.4</span>Owner-Operator fails to comply with the Company's insurance requirements;
          </p>
          <p>
            <span className="font-bold">7.5</span> The Owner-Operator is
            distracting dispatchers with personal and non-work-related issues.
          </p>
          <p>
            <span className="font-bold">7.6</span>Poor performance and inability
            of the owner-operator to provide timely location updates;
          </p>
          <p>
            <span className="font-bold">7.7</span>Owner-failure Operators to
            submit a POD that is of high quality, properly signed, and on time
          </p>
          <p>
            <span className="font-bold">7.8</span> Owner-inappropriate operator
            conduct and unfavorable interactions with dispatchers and facility
            personnel
          </p>
          <p>
            <span className="font-bold">7.9</span> Owner-Operator who disparages
            the Company, its policies, or its employees.
          </p>
          <p>
            <span className="font-bold">7.10</span> The Owner-Operator violates
            any other provision of this Agreement or Company policy.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold" style={{ fontSize: "18px" }}>
                Signature
              </div>
              <SignButton
                onChange={(value) => handleChange("agreement7Signature", value)}
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>
            {pageNumber + 2}
          </span>
        </div>
      </DocumentSheet>

      {/* Section 8 - Compensation Policy */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2
            className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide"
            style={{ fontSize: "18px" }}
          >
            8. COMPENSATION POLICY
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify"
          style={{ fontSize: "18px" }}
        >
          <p>
            <span className="font-bold">8.1</span> Detention - waiting time to
            be loaded/unloaded: sprinter $25/hour, box-truck $30/hour, and large
            straight $35/hour for the first two hours from the time indicated on
            the rate confirmation.
          </p>

          <p>
            <span className="font-bold">8.2</span>Layover - waiting until
            morning to load or discharge - $75 for sprinters/box trucks, $100
            for small straight trucks, and $125 for large straight trucks.
          </p>

          <p>
            <span className="font-bold">8.3</span>Loading and unloading by hand
            costs $50 to $100 depending on weight. (Negotiable)
          </p>

          <p>
            <span className="font-bold">8.4</span>Document printing - if
            necessary, please negotiate these fees with the dispatcher. This
            must be completed before heading to the pick-up location. (Shipments
            to Canada and airport transports).
          </p>

          <p>
            <span className="font-bold">8.5</span>TONU - cargo cancellation. If
            the TONU occurs more than two hours prior to pick-up, no fee will be
            assessed. Otherwise, all TONUs are shipped for $75 per
            payment/shipment. Loads that are offered, accepted, and then
            retracted within twenty minutes of acceptance will not be billed.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold text-base mb-4">Signature</div>
              <SignButton
                onChange={(value) => handleChange("agreement8Signature", value)}
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-base">{pageNumber + 3}</span>
        </div>
      </DocumentSheet>

      {/* Section 9 - General Information */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2
            className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide"
            style={{ fontSize: "18px" }}
          >
            9. GENERAL INFORMATION
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify"
          style={{ fontSize: "18px" }}
        >
          <p>
            <span className="font-bold">9.1</span>You will receive the
            agreed-upon quantity from the dispatcher when the load is offered to
            you. When dispatched for a load, verify the quantity sent to you.
            We're paying for the distance between two area codes. We are charged
            by the mile, not by the pound. We do not, however, offer you loads
            that your truck cannot draw. The change in delivery location
            necessitates a reevaluation of the per-load rate. The difference of
            less than 20 miles is non-negotiable. THESE NUMBERS CAN BE LOWER
            DEPENDING ON AREA, TIME OF DAY AND VARIETY OF FACTORS.
          </p>
          <p>
            <span className="font-bold">9.2</span> Price must be discussed prior
            to placing a proposal on a load. This includes, but is not limited
            to: 1 Additional payment for tolls 2 Additional pennies per mile for
            exceeding your weight limit 3 Limited distance
          </p>
          <p>
            <span className="font-bold">9.3</span> AXPER LLC will not pay more
            if the shipper adds additional pallets/skids and the shipment fits
            in the vehicle. Your earnings are calculated per mile, not per
            pound; therefore, if the shipment's weight or volume has changed and
            the vehicle can accommodate it, the unit must accept the shipment.
            Otherwise, the relationship risks being severed with AXPER LLC
          </p>
          <p>
            <span className="font-bold">9.4</span> It is prohibited for drivers
            and proprietors to discuss pricing with shippers or receivers. Any
            attempt to share driver pay with the shipper or receiver, or to
            ascertain how much this load was booked for, will result in the
            immediate termination of the contract.
          </p>
          <p className="font-bold">
           <span className="font-bold">9.5</span>  YOU MUST CHECK IN EVERY MORNING MONDAY-SUNDAY BETWEEN 07:00 am –
            09:30 am EASTERN TIME.
          </p>
          <div className="pl-5 space-y-1">
            <p>
              1. You can contact our main office at 940-281-5452 to provide your
              daily availability and location.
            </p>
            <p>
              2. You will also receive an update via text message between 7:00
              a.m. and 9:00 a.m.
            </p>
            <p>
              3.If you are unavailable on a given day, you are also required to
              check in and inform dispatch that you are out of service.
            </p>
            <p>
              4.If you will be absent for a period of time (two to three days,
              one week to one month), inform the dispatcher and you will not be
              required to provide updates during that time.
            </p>
          </div>
          <p>
            <span className="font-bold">9.6</span>If you work for other
            companies and receive cargo from them, you must contact our office
            immediately to be removed from service.
          </p>
          <p>
            <span className="font-bold">9.7</span> Call the office at
            940-281-5452 prior to relocating.
          </p>
          <p>
            <span className="font-bold">9.8</span> Once you are available for
            service, dispatchers will seek out loads for you. If the dispatcher
            locates a cargo for you, he will contact you to offer it. It is in
            your best interest to notify the dispatcher as soon as possible if
            you will accept the cargo. If you accept the proposal, you will be
            required to reserve yourself for this offer for at least 15 minutes.
            The dispatcher will notify you if the bid is accepted. He will then
            text you information regarding pickup and delivery. You must contact
            the office number or send a text message to confirm receipt of the
            information i.e. Every AXPER LLC cargo is required to have its
            location updated every two hours, once per load.
          </p>
          <div className="pl-5 space-y-2">
            <p>
              1. Call for pick-up upon arrival (immediately upon entering the
              building).
            </p>
            <p>
              2. Call when the shipment has been deposited (number of pallets,
              total weight, BOL number).
            </p>
            <p>
              3. Do not leave the shipper until you have contacted the office
              and the dispatcher has confirmed the pickup details and given the
              all-clear.
            </p>
            <p>4. The cargo must be secured.</p>
            <p>
              5. Call upon arrival for drop-off (immediately upon entering the
              building).
            </p>
            <p>
              6. Call once the shipment has been delivered with POD (first and
              last name of the person who signed for the shipment).
            </p>
            <p>
              7. If you are running late, you must inform the dispatcher as soon
              as you realize you will be late, not after you have already
              arrived late.
            </p>
            <p>
              8. If the consignee instructs you to hand load/unload the goods,
              you must contact the office and inform the dispatcher before
              beginning. To be compensated for labor, the dispatcher must grant
              you the broker's approval to complete the task.
            </p>
            <p>
              9. If you transport or unload cargo without informing the
              dispatcher, you will not be compensated for your labor.
            </p>
            <p>
              10. Your delivery time is determined by the DISPATCHER, not the
              SHIPPING COMPANY.
            </p>
            <p>
              11. If the shipper informs you that the load has been canceled,
              you must contact the dispatcher and confirm that this is the case
              before leaving. If the shipper instructs you to discharge
              elsewhere, you must contact the dispatcher prior to moving.
            </p>
            <p>
              12. NEVER leave any of your belongings at the shipper, including
              dumping trash, particularly tires, in their dumpsters.
            </p>
            <p>
              13. NEVER place anything on top of the loaded pallets and/or
              crates.
            </p>
          </div>
          <p>
            <span className="font-bold">9.9</span> If the Fleet Owner/Operator
            wishes to complete the pick-up/delivery earlier than scheduled, the
            company must be notified. Otherwise, it may incur penalties for the
            Fleet Owner/Operator.
          </p>{" "}
          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold" style={{ fontSize: "18px" }}>
                Signature
              </div>
              <SignButton
                onChange={(value) => handleChange("agreement9Signature", value)}
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>
            {pageNumber + 4}
          </span>
        </div>
      </DocumentSheet>

      {/* Section 10 - Non-Solicitation and Confidentiality */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2
            className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide"
            style={{ fontSize: "18px" }}
          >
            10. NON-SOLICITATION AND CONFIDENTIALITY
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify"
          style={{ fontSize: "18px" }}
        >
          <p>
            Owner-Operator agrees not to circumvent Company's customers or back
            solicit any business provided by Company for a minimum of one (1)
            year after termination of this agreement, and Owner-Operator agrees
            to maintain the confidentiality of all information pertaining to
            Company's operations at all times. This includes rates, company
            lists, client lists, and other confidential information created by
            the company. Owner-Operator undertakes to assist and safeguard
            Company's efforts in carrying out this Agreement by avoiding direct
            contact with or solicitation of Company's customers. Owner-Operator
            shall not, directly or indirectly, solicit or do business of a
            transportation or warehousing nature with any of Company's customers
            who are or were serviced by Owner-Operator during the twenty-four
            (24) month period preceding the termination of this Agreement,
            unless otherwise agreed to in writing. Owner-Operator hereby
            acknowledges that a breach of this provision will cause the Company
            irreparable harm and damage, and as a result, the Company shall be
            entitled, in addition to all other remedies available to it, to
            injunctive and equitable relief to prevent a breach of this
            Agreement, or any part thereof, and to ensure the enforcement of
            this Agreement. In addition to other compensatory and punitive
            damages, the right to a temporary or permanent injunction, and any
            other legal remedies. Owner-Operator acknowledges and agrees that
            the restrictions contained in this Chapter are reasonable and
            necessary to protect the Company's legitimate business interests,
            and that the time periods, territorial scope, and scope of activity
            restrictions contained in this Agreement are fair, appropriate, and
            reasonable.Participation in any action, whether direct or indirect,
            whose objective is the conveyance of shipper traffic for which the
            Owner-Operator provides or has provided transportation services for
            such shipper traffic under agreements initially acquired by Company
            is banned under this Agreement. Solicitation include actions
            undertaken or induced by Owner-Operator, as well as actions accepted
            from or via persons associated to or affiliated with
            Owner-Operator.Owner-Operator shall include all related or
            affiliated companies of Owner-Operator and all principals of
            Owner-Operator, including officers, directors, shareholders,
            employees, representatives, or other agents acting directly or
            indirectly on behalf of Owner-Operator, for the purposes of this
            Chapter. Owner-Operator acknowledges that the Company's pay for
            services rendered pursuant to this agreement is secret and will not
            be revealed. Further, Owner-Operator undertakes not to disclose the
            terms of thisAgreement, the price of transportation services, or any
            other business-related information between Owner-Operator and
            Company. Owner-Operator acknowledges that only the Company will be
            invoiced for any transportation services provided under this
            agreement. Any invoicing generated directly to a client, as opposed
            to the Company as specified in this Agreement, shall incur a
            monetary penalty for the Owner-Operator. This monetary penalty will
            be ten percent (10%) of the Company's charges. As soon as the
            billing error is identified, the Company will be assessed the
            penalty. There is no time limit for this monetary penalty, and
            penalties may be deducted from future Owner-Operator settlements.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold" style={{ fontSize: "18px" }}>
                Signature
              </div>
              <SignButton
                onChange={(value) =>
                  handleChange("agreement10Signature", value)
                }
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>
            {pageNumber + 5}
          </span>
        </div>
      </DocumentSheet>

      {/* Section 11 - Other */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2
            className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide"
            style={{ fontSize: "18px" }}
          >
            11. OTHER
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify"
          style={{ fontSize: "18px" }}
        >
          <p>
            This Agreement supersedes all prior agreements and tariffs, rates,
            classifications, and schedules published, filed, or maintained by
            the Owner-Operator. This Agreement cannot be changed or amended
            except by a written document signed by all parties, nor can it be
            assigned or transferred in whole or in part. No third party shall
            profit from or have access to the provisions of this Agreement. If
            any term of this Agreement is found unenforceable by a court of
            competent jurisdiction, such provision shall be severed and the
            remaining parts of this Agreement shall remain in full force and
            effect. This Agreement shall be governed by, construed in accordance
            with, and enforced in accordance with the internal laws of the State
            of Texas, without regard to its rules on conflicts of law. Each
            party irrevocably and unconditionally submits to the exclusive
            jurisdiction and venue of the state and federal courts serving state
            of Texas, and any appellate court thereof, in any suit, action, or
            proceeding arising out of or relating to this Agreement, and
            irrevocably and unconditionally waives any claim or defense that any
            such suit, action, or proceeding brought in any such court has been
            brought in an inconvenient forum. Each party further acknowledges
            that a final decision in any such suit, action, or procedure shall
            be conclusive and may be enforced in other countries in accordance
            with applicable law. Notices shall be sent by certified mail, return
            receipt requested, or by nationally recognized overnight courier
            with receipt needed, to each party executing this Agreement at the
            address shown below, or to any other address provided in a written
            notice according to this provision. Nothing in this Agreement will
            be construed or have the effect of promising Owner-Operator a
            specific amount of business or specific loads. This Agreement is
            only applicable to the Owner-Operator and the Company party (or
            parties) performing under this Agreement, and is only enforceable by
            or against them.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold" style={{ fontSize: "18px" }}>
                Signature
              </div>
              <SignButton
                onChange={(value) =>
                  handleChange("agreement11Signature", value)
                }
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>
            {pageNumber + 6}
          </span>
        </div>
      </DocumentSheet>
    </>
  );
};
