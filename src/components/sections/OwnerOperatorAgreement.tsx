import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { AutoSaveStatus } from "@/components/ui/AutoSaveStatus";
import { SignButton } from "@/components/ui/SignButton";
import { SignatureDisplay } from "@/components/ui/SignatureDisplay";
import { getRequiredFieldClasses } from "@/lib/fieldValidation";

export default function OwnerOperatorAgreement() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ [field]: value }));
  };

  const getInputStyle = (fieldName: string) => {
    const isRequired = getRequiredFieldClasses(fieldName);
    const baseStyle = {
      ...styles.input,
      borderBottomColor: isRequired ? "#ef4444" : "#000",
      borderBottomWidth: isRequired ? "2px" : "1px",
    };
    return baseStyle;
  };

  const isMobile = window.innerWidth < 768;

  const styles = {
    container: {
      minHeight: "100vh",
      padding: isMobile ? "10px" : "20px",
      fontFamily: "'Times New Roman', Times, serif",
      backgroundColor: "#ffffff",
      WebkitFontSmoothing: "antialiased" as const,
      MozOsxFontSmoothing: "grayscale" as const,
    },
    page: {
      maxWidth: "8.5in",
      width: "100%",
      margin: "0 auto 40px",
      background: "white",
      padding: isMobile ? "30px 20px" : "60px 70px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      position: "relative" as const,
      boxSizing: "border-box" as const,
    },
    header: {
      textAlign: "center" as const,
      marginBottom: isMobile ? "30px" : "50px",
    },
    companyName: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: isMobile ? "18px" : "24px",
      marginBottom: "10px",
      letterSpacing: "0.5px",
    },
    companyInfo: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: isMobile ? "14px" : "18px",
      marginBottom: "10px",
      letterSpacing: "0.3px",
    },
    title: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: isMobile ? "14px" : "18px",
      marginTop: "20px",
      marginBottom: isMobile ? "30px" : "50px",
      letterSpacing: "0.5px",
    },
    sectionTitle: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: isMobile ? "12px" : "14px",
      marginTop: isMobile ? "25px" : "40px",
      marginBottom: isMobile ? "20px" : "30px",
      letterSpacing: "0.5px",
      textAlign: "center" as const,
    },
    paragraph: {
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: "1.6",
      textAlign: "left" as const,
      marginBottom: isMobile ? "12px" : "18px",
      color: "#000",
      fontWeight: "400" as const,
      wordBreak: "break-word" as const,
    },
    agreementText: {
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: "1.6",
      marginBottom: isMobile ? "12px" : "18px",
      color: "#000",
      fontWeight: "400" as const,
      wordBreak: "break-word" as const,
    },
    input: {
      border: "none",
      borderBottom: "1px solid #000",
      outline: "none",
      fontSize: isMobile ? "14px" : "16px",
      color: "#000",
      padding: "0 4px 2px 4px",
      background: "transparent",
      fontFamily: "'Times New Roman', Times, serif",
      fontWeight: "400" as const,
      minWidth: isMobile ? "60px" : "80px",
      display: "inline-block",
      maxWidth: isMobile ? "100%" : "auto",
      boxSizing: "border-box" as const,
    },
    bold: {
      fontWeight: "700" as const,
    },
    sectionNumber: {
      fontSize: "16px",
      marginTop: "18px",
      marginBottom: "18px",
      color: "#000",
      fontWeight: "400" as const,
      lineHeight: "1.8",
      textAlign: "left" as const,
    },
    sectionContent: {
      fontSize: "16px",
      lineHeight: "1.8",
      textAlign: "left" as const,
      marginBottom: "18px",
      color: "#000",
      fontWeight: "400" as const,
      paddingLeft: "0px",
    },
    nowTherefore: {
      fontWeight: "700" as const,
      fontSize: "16px",
      marginTop: "30px",
      marginBottom: "30px",
      color: "#000",
    },
    pageNumber: {
      textAlign: "center" as const,
      marginTop: "50px",
      fontSize: "12px",
      color: "#000",
      fontWeight: "400" as const,
    },
    signatureRow: {
      display: "flex",
      alignItems: "center",
      marginTop: "60px",
      gap: "15px",
      justifyContent: "center",
    },
    signatureLabel: {
      fontSize: "16px",
      fontWeight: "700" as const,
      marginRight: "10px",
    },
    signatureInput: {
      border: "none",
      borderBottom: "1px solid #000",
      outline: "none",
      fontSize: "16px",
      color: "#000",
      padding: "0 4px 2px 4px",
      background: "transparent",
      fontFamily: "'Times New Roman', Times, serif",
      fontWeight: "400" as const,
      minWidth: "200px",
    },
    emailLink: {
      color: "#2563eb",
      textDecoration: "underline",
      fontWeight: "400" as const,
    },
  };

  return (
    <div style={styles.container}>
      <AutoSaveStatus />
      {/* Page 7 - Agreement Header */}
      <div style={styles.page}>
        <div style={styles.header}>
          <div style={styles.companyName}>AXPER LLC</div>
          <div style={styles.companyInfo}>MC# 1603523</div>
          <div style={styles.companyInfo}>DOT# 4169562</div>
          <div style={styles.title}>Owner-Operator AGREEMENT</div>
        </div>

        <div style={styles.agreementText}>
          THIS AGREEMENT made this day of{" "}
          <input
            type="text"
            style={getInputStyle("agreementDay")}
            placeholder="Nov 12th"
            onChange={(e) => handleChange("agreementDay", e.target.value)}
          />
          , 20
          <input
            type="text"
            style={{ ...getInputStyle("agreementYear"), minWidth: "30px" }}
            placeholder="25"
            onChange={(e) => handleChange("agreementYear", e.target.value)}
          />{" "}
          between COMPANY <span style={styles.bold}>AXPER LLC</span>, (located
          at 1673 Reed Dr, Krum, TX, 76249) and OWNER-OPERATOR,{" "}
          <input
            type="text"
            style={{ ...getInputStyle("agreementOwnerOperator"), minWidth: "180px" }}
            placeholder="Expect Xpress LLC"
            onChange={(e) =>
              handleChange("agreementOwnerOperator", e.target.value)
            }
          />
        </div>

        <div style={styles.agreementText}>
          (located at{" "}
          <input
            type="text"
            style={{ ...getInputStyle("agreementOwnerAddress"), minWidth: "400px" }}
            placeholder="50 Agnes St Ste 205"
            onChange={(e) =>
              handleChange("agreementOwnerAddress", e.target.value)
            }
          />
          ).
        </div>

        <div style={styles.paragraph}>
          Company desires to engage Owner-Operator to perform transportation
          within the limits of Owner-Operator's contract operating authorities
          according to this Agreement's terms and conditions, and the
          Owner-Operator desires to perform such transportation.
        </div>

        <div style={styles.paragraph}>
          This AGREEMENT shall remain in full force and effect for not less than
          thirty (30) days thereafter, with automatic renewal for succeeding
          periods following each delivery of the freight and the provision of
          Proof of Delivery. The acceptance of a load shall be deemed a renewal
          of this Agreement by Owner-Operator.
        </div>

        <div style={styles.nowTherefore}>
          NOW THEREFORE, intending to be legally bound, the parties agree as
          follows:
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.1</span> The Owner-Operator has completed
          Orientation successfully. It is understood that Owner-Operator will
          perform services for the Company as an independent Owner-Operator at
          all times.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.2</span> The Company is not required to
          provide workers compensation, health, or accident insurance to the
          Owner-Operator or any of his employees. Companies shall not make
          contributions to social security, unemployment insurance, federal or
          state withholding taxes, or any other employer-employee contributions.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.3</span> Owner-Operator warrants that all
          equipment and personnel used in providing the services contemplated by
          this Agreement will meet all requirements and comply with all laws and
          regulations of the United States Department of Transportation ("DOT")
          and other federal, state, or provincial agencies with jurisdiction
          over any of the services provided pursuant to this Agreement.
          Additionally, the Owner-Operator agrees to immediately notify the
          Company in
        </div>

        <div style={styles.pageNumber}>7</div>
      </div>

      {/* Page 8 - Agreement Continuation */}
      <div style={styles.page}>
        <div style={styles.paragraph}>
          writing of any change in its safety rating and to submit copies of any
          FMCSA Notice of Changes or Notice of Claim relating to such a change.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.4</span> Owner-Operator agrees to provide,
          at its own cost and expense, sufficient vehicles for the lawful
          transport of products submitted by Company for use in Company's
          service. The owner-operator is responsible for operating and
          maintaining the essential motor and auxiliary equipment in compliance
          with all applicable laws and regulations.
        </div>

        <div style={styles.sectionContent}>
          Owner-Operator shall, at its own cost and expense, provide adequately
          trained drivers and ensure correct performance of the trucking
          services provided herein. All apparatus utilized by Owner-Operator in
          the performance of transportation activities pursuant to this
          agreement shall at all times be subject to the control of Owner-sole
          Operator. If Owner-Operators fail to comply with this condition, the
          Company reserves the right to terminate this Agreement.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.5</span> The Owner-Operator agrees to
          report and pay all required amounts for worker's compensation, taxes,
          unemployment insurance, social security, health insurance, and other
          benefits for himself and his drivers, as well as indemnify, defend,
          and hold the Company harmless.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.6</span> The Owner-Operator must transport
          all approved products on equipment it owns or has permanently leased,
          and may not transfer loads to another Owner-Operator or use
          alternative rail or other services. Unless otherwise agreed to in
          writing, this Agreement applies to services rendered by the
          Owner-Operator to Company.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.7</span> Unless otherwise specified, the
          fee is calculated based on the number of miles driven, not the weight
          of the shipment. If the consignor adds additional weight to the cargo,
          but it does not exceed the payload of the vehicle specified in this
          agreement, the Company is not required to pay the Owner-Operator
          additional fees.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.8</span> Each shipment must be assigned
          its own vehicle. Under the terms of this Agreement, partial loads are
          prohibited. If the Company discovers a situation of this nature, the
          Agreement is terminated immediately. This may cause the owner-operator
          to receive no payment and be reported to other motor companies. The
          distance of the cargo is determined using the metric "from zip code to
          zip code" as opposed to the precise addresses.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.9</span> Empty miles are compensated
          beginning at 100 miles (to be discussed with dispatcher before the
          pick-
        </div>

        <div style={styles.sectionContent}>
          up). The Owner-Operator must provide the Company with his actual
          current location in order to calculate
        </div>

        <div style={styles.sectionContent}>
          the correct number of vacant miles.
        </div>

        <div style={styles.pageNumber}>8</div>
      </div>

      {/* Page 9 - Section 1.10 */}
      <div style={styles.page}>
        <div style={styles.sectionNumber}>
          <span style={styles.bold}>1.10</span> If the Owner-Operator arrives
          late to a pick-up or delivery location without notifying Company
          Dispatch, a 25% fee reduction will be automatically applied.
          Owner-Operator must notify CompanyDispatch if he or she wishes to
          complete a collection or delivery earlier than scheduled. Otherwise,
          the Owner-Operator could incur additional costs.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement1Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement1Signature"
          />
        </div>

        <div style={styles.pageNumber}>9</div>
      </div>

      {/* Page 10 - Payment Section */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>2. PAYMENT</div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>2.1</span> All Bill of Ladings must be
          emailed to <span style={styles.emailLink}>ops@axpergroup.com</span>{" "}
          via Cam Scan mobile application or equivalent right after delivery.
          Bolts must be in .pdf format only.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>2.2</span> Always write your truck# and a
          Pro Number on BOLs. Include your truck # in the email or subject line.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>2.3</span> All original Bill of Ladings
          (BOL) must be mailed in a timely manner at AXPER LLC 1673 Reed Dr,
          Krum, TX, 76249 (if required)
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>2.4</span> Payments are done every 3 days
          once the load is done. Payment period begins on Monday and ends on
          Friday. That means that those loads, which were closed on
          Saturday/Sunday will be paid in 2-3 days starting from Monday.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>2.5</span> Quick pay option is available and
          it charges 3% out of agreed rate and the payment will be processed in
          1-2 days.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>2.6</span> If you would like to receive a
          payment report to your email, please provide your email.
        </div>

        <div style={{ ...styles.paragraph, marginLeft: "20px" }}>
          EMAIL:{" "}
          <input
            type="text"
            style={{ ...styles.input, minWidth: "300px" }}
            placeholder="admin@expectxpress.com"
            value={formData.paymentEmail || ""}
            onChange={(e) => handleChange("paymentEmail", e.target.value)}
          />
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement2Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement2Signature"
          />
        </div>

        <div style={styles.pageNumber}>10</div>
      </div>

      {/* Page 11 - Deductions Section */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>
          3. DEDUCTIONS, LIABILITY LIMITATION POLICY
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>3.1</span> If the Owner-Operator departs the
          cargo facility with damaged goods and fails to notify Company
          Dispatch, he/she is exclusively responsible for any costs, claims, or
          rate reductions that the broker may give to the Company. The company
          assumes no liability for damaged cargo transported by an independent
          contractor.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>3.2</span> The Owner-Operator acknowledges
          and agrees that he/she will deliver goods only to the consignee's
          designated business facilities or a location designated by the
          Company. Owner-Operator further agrees that if any loss or damage to
          the cargo occurs as a result of its transgression of this clause, then
          Owner-Operator shall indemnify and hold harmless the Company and the
          Customer for such loss or damage, including reasonable attorney's
          fees.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>3.3</span> The Owner-Operator shall notify
          the Company immediately of any overages, deficiencies, or damaged
          goods that the Owner-Operator handled for the Company. Owner-Operator
          is required to return excess funds. The company will determine how to
          dispose of damaged goods. Owner-Operator agrees that for claim
          purposes, Company shall be considered the "Shipper," and Company may
          present claims on behalf of its "Shipper" customers, unless Company's
          customer elects to present claims on its own behalf, in which case
          Company's customer shall be recognized as the "Shipper"for claim
          purposes. In the event of loss, damage, or delivery delay, the
          Owner-Operator is responsible for all resulting damages.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>3.4</span> Loss, damage, or injury will be
          measured as the lesser of the actual replacement cost or the cost of
          repair, up to a maximum of $1 million per cargo, less the salvage
          value of the damaged products.In addition, Owner-Operator is obligated
          to indemnify Company for any indirect, special, or consequential
          damages or other special economic losses, including legal fees, that
          may be obtained against Company in connection with a customer claim.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>3.5</span> Owner-Operator shall promptly pay
          Company all claim amounts due pursuant to this Agreement, and
          Owner-Operator authorizes Company to deduct all such amounts from any
          funds payable to Owner-Operator by Company. In addition,
          Owner-Operator shall be fully liable and responsible for any claims
          arising from the imprudent, dishonest, or illegal actions of any of
          Owner-employees Operators or agents, as well as any claims arising
          from Owner-Operator providing Contaminated Equipment. Owner-Operator
          must pay the Company for any goods claims within thirty (30) days of
          being notified of the amount of the claim and provided with supporting
          documentation.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement3Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement3Signature"
          />
        </div>

        <div style={styles.pageNumber}>11</div>
      </div>

      {/* Page 12 - Claims Section */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>4. CLAIMS</div>

        <div style={{ ...styles.paragraph, textAlign: "center" }}>
          Any claims will be handled in the following manner:
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>4.1</span> A claim for loss, damage, injury,
          or delay to cargo must be submitted to Owner-Operator in writing
          within 180 days of the date Owner-Operator notifies the consignee that
          the shipment has been lost, damaged, or delayed.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>4.2</span> Upon written receipt of a valid
          claim in the manner and form specified above, Owner-Operator will
          acknowledge receipt of such claim within 30 days of receipt, unless
          Owner-Operator has paid or denied such claims within 30 days of
          receipt. Owner-Operator will indicate in its acknowledgment, based on
          its preliminary investigation of the filed claim, what, if any,
          additional documentary evidence or other pertinent information may be
          required to complete the claim.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>4.3</span> Owner-Operator acknowledges that
          if it does not reject, pay, or acknowledge receipt of claims within 30
          days, it has accepted the claim's validity and the amount specified,
          and will pay the claim within 30 days. Within sixty days of receiving
          a written claim for loss or damage, injury, or delay to property being
          transported, the Owner-Operator will either pay, deny, or make a firm
          compromise settlement offer. If Owner-Operator and Company (or its
          customer) are unable to reach a resolution within sixty days, Company
          may terminate this Agreement and/or pursue damages, including attorney
          fees and all other expenses, using any legal, administrative, or
          equitable remedy available. The Owner-Operator is not responsible for
          any loss, damage, injury, or delay caused by acts of God, acts of the
          public enemy, revolution, civil unrest, or conflict.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>4.4</span> The Owner-Operator is liable for
          the "whole actual loss" resulting from loss, damage, injury, or delay.
          "Full real loss" refers to the invoice price of goods offered to the
          Owner-Operator for transportation, plus consequential damages if the
          Owner-Operator is aware of the likelihood of such losses.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>4.5</span> The Company reserves the right to
          withhold payment for any services rendered where claim responsibility
          is contested, until an agreement is reached between the Company and
          the Owner-Operator.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>4.6</span> Owner-obligation Operators under
          this Agreement shall include payment of all costs and/or fees incurred
          by Company or its Affiliates in the adjustment or defense of any claim
          for cargo loss or damage and/or claim for personal injury, death or
          property loss or damage arising out of transportation operations and
          services under this Agreement.
        </div>

        <div style={styles.pageNumber}>12</div>
      </div>

      {/* Page 13 - Claims Continuation */}
      <div style={styles.page}>
        <div style={styles.sectionNumber}>
          <span style={styles.bold}>4.7</span> Owner-Operator agrees that its
          obligation to defend, indemnify, and hold harmless Company and its
          Affiliates from and against any and all claims and liabilities arising
          out of or resulting from transportation operations and services under
          this Agreement shall survive any termination of this Agreement.
          Owner-Operator's obligation to defend, indemnify, and hold harmless
          Company and its Affiliates under Chapter 9 shall not be limited by any
          limitation on damages, including limitations on the amount or type of
          damages, compensation, or benefits payable by Owner-Operator and its
          agents under applicable worker's compensation acts, disability benefit
          acts, or other employee benefits acts, and Owner-Operator hereby
          expressly waives any immunity it may have unto itself.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement4Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement4Signature"
          />
        </div>

        <div style={styles.pageNumber}>13</div>
      </div>

      {/* Page 14 - Recovery and Updates Policy */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>5. RECOVERY POLICY</div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>5.1</span> Owner-Operator must promptly
          notify Company Dispatch if the truck breaks down during shipment.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>5.2</span> Owner-Operator must provide
          Company with evidence of the damage within 24 hours.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>5.3</span> Once the Owner-Operator's broken
          vehicle has been reloaded, his rate will be reduced to the required
          margin to compensate the new Owner-Operator for delivering the goods.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement5Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement5Signature"
          />
        </div>

        <div style={styles.sectionTitle}>6. UPDATES POLICY</div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>6.1</span> Proper communication between
          Owner-Operator and Company is required. It includes, but is not
          limited to, updates of arrival on pickup/delivery site, update of the
          picked up freight (number of pieces, total weight, BOL#delivery
          address), update of the name of the person who received the freight
          and signed the BOL, update of current location with the zip-code every
          hour when on the way to the pick-up facility, and up to every two
          hours when traveling to the delivery destination, or additional
          updates upon dispatcher request.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>6.2</span> The Owner-Operator must send{" "}
          <span style={styles.emailLink}>ops@axpergroup.com</span> high-quality
          images of the goods made at the PU and at delivery. Before calling
          Company's Dispatch with information about the loading procedure, the
          images must be emailed. The Owner-Operator will incur a 10% penalty
          if, due to his own convictions, he refuses to send photographs at any
          of the locations. Owner-Operator must provide Company Dispatch with
          all pertinent information regarding the ongoing shipment and respond
          to all inquiries.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>6.3</span> When an Owner-Operator is being
          loaded with damaged goods, he/she must notify Company Dispatch,
          provide photographs of the damaged goods, and wait until he/she
          receives approval to begin rolling. On the Bill of Lading, the
          owner-operator must have written notice of damaged goods prior to
          loading from a facility representative with his complete name and
          phone number.
        </div>

        <div
          style={{
            ...styles.paragraph,
            textAlign: "center",
            fontWeight: "700",
            marginTop: "20px",
            color: "#2563eb",
          }}
        >
          On the BOL, the shipper must also include the phrase "Not driver's
          fault."
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement6Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement6Signature"
          />
        </div>

        <div style={styles.pageNumber}>14</div>
      </div>

      {/* Page 15 - Termination Policy */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>7. TERMINATION POLICY</div>

        <div style={styles.paragraph}>
          Termination grounds include, but are not limited to:
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.1</span> The Owner-Operator initiates a
          direct relationship with the broker, placing the Company in direct
          competition;
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.2</span> Owner-Operator changes the offer
          on a booked cargo, cancels the load, etc., thereby harming the
          Company's professional reputation and relationship with the broker;
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.3</span> Owner-Operator engages in
          extortion regarding tariff, detention, layover, or any additional pay;
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.4</span> Owner-Operator fails to comply
          with the Company's insurance requirements;
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.5</span> The Owner-Operator is distracting
          dispatchers with personal and non-work-related issues.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.6</span> Poor performance and inability of
          the owner-operator to provide timely location updates;
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.7</span> Owner-failure Operators to submit
          a POD that is of high quality, properly signed, and on time;
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.8</span> Owner-inappropriate operator
          conduct and unfavorable interactions with dispatchers and facility
          personnel;
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.9</span> Owner-Operator who disparages the
          Company, its policies, or its employees.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>7.10</span> The Owner-Operator violates any
          other provision of this Agreement or Company policy.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement7Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement7Signature"
          />
        </div>

        <div style={styles.pageNumber}>15</div>
      </div>

      {/* Page 16 - Compensation Policy */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>8. COMPENSATION POLICY</div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>8.1</span> Detention - waiting time to be
          loaded/unloaded: sprinter $25/hour, box-truck $30/hour, and large
          straight $35/hour for the first two hours from the time indicated on
          the rate confirmation.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>8.2</span> Layover - waiting until morning
          to load or discharge - $75 for sprinters/box trucks, $100 for small
          straight trucks, and $125 for large straight trucks.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>8.3</span> Loading and unloading by hand
          costs $50 to $100 depending on weight. (Negotiable)
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>8.4</span> Document printing - if necessary,
          please negotiate these fees with the dispatcher. This must be
          completed before heading to the pick-up location. (Shipments to Canada
          and airport transports).
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>8.5</span> TONU - cargo cancellation. If the
          TONU occurs more than two hours prior to pick-up, no fee will be
          assessed. Otherwise, all TONUs are shipped for $75 per
          payment/shipment. Loads that are offered, accepted, and then retracted
          within twenty minutes of acceptance will not be billed.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement8Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement8Signature"
          />
        </div>

        <div style={styles.pageNumber}>16</div>
      </div>

      {/* Page 17 - General Information */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>9. GENERAL INFORMATION</div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.1</span> You will receive the agreed-upon
          quantity from the dispatcher when the load is offered to you. When
          dispatched for a load, verify the quantity sent to you. We're paying
          for the distance between two area codes. We are charged by the mile,
          not by the pound. We do not, however, offer you loads that your truck
          cannot draw. The change in delivery location necessitates a
          reevaluation of the per-load rate. The difference of less than 20
          miles is non-negotiable. THESE NUMBERS CAN BE LOWER DEPENDING ON AREA,
          TIME OF DAY AND VARIETY OF FACTORS.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.2</span> Price must be discussed prior to
          placing a proposal on a load. This includes, but is not limited to: 1)
          Additional payment for tolls 2) Additional pennies per mile for
          exceeding your weight limit 3) Limited distance
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.3</span> AXPER LLC will not pay more if
          the shipper adds additional pallets/skids and the shipment fits in the
          vehicle. Your earnings are calculated per mile, not per pound;
          therefore, if the shipment's weight or volume has changed and the
          vehicle can accommodate it, the unit must accept the shipment.
          Otherwise, the relationship risks being severed with AXPER LLC
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.4</span> It is prohibited for drivers and
          proprietors to discuss pricing with shippers or receivers. Any attempt
          to share driver pay with the shipper or receiver, or to ascertain how
          much this load was booked for, will result in the immediate
          termination of the contract.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.5</span> YOU MUST CHECK IN EVERY MORNING
          MONDAY-SUNDAY BETWEEN 07:00 am – 09:30 am EASTERN TIME.
        </div>

        <div style={styles.sectionContent}>
          1. You can contact our main office at 940-281-5452 to provide your
          daily availability and location.
        </div>

        <div style={styles.sectionContent}>
          2. You will also receive an update via text message between 7:00 a.m.
          and 9:00 a.m.
        </div>

        <div style={styles.sectionContent}>
          3. If you are unavailable on a given day, you are also required to
          check in and inform dispatch that you are out of service.
        </div>

        <div style={styles.sectionContent}>
          4. If you will be absent for a period of time (two to three days, one
          week to one month), inform the dispatcher and you will not be required
          to provide updates during that time.
        </div>

        <div style={styles.sectionContent}>5.</div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.6</span> If you work for other companies
          and receive cargo from them, you must contact our office immediately
          to be removed from service.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.7</span> Call the office at 940-281-5452
          prior to relocating.
        </div>

        <div style={styles.pageNumber}>17</div>
      </div>

      {/* Page 18 - General Information Continued */}
      <div style={styles.page}>
        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.8</span> Once you are available for
          service, dispatchers will seek out loads for you. If the dispatcher
        </div>

        <div style={styles.sectionContent}>
          locates a cargo for you, he will contact you to offer it. It is in
          your best interest to notify the dispatcher as soon as possible if you
          will accept the cargo. If you accept the proposal, you will be
          required to reserve yourself for this offer for at least 15 minutes.
          The dispatcher will notify you if the bid is accepted. He will then
          text you information regarding pickup and delivery. You must contact
          the office number or send a text message to confirm receipt of the
          information i.e. Every AXPER LLC cargo is required to have its
          location updated every two hours, once per load.
        </div>

        <div style={styles.sectionContent}>
          1. Call for pick-up upon arrival (immediately upon entering the
          building).
        </div>

        <div style={styles.sectionContent}>
          2. Call when the shipment has been deposited (number of pallets, total
          weight, BOL number).
        </div>

        <div style={styles.sectionContent}>
          3. Do not leave the shipper until you have contacted the office and
          the dispatcher has confirmed the pickup details and given the
          all-clear.
        </div>

        <div style={styles.sectionContent}>4. The cargo must be secured.</div>

        <div style={styles.sectionContent}>
          5. Call upon arrival for drop-off (immediately upon entering the
          building).
        </div>

        <div style={styles.sectionContent}>
          6. Call once the shipment has been delivered with POD (first and last
          name of the person who signed for the shipment).
        </div>

        <div style={styles.sectionContent}>
          7. If you are running late, you must inform the dispatcher as soon as
          you realize you will be late, not after you have already arrived late.
        </div>

        <div style={styles.sectionContent}>
          8. If the consignor instructs you to hand load/unload the goods, you
          must contact the office and inform the dispatcher before beginning. To
          be compensated for labor, the dispatcher must: grant you the broker's
          approval to complete the task.
        </div>

        <div style={styles.sectionContent}>
          9. If you transport or unload cargo without informing the dispatcher,
          you will not be compensated for your labor.
        </div>

        <div style={styles.sectionContent}>
          10. Your delivery time is determined by the DISPATCHER, not the
          SHIPPING COMPANY.
        </div>

        <div style={styles.sectionContent}>
          11. If the shipper informs you that the load has been canceled, you
          must contact the dispatcher and confirm that this is the case before
          leaving. If the shipper instructs you to discharge elsewhere, you must
          contact the dispatcher prior to moving.
        </div>

        <div style={styles.sectionContent}>
          12. NEVER leave any of your belongings at the shipper, including
          dumping trash, particularly tires, in their dumpsters.
        </div>

        <div style={styles.sectionContent}>
          13. NEVER place anything on top of the loaded pallets and/or crates.
        </div>

        <div style={styles.sectionNumber}>
          <span style={styles.bold}>9.9</span> If the Fleet Owner/Operator
          wishes to complete the pick-up/delivery earlier than scheduled, the
          company must be notified. Otherwise, it may incur penalties for the
          Fleet Owner/Operator.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement9Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement9Signature"
          />
        </div>

        <div style={styles.pageNumber}>18</div>
      </div>

      {/* Page 19 - Non-Solicitation and Confidentiality */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>
          10. NON-SOLICITATION AND CONFIDENTIALITY
        </div>

        <div style={styles.paragraph}>
          Owner-Operator agrees not to circumvent Company's customers or back
          solicit any business provided by Company for a minimum of one (1) year
          after termination of this agreement, and Owner-Operator agrees to
          maintain the confidentiality of all information pertaining to
          Company's operations at all times. This includes rates, company lists,
          client lists, and other confidential information created by the
          company. Owner-Operator undertakes to assist and safeguard Company's
          efforts in carrying out this Agreement by avoiding direct contact with
          or solicitation of Company's customers. Owner-Operator shall not,
          directly or indirectly, solicit or do business of a transportation or
          warehousing nature with any of Company's customers who are or were
          serviced by Owner-Operator during the twenty-four (24) month period
          preceding the termination of this Agreement, unless otherwise agreed
          to in writing. Owner-Operator hereby acknowledges that a breach of
          this provision will cause the Company irreparable harm and damage, and
          as a result, the Company shall be entitled, in addition to all other
          remedies available to it, to injunctive and equitable relief to
          prevent a breach of this Agreement, or any part thereof, and to ensure
          the enforcement of this Agreement. In addition to other compensatory
          and punitive damages, the right to a temporary or permanent
          injunction, and any other legal remedies. Owner-Operator acknowledges
          and agrees that the restrictions contained in this Chapter are
          reasonable and necessary to protect the Company's legitimate business
          interests, and that the time periods, territorial scope, and scope of
          activity restrictions contained in this Agreement are fair,
          appropriate, and reasonable.Participation in any action, whether
          direct or indirect, whose objective is the conveyance of shipper
          traffic for which the Owner-Operator provides or has provided
          transportation services for such shipper traffic under agreements
          initially acquired by Company is banned under this Agreement.
          Solicitation include actions undertaken or induced by Owner-Operator,
          as well as actions accepted from or via persons associated to or
          affiliated with Owner-Operator.Owner-Operator shall include all
          related or affiliated companies of Owner-Operator and all principals
          of Owner-Operator, including officers, directors, shareholders,
          employees, representatives, or other agents acting directly or
          indirectly on behalf of Owner-Operator, for the purposes of this
          Chapter.
        </div>

        <div style={styles.paragraph}>
          Owner-Operator acknowledges that the Company's pay for services
          rendered pursuant to this agreement is secret and will not be
          revealed. Further, Owner-Operator undertakes not to disclose the terms
          of thisAgreement, the price of transportation services, or any other
          business-related information between Owner-Operator and Company.
          Owner-Operator acknowledges that only the Company will be invoiced for
          any transportation services provided under this agreement. Any
          invoicing generated directly to a client, as opposed to the Company as
          specified in this Agreement, shall incur a monetary penalty for the
          Owner-Operator. This monetary penalty will be ten percent (10%) of the
          Company's charges. As soon as the billing error is identified, the
          Company will be assessed the penalty. There is no time limit for this
          monetary penalty, and penalties may be deducted from future
          Owner-Operator settlements.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement10Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement10Signature"
          />
        </div>

        <div style={styles.pageNumber}>19</div>
      </div>

      {/* Page 20 - Other */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>11. OTHER</div>

        <div style={styles.paragraph}>
          This Agreement supersedes all prior agreements and tariffs, rates,
          classifications, and schedules published, filed, or maintained by the
          Owner-Operator. This Agreement cannot be changed or amended except by
          a written document signed by all parties, nor can it be assigned or
          transferred in whole or in part. No third party shall profit from or
          have access to the provisions of this Agreement. If any term of this
          Agreement is deemed unenforceable by a court of competent
          jurisdiction, such provision shall be severed and the remaining parts
          of this Agreement shall remain in full force and effect. This
          Agreement shall be governed by, construed in accordance with, and
          enforced in accordance with the internal laws of the State of Texas,
          without regard to its rules on conflicts of law.
        </div>

        <div style={styles.paragraph}>
          Each party irrevocably and unconditionally submits to the exclusive
          jurisdiction and venue of the state and federal courts serving state
          of Texas, and any appellate court thereof, in any suit, action, or
          proceeding arising out of or relating to this Agreement, and
          irrevocably and unconditionally waives any claim or defense that any
          such suit, action, or proceeding brought in any such court has been
          brought in an inconvenient forum. Each party further acknowledges that
          a final decision in any such suit, action, or procedure shall be
          conclusive and may be enforced in other countries in accordance with
          applicable law.
        </div>

        <div style={styles.paragraph}>
          Notices shall be sent by certified mail, return receipt requested, or
          by nationally recognized overnight courier with receipt needed, to
          each party executing this Agreement at the address shown below, or to
          any other address provided in a written notice according to this
          provision.
        </div>

        <div style={styles.paragraph}>
          Nothing in this Agreement will be construed or have the effect of
          promising Owner-Operator a specific amount of business or specific
          loads.
        </div>

        <div style={styles.paragraph}>
          This Agreement is only applicable to the Owner-Operator and the
          Company party (or parties) performing under this Agreement, and is
          only enforceable by or against them.
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <SignButton
            onChange={(value) =>
              handleChange("agreement11Signature", value)
            }
            placeholder="Click to add signature"
            fieldName="agreement11Signature"
          />
        </div>

        <div style={styles.pageNumber}>20</div>
      </div>

      {/* Page 21 - Acceptance and Acknowledgements */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>
          12. ACCEPTANCE AND ACKNOWLEDGEMENTS
        </div>

        <div style={styles.paragraph}>
          I am authorized to execute the contract set out above dated between
          AXPER LLC
        </div>

        <div style={styles.paragraph}>
          and{" "}
          <input
            type="text"
            style={{ ...styles.input, minWidth: "200px" }}
            placeholder="Expect Xpress LLC"
            value={formData.acceptanceCompany || ""}
            onChange={(e) => handleChange("acceptanceCompany", e.target.value)}
          />{" "}
          legally bind to the terms and conditions set forth therein. This
          electronic signature serves as an original and any electronic version
          and other signatures are incorporated as if originals into the
          original document. This electronic signature shall have the same force
          and effect as an original source. I ACKNOWLEDGE THAT I HAVE READ AND
        </div>

        <div style={styles.paragraph}>
          UNDERSTAND THE AGREEMENT AND AGREE TO THE ENTIRETY OF THE TERMS &
          CONDITIONS CONTAINED THEREIN. THE AGREEMENT SHALL BE BINDING ON{" "}
          <input
            type="text"
            style={{ ...getInputStyle("acceptanceDay"), minWidth: "80px" }}
            placeholder="12th"
            value={formData.acceptanceDay || ""}
            onChange={(e) => handleChange("acceptanceDay", e.target.value)}
          />{" "}
          DAY OF{" "}
          <input
            type="text"
            style={{ ...getInputStyle("acceptanceMonth"), minWidth: "100px" }}
            placeholder="November"
            value={formData.acceptanceMonth || ""}
            onChange={(e) => handleChange("acceptanceMonth", e.target.value)}
          />
          , 20
          <input
            type="text"
            style={{ ...getInputStyle("acceptanceYear"), minWidth: "40px" }}
            placeholder="25"
            value={formData.acceptanceYear || ""}
            onChange={(e) => handleChange("acceptanceYear", e.target.value)}
          />
          . I UNDERSTAND AND ACKNOWLEDGE THAT IS THE "OWNER-OPERATOR" AS THAT
          TERM IS USED IN THE AGREEMENT.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "60px",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ ...styles.paragraph, fontWeight: "700" }}>
              COMPANY:
            </div>
            <div style={{ marginTop: "20px" }}>
              <div style={styles.paragraph}>AXPER LLC</div>
              <div style={{ marginTop: "20px" }}>
                <div style={styles.paragraph}>
                  NAME:{" "}
                  <span style={{ color: "#2563eb" }}>BIBIZADA WILKINSON</span>
                </div>
                <div style={styles.paragraph}>
                  TITLE: <span style={{ color: "#2563eb" }}>MANAGER</span>
                </div>
                <div style={styles.paragraph}>
                  SIGNATURE:{" "}
                  <SignatureDisplay
                    value={formData.companySignature}
                    label="Company Signature"
                    isReadOnly={true}
                  />
                </div>
                <div style={styles.paragraph}>
                  DATE: <span style={{ color: "#2563eb" }}>23/11/2024</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ ...styles.paragraph, fontWeight: "700" }}>
              OWNER-OPERATOR:
            </div>
            <div style={{ marginTop: "20px" }}>
              <div style={styles.paragraph}>
                <input
                  type="text"
                  style={{ ...getInputStyle("acceptanceOwnerCompany"), minWidth: "200px" }}
                  placeholder="Expect Xpress LLC"
                  value={formData.acceptanceOwnerCompany || ""}
                  onChange={(e) =>
                    handleChange("acceptanceOwnerCompany", e.target.value)
                  }
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <div style={styles.paragraph}>
                  PRINTED NAME:{" "}
                  <input
                    type="text"
                    style={{ ...getInputStyle("acceptanceOwnerName"), minWidth: "150px" }}
                    placeholder="William Thomas"
                    value={formData.acceptanceOwnerName || ""}
                    onChange={(e) =>
                      handleChange("acceptanceOwnerName", e.target.value)
                    }
                  />
                </div>
                <div style={styles.paragraph}>
                  TITLE:{" "}
                  <input
                    type="text"
                    style={{ ...getInputStyle("acceptanceOwnerTitle"), minWidth: "150px" }}
                    placeholder="Owner Operator"
                    value={formData.acceptanceOwnerTitle || ""}
                    onChange={(e) =>
                      handleChange("acceptanceOwnerTitle", e.target.value)
                    }
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "18px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "700" }}>Signature</span>
                  <SignButton
                    onChange={(value) =>
                      handleChange("acceptanceOwnerSignature", value)
                    }
                    placeholder="Click to add signature"
                    fieldName="acceptanceOwnerSignature"
                  />
                </div>
                <div style={styles.paragraph}>
                  DATE:{" "}
                  <input
                    type="text"
                    style={{ ...styles.input, minWidth: "100px" }}
                    placeholder="11/12/2025"
                    value={formData.acceptanceOwnerDate || ""}
                    onChange={(e) =>
                      handleChange("acceptanceOwnerDate", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.pageNumber}>21</div>
      </div>

      {/* Page 22 - Appendix to Application */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>APPENDIX TO APPLICATION</div>

        <div style={styles.sectionTitle}>CERTIFICATE OF INSURANCE</div>

        <div style={styles.paragraph}>Additional Insured:</div>
        <div style={{ ...styles.paragraph, fontWeight: "700" }}>AXPER LLC</div>
        <div style={styles.paragraph}>1673 REED DR</div>
        <div style={styles.paragraph}>KRUM, TX, 76249</div>

        <div style={{ ...styles.paragraph, marginTop: "30px" }}>
          Insurance coverage and limits required:
        </div>

        <div style={{ marginLeft: "40px", marginTop: "20px" }}>
          <div style={styles.paragraph}>
            • Commercial Auto Coverage: Trucking for Hire Operations
          </div>
          <div style={styles.paragraph}>
            • $1,000,000 Primary Commercial Auto Liability CSL
          </div>
          <div style={styles.paragraph}>
            • $1,000,000 Commercial General Liability
          </div>
          <div style={styles.paragraph}>
            • $100,000 Broad Form Cargo with max $1,000 deductible
          </div>
          <div style={styles.paragraph}>
            • Unlimited Radius of Operations (Full time with NO radius coverage
            restrictions) 200, 300 or 500-mile radius with a few runs outside
            this radius per year is NOT acceptable!
          </div>
          <div style={styles.paragraph}>
            • AXPER LLC must be listed as additional insured in regard to
            General and Auto Liability Certificates must also show listed
            Vehicles (Year, Make, VIN#) as well as all listed drivers!
          </div>
          <div style={{ ...styles.paragraph, fontWeight: "700" }}>
            ***MUST BE AN ACORD FORM***
          </div>
        </div>

        <div style={styles.pageNumber}>22</div>
      </div>

      {/* Page 23 - Appendix to Agreement */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>APPENDIX TO AGREEMENT</div>

        <div style={styles.sectionTitle}>DRIVER INSTRUCTIONS</div>

        <div style={{ ...styles.sectionTitle, fontSize: "12px" }}>I BIDS</div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>A.</span> ALL BIDS ARE PLACED FOR 15
          MINUTES.
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>B</span>. WHEN THE CLIENT ASKS TO HOLD TRUCK
          YOU MUST HOLD THE TRUCKS FOR 20 MINUTES MORE.
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>C</span>. WHEN YOU ARE BIDDING A DIRECT RUN
          YOU MUST COUNT PROPERLY HOURS OF DRIVING, GIVE CORRECT TRANSIT TIME TO
          THE DISPATCHER BEFORE BIDDING AND GUARANTEE THAT YOUR TRUCK ARRIVES
          FOR PICK UP AND DELIVERY AS SOON AS POSSIBLE.
        </div>

        <div
          style={{
            ...styles.sectionTitle,
            fontSize: "12px",
            marginTop: "30px",
          }}
        >
          a. APPOINTMENTS.
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>A</span>. APPOINTMENTS CANNOT BE FAILED. WE
          DO EXPEDITED LOADS WHICH MEANS TIME-CRITICAL.
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>B</span>. IF YOU OR YOUR DRIVER CANNOT MEET
          THE APPOINTMENT (NOT ENOUGH HOURS ON THE LOG BOOK OR ANY OTHER REASON)
          YOU HAVE TO SKIP THE LOAD BEFORE BIDDING.
        </div>

        <div
          style={{
            ...styles.sectionTitle,
            fontSize: "12px",
            marginTop: "30px",
          }}
        >
          b. INSTRUCTIONS.
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>A</span>. BOOKED LOAD CAN BE PROVIDED WITH
          THE INSTRUCTIONS (PRINT DOCUMENTS PRIOR TO PICK UP, WHICH MUST BE
          FOLLOWED BY YOU AND YOUR DRIVER(S).
        </div>

        <div
          style={{
            ...styles.sectionTitle,
            fontSize: "12px",
            marginTop: "30px",
          }}
        >
          c. STOPS.
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>A</span>. IN CASE, WHEN YOU OR YOUR
          DRIVER(S) NEED TO TAKE A REST OR MAKE A STOP TO REFUEL IT'S A MUST TO
          NOTIFY TO OPERATIONS (940-281-5452) WITH LOCATION OF THE STOP AND ETA
          WHEN TRUCK WILL BE ON ROUTE AGAIN. WHEN YOU OR YOUR DRIVER(S) RESTARTS
          DRIVING IT'S A MUST TO NOTIFY OPERATIONS THAT TRUCK BACK ON THE ROUTE
          AGAIN.
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>B</span>. IN CASE, WHEN YOU OR YOUR
          DRIVER(S) HAS UNEXPECTED ISSUE ON THE ROAD IT'S
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>A</span> MUST TO REPORT ABOUT THE SITUATION
          IMMEDIATELY TO OPERATIONS (940-281-5452) AND GIVE ALL THE INFORMATION
          ON WHAT HAPPENED,
        </div>

        <div style={styles.pageNumber}>23</div>
      </div>

      {/* Page 24 - Hand Loading/Unloading */}
      <div style={styles.page}>
        <div style={styles.paragraph}>
          ETA, SEND PICTURE OF THE LOAD IN THE TRUCK (IN CASE OF CAR ACCIDENT),
          RECEIPT FROM REPAIR SHOP (IF PROBLEM WITH THE VEHICLE) OR OTHER
          PROVES.
        </div>

        <div
          style={{
            ...styles.sectionTitle,
            fontSize: "12px",
            marginTop: "30px",
          }}
        >
          d. HAND LOADING/UNLOADING
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>A.</span> IF SHIPPER OR CONSIGNEE ASKS TO
          LOAD/UNLOAD TRUCK BY HANDS YOU OR YOUR DRIVER(S) MUST REPORT THIS TO
          THE OPERATIONS (940-281-5452) NO TOUCH TO THE LOAD WHILE THE
          DISPATCHER WILL INFORM IF WE YOU NEED TO DO IT OR NOT
        </div>

        <div style={styles.paragraph}>
          <span style={styles.bold}>B</span>. IF THE TRUCK WAS LOADED/UNLOADED
          BY THE DRIVER WITHOUT CONFIRMING WITH
        </div>

        <div
          style={{
            ...styles.paragraph,
            textAlign: "center",
            fontWeight: "700",
            marginTop: "30px",
          }}
        >
          THE DISPATCHER NO EXTRA MONEY CAN BE REQUESTED.
        </div>

        <div style={styles.pageNumber}>24</div>
      </div>

      {/* Page 25 - Contact Information */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>CONTACT INFORMATION</div>

        <div style={{ marginTop: "40px" }}>
          <div style={styles.paragraph}>
            •Please send the signed copy of the contract to AXPER LLC via
          </div>
          <div style={styles.paragraph}>email to: hr@axpergroup.com</div>

          <div style={styles.paragraph}>
            •24/7 Operations phone (940-281-5452)
          </div>

          <div style={styles.paragraph}>
            •Pictures of the freight to: ops@axpergroup.com
          </div>

          <div style={styles.paragraph}>•Email POD to: ops@axpergroup.com</div>

          <div style={styles.paragraph}>•Hard copy of the POD to:</div>

          <div style={{ ...styles.paragraph, fontWeight: "700" }}>
            AXPER LLC
          </div>
          <div style={styles.paragraph}>1673 REED DR</div>
          <div style={styles.paragraph}>KRUM, TX, 76249</div>
        </div>

        <div style={styles.pageNumber}>25</div>
      </div>
    </div>
  );
}
