import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";

export default function OwnerOperatorAgreement() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ [field]: value }));
  };

  const styles = {
    container: {
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "'Times New Roman', Times, serif",
      backgroundColor: "#f5f5f5",
      WebkitFontSmoothing: "antialiased" as const,
      MozOsxFontSmoothing: "grayscale" as const,
    },
    page: {
      maxWidth: "850px",
      margin: "0 auto 40px",
      background: "white",
      padding: "60px 80px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      position: "relative" as const,
    },
    header: {
      textAlign: "center" as const,
      marginBottom: "50px",
    },
    companyName: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: "24px",
      marginBottom: "15px",
      letterSpacing: "1px",
    },
    companyInfo: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: "18px",
      marginBottom: "10px",
      letterSpacing: "0.5px",
    },
    title: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: "18px",
      marginTop: "25px",
      marginBottom: "30px",
      letterSpacing: "0.5px",
    },
    sectionTitle: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: "16px",
      marginTop: "40px",
      marginBottom: "25px",
      letterSpacing: "0.5px",
      textAlign: "center" as const,
    },
    paragraph: {
      fontSize: "13px",
      lineHeight: "1.8",
      textAlign: "justify" as const,
      marginBottom: "20px",
      color: "#000",
      fontWeight: "500" as const,
    },
    agreementText: {
      fontSize: "13px",
      lineHeight: "1.8",
      marginBottom: "25px",
      color: "#000",
      fontWeight: "500" as const,
    },
    input: {
      border: "none",
      borderBottom: "1.5px solid #000",
      outline: "none",
      fontSize: "13px",
      color: "#000",
      padding: "2px 5px",
      background: "transparent",
      fontFamily: "'Times New Roman', Times, serif",
      fontWeight: "500" as const,
      minWidth: "100px",
      display: "inline-block",
    },
    bold: {
      fontWeight: "700" as const,
    },
    sectionNumber: {
      fontWeight: "700" as const,
      fontSize: "13px",
      marginTop: "25px",
      marginBottom: "15px",
      color: "#000",
    },
    sectionContent: {
      fontSize: "13px",
      lineHeight: "1.8",
      textAlign: "justify" as const,
      marginBottom: "20px",
      color: "#000",
      fontWeight: "500" as const,
      paddingLeft: "20px",
    },
    nowTherefore: {
      fontWeight: "700" as const,
      fontSize: "13px",
      marginTop: "30px",
      marginBottom: "25px",
      color: "#000",
    },
    signatureRow: {
      display: "flex",
      alignItems: "flex-end",
      marginTop: "60px",
      gap: "40px",
      justifyContent: "flex-end",
    },
    signatureLabel: {
      fontSize: "13px",
      fontWeight: "500" as const,
      marginRight: "20px",
    },
    signatureInput: {
      border: "none",
      borderBottom: "1.5px solid #000",
      outline: "none",
      fontSize: "13px",
      color: "#000",
      padding: "2px 5px",
      background: "transparent",
      fontFamily: "'Times New Roman', Times, serif",
      fontWeight: "500" as const,
      minWidth: "300px",
    },
    pageNumber: {
      textAlign: "center" as const,
      marginTop: "50px",
      fontSize: "13px",
      color: "#000",
      fontWeight: "500" as const,
    },
    emailLink: {
      color: "#2563eb",
      textDecoration: "underline",
      fontWeight: "500" as const,
    },
    highlight: {
      color: "#2563eb",
      fontWeight: "700" as const,
    },
  };

  return (
    <div style={styles.container}>
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
            style={styles.input}
            placeholder="Nov 12th"
            onChange={(e) => handleChange("agreementDay", e.target.value)}
          />
          , 20
          <input
            type="text"
            style={{ ...styles.input, minWidth: "40px" }}
            placeholder="25"
            onChange={(e) => handleChange("agreementYear", e.target.value)}
          />{" "}
          between COMPANY <span style={styles.bold}>AXPER LLC</span>, (located
          at 1673 Reed Dr, Krum, TX, 76249) and OWNER-OPERATOR,{" "}
          <input
            type="text"
            style={{ ...styles.input, minWidth: "200px" }}
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
            style={{ ...styles.input, minWidth: "300px" }}
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
          pick-up). The Owner-Operator must provide the Company with his actual
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
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement1Signature", e.target.value)
            }
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
            onChange={(e) => handleChange("paymentEmail", e.target.value)}
          />
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement2Signature", e.target.value)
            }
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
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement3Signature", e.target.value)
            }
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
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement4Signature", e.target.value)
            }
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
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement5Signature", e.target.value)
            }
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
          }}
        >
          On the BOL, the shipper must also include the phrase "Not driver's
          fault."
        </div>

        <div style={styles.signatureRow}>
          <span style={styles.signatureLabel}>Signature</span>
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement6Signature", e.target.value)
            }
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
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement7Signature", e.target.value)
            }
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
          <input
            type="text"
            style={styles.signatureInput}
            placeholder="William Thomas"
            onChange={(e) =>
              handleChange("agreement8Signature", e.target.value)
            }
          />
        </div>

        <div style={styles.pageNumber}>16</div>
      </div>
    </div>
  );
}
