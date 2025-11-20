import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";

export default function AxperForm() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (field: string, value: string | boolean) => {
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
    },
    sectionTitle: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: "16px",
      marginBottom: "35px",
      letterSpacing: "1px",
      textAlign: "center" as const,
    },
    formRow: {
      display: "flex",
      alignItems: "flex-end",
      marginBottom: "20px",
      gap: "15px",
    },
    label: {
      fontSize: "16px",
      fontWeight: "700" as const,
      color: "#000",
      minWidth: "240px",
      flexShrink: 0,
      paddingBottom: "5px",
      lineHeight: "1.4",
    },
    input: {
      width: "100%",
      border: "none",
      borderBottom: "1.5px solid #000",
      outline: "none",
      fontSize: "16px",
      color: "#000",
      padding: "6px 0",
      background: "transparent",
      fontFamily: "'Times New Roman', Times, serif",
      fontWeight: "400" as const,
      WebkitFontSmoothing: "antialiased" as const,
      MozOsxFontSmoothing: "grayscale" as const,
    },
    checkboxSection: {
      marginTop: "50px",
      marginLeft: "255px",
    },
    checkboxItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
    },
    checkboxInput: {
      width: "18px",
      height: "18px",
      border: "2px solid #000",
      marginRight: "12px",
      cursor: "pointer",
      accentColor: "#000",
    },
    checkboxText: {
      fontSize: "16px",
      fontWeight: "700" as const,
      color: "#000",
      lineHeight: "1.4",
    },
    tableContainer: {
      marginTop: "40px",
      marginBottom: "40px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
      marginBottom: "40px",
    },
    tableCell: {
      border: "2px solid #000",
      padding: "12px",
      fontSize: "16px",
      fontWeight: "700" as const,
      textAlign: "center" as const,
      lineHeight: "1.4",
    },
    tableInput: {
      width: "100%",
      border: "none",
      outline: "none",
      fontSize: "16px",
      textAlign: "center" as const,
      fontFamily: "'Times New Roman', Times, serif",
      background: "transparent",
      padding: "8px",
      fontWeight: "400" as const,
    },
    checkboxList: {
      marginTop: "30px",
    },
    documentText: {
      fontSize: "16px",
      lineHeight: "1.8",
      textAlign: "justify" as const,
      marginBottom: "20px",
      color: "#000",
      fontWeight: "400" as const,
    },
    documentTitle: {
      color: "#2563eb",
      fontWeight: "700" as const,
      fontSize: "16px",
      marginBottom: "25px",
      marginTop: "40px",
      letterSpacing: "0.5px",
      textAlign: "center" as const,
    },
    bulletList: {
      marginLeft: "40px",
      marginBottom: "20px",
    },
    bulletItem: {
      fontSize: "16px",
      lineHeight: "1.8",
      marginBottom: "12px",
      color: "#000",
      fontWeight: "400" as const,
    },
    signatureRow: {
      display: "flex",
      alignItems: "flex-end",
      marginTop: "40px",
      gap: "40px",
    },
    signatureField: {
      flex: 1,
    },
    dateField: {
      minWidth: "200px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Page 1 - Owner & Driver Information */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>OWNER INFORMATION</div>

        <div style={styles.formRow}>
          <div style={styles.label}>FIRST NAME:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerFirstName}
            onChange={(e) => handleChange("ownerFirstName", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>LAST NAME:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerLastName}
            onChange={(e) => handleChange("ownerLastName", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>DATE OF BIRTH:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerDateOfBirth}
            onChange={(e) => handleChange("ownerDateOfBirth", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>ADDRESS:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerAddress}
            onChange={(e) => handleChange("ownerAddress", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>CITY:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerCity}
            onChange={(e) => handleChange("ownerCity", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>STATE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerState}
            onChange={(e) => handleChange("ownerState", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>ZIP CODE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerZipCode}
            onChange={(e) => handleChange("ownerZipCode", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>CELL PHONE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerCellPhone}
            onChange={(e) => handleChange("ownerCellPhone", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>EMERGENCY NUMBER/NAME:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerEmergencyNumber}
            onChange={(e) =>
              handleChange("ownerEmergencyNumber", e.target.value)
            }
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>EMAIL:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerEmail}
            onChange={(e) => handleChange("ownerEmail", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>DRIVER'S LICENSE NUMBER:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerLicenseNumber}
            onChange={(e) => handleChange("ownerLicenseNumber", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>STATE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerLicenseState}
            onChange={(e) => handleChange("ownerLicenseState", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>CLASS:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerLicenseClass}
            onChange={(e) => handleChange("ownerLicenseClass", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>EXPIRATION DATE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.ownerExpirationDate}
            onChange={(e) =>
              handleChange("ownerExpirationDate", e.target.value)
            }
          />
        </div>

        <div style={{ ...styles.sectionTitle, marginTop: "60px" }}>
          DRIVER INFORMATION
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>FIRST NAME:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverFirstName}
            onChange={(e) => handleChange("driverFirstName", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>LAST NAME:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverLastName}
            onChange={(e) => handleChange("driverLastName", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>DATE OF BIRTH:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverDateOfBirth}
            onChange={(e) => handleChange("driverDateOfBirth", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>ADDRESS:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverAddress}
            onChange={(e) => handleChange("driverAddress", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>CITY:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverCity}
            onChange={(e) => handleChange("driverCity", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>STATE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverState}
            onChange={(e) => handleChange("driverState", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>ZIP CODE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverZipCode}
            onChange={(e) => handleChange("driverZipCode", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>CELL PHONE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverCellPhone}
            onChange={(e) => handleChange("driverCellPhone", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>EMERGENCY NUMBER/NAME:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.driverEmergencyNumber}
            onChange={(e) =>
              handleChange("driverEmergencyNumber", e.target.value)
            }
          />
        </div>

        <div style={styles.checkboxSection}>
          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.driverUsCitizen}
              onChange={(e) =>
                handleChange("driverUsCitizen", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>US CITIZEN</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.driverGreenCard}
              onChange={(e) =>
                handleChange("driverGreenCard", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>GREEN CARD</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.driverTwicTsa}
              onChange={(e) => handleChange("driverTwicTsa", e.target.checked)}
            />
            <span style={styles.checkboxText}>TWIC or TSA</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.driverHazmatCertified}
              onChange={(e) =>
                handleChange("driverHazmatCertified", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>HAZMAT CERTIFIED</span>
          </div>
        </div>
      </div>

      {/* Page 2 - Company Information */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>COMPANY INFORMATION</div>

        <div style={styles.formRow}>
          <div style={styles.label}>COMPANY NAME/DBA:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>COMPANY'S REGISTERED ADDRESS:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyRegisteredAddress}
            onChange={(e) =>
              handleChange("companyRegisteredAddress", e.target.value)
            }
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>CITY, STATE AND ZIP-CODE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyCityStateZip}
            onChange={(e) =>
              handleChange("companyCityStateZip", e.target.value)
            }
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>PHONE NUMBER:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyPhoneNumber}
            onChange={(e) => handleChange("companyPhoneNumber", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>EMAIL:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyEmail}
            onChange={(e) => handleChange("companyEmail", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>WEB-SITE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyWebsite}
            onChange={(e) => handleChange("companyWebsite", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>MC NUMBER:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyMcNumber}
            onChange={(e) => handleChange("companyMcNumber", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>DOT NUMBER:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.companyDotNumber}
            onChange={(e) => handleChange("companyDotNumber", e.target.value)}
          />
        </div>
      </div>

      {/* Page 3 - Vehicle Information */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>VEHICLE INFORMATION:</div>

        <div style={styles.formRow}>
          <div style={styles.label}>MAKE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.vehicleMake}
            onChange={(e) => handleChange("vehicleMake", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>MODEL:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.vehicleModel}
            onChange={(e) => handleChange("vehicleModel", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>YEAR:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.vehicleYear}
            onChange={(e) => handleChange("vehicleYear", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>PLATE NUMBER:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.vehiclePlateNumber}
            onChange={(e) => handleChange("vehiclePlateNumber", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>STATE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.vehicleState}
            onChange={(e) => handleChange("vehicleState", e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>EXPIRATION DATE:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.vehicleExpirationDate}
            onChange={(e) =>
              handleChange("vehicleExpirationDate", e.target.value)
            }
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.label}>VIN NUMBER:</div>
          <input
            type="text"
            style={styles.input}
            value={formData.vehicleVinNumber}
            onChange={(e) => handleChange("vehicleVinNumber", e.target.value)}
          />
        </div>

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableCell}>USEFUL CARGO DIMENSIONS</th>
                <th style={styles.tableCell}>LENGTH (inches)</th>
                <th style={styles.tableCell}>WIDTH (inches)</th>
                <th style={styles.tableCell}>HEIGHT (inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>DOOR OPENING DIMS:</td>
                <td style={styles.tableCell}>
                  <input
                    type="text"
                    style={styles.tableInput}
                    value={formData.vehicleDoorOpeningLength}
                    onChange={(e) =>
                      handleChange("vehicleDoorOpeningLength", e.target.value)
                    }
                  />
                </td>
                <td style={styles.tableCell}>
                  <input
                    type="text"
                    style={styles.tableInput}
                    value={formData.vehicleDoorOpeningWidth}
                    onChange={(e) =>
                      handleChange("vehicleDoorOpeningWidth", e.target.value)
                    }
                  />
                </td>
                <td style={styles.tableCell}>
                  <input
                    type="text"
                    style={styles.tableInput}
                    value={formData.vehicleDoorOpeningHeight}
                    onChange={(e) =>
                      handleChange("vehicleDoorOpeningHeight", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tableCell}>DIMS INSIDE:</td>
                <td style={styles.tableCell}>
                  <input
                    type="text"
                    style={styles.tableInput}
                    value={formData.vehicleDimsInsideLength}
                    onChange={(e) =>
                      handleChange("vehicleDimsInsideLength", e.target.value)
                    }
                  />
                </td>
                <td style={styles.tableCell}>
                  <input
                    type="text"
                    style={styles.tableInput}
                    value={formData.vehicleDimsInsideWidth}
                    onChange={(e) =>
                      handleChange("vehicleDimsInsideWidth", e.target.value)
                    }
                  />
                </td>
                <td style={styles.tableCell}>
                  <input
                    type="text"
                    style={styles.tableInput}
                    value={formData.vehicleDimsInsideHeight}
                    onChange={(e) =>
                      handleChange("vehicleDimsInsideHeight", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tableCell}>PAYLOAD</td>
                <td style={styles.tableCell} colSpan={3}>
                  <input
                    type="text"
                    style={styles.tableInput}
                    value={formData.vehiclePayload}
                    onChange={(e) =>
                      handleChange("vehiclePayload", e.target.value)
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            ...styles.sectionTitle,
            textAlign: "left",
            color: "#2563eb",
            marginBottom: "20px",
          }}
        >
          MARK IF YOU HAVE ONE OF THE FOLLOWING:
        </div>

        <div style={styles.checkboxList}>
          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleAirRide}
              onChange={(e) => handleChange("vehicleAirRide", e.target.checked)}
            />
            <span style={styles.checkboxText}>AIR-RIDE</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleDockHigh}
              onChange={(e) =>
                handleChange("vehicleDockHigh", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>DOCK HIGH</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehiclePalletJack}
              onChange={(e) =>
                handleChange("vehiclePalletJack", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>PALLET JACK</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleRamps}
              onChange={(e) => handleChange("vehicleRamps", e.target.checked)}
            />
            <span style={styles.checkboxText}>RAMPS</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleStraps}
              onChange={(e) => handleChange("vehicleStraps", e.target.checked)}
            />
            <span style={styles.checkboxText}>STRAPS</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleBlankets}
              onChange={(e) =>
                handleChange("vehicleBlankets", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>BLANKETS</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleLiftGate}
              onChange={(e) =>
                handleChange("vehicleLiftGate", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>LIFT-GATE</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleETracks}
              onChange={(e) => handleChange("vehicleETracks", e.target.checked)}
            />
            <span style={styles.checkboxText}>E-TRACKS</span>
          </div>

          <div style={styles.checkboxItem}>
            <input
              type="checkbox"
              style={styles.checkboxInput}
              checked={formData.vehicleLoadBars}
              onChange={(e) =>
                handleChange("vehicleLoadBars", e.target.checked)
              }
            />
            <span style={styles.checkboxText}>LOAD-BARS</span>
          </div>
        </div>
      </div>

      {/* Page 4 - To Be Read and Signed by Applicant */}
      <div style={styles.page}>
        <div style={styles.documentTitle}>
          TO BE READ AND SIGNED BY APPLICANT
        </div>

        <div style={styles.documentText}>
          I permit you to investigate my personal, employment, financial, and
          medical background as well as any pertinent facts in connection with
          making an employment decision. (Generally, medical history questions
          will be asked only after a conditional offer of employment has been
          provided.) I hereby free employers, schools, health care providers,
          and other parties from all liability in responding to queries and
          sharing information regarding my application.
        </div>

        <div style={styles.documentText}>
          In the case of employment, I am aware that providing incorrect or
          misleading information on my application or during interview(s) might
          result in my dismissal. I am also aware that I am obligated to adhere
          to all company rules and laws. I understand that the information I
          provide regarding my current and/or previous employers may be used,
          and that those employer(s) may be contacted, for the purpose of
          investigating my safety performance history as required by 49 CFR
          391.23(d) and for the purpose of determining my eligibility for
          continued employment (e).
        </div>

        <div style={styles.documentText}>
          I understand that I have the right to:
        </div>

        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            Review information provided by previous employers;
          </li>
          <li style={styles.bulletItem}>
            Have errors in the information corrected by previous employers and
            for those previous employers to resend the corrected information to
            the prospective employer;
          </li>
          <li style={styles.bulletItem}>
            Have a rebuttal statement attached to allegedly inaccurate
            information if the previous employer(s) and I cannot agree on the
            accuracy of the information.
          </li>
        </ul>

        <div style={styles.signatureRow}>
          <div style={styles.signatureField}>
            <div style={styles.label}>Signature</div>
            <input
              type="text"
              style={styles.input}
              value={formData.signature1}
              onChange={(e) => handleChange("signature1", e.target.value)}
            />
          </div>
          <div style={styles.dateField}>
            <div style={styles.label}>Date</div>
            <input
              type="text"
              style={styles.input}
              value={formData.date1}
              onChange={(e) => handleChange("date1", e.target.value)}
            />
          </div>
        </div>

        <div style={styles.documentTitle}>
          Accident Waiver and Release of Liability
        </div>

        <div style={styles.documentText}>
          By signing this agreement, I release <strong>AXPER LLC</strong> from
          any duty, including financial obligation, for injuries sustained
          during any company-related transportation activity, regardless of
          whether the injuries were caused by carelessness. By signing here, I
          waive any and all rights to sue <strong>AXPER LLC</strong> for any
          reason. I will also make every effort to adhere to safety measures
          that have been outlined in writing and discussed orally. I will
          request clarification if necessary.
        </div>

        <div style={styles.documentText}>
          I indemnify, keep harmless, and agree not to sue the companies or
          individuals indicated in this paragraph for any and all liabilities or
          claims arising from my involvement in this activity, regardless of
          carelessness. I accept that <strong>AXPER LLC</strong> and its
          directors, officers, volunteers, representatives, and agents are NOT
          liable for any errors, omissions, actions, or failures to act
          committed by any party or organization undertaking a specified
          activity on their behalf. I CERTIFY THAT I HAVE READ THIS DOCUMENT AND
          I FULLY UNDERSTAND ITS CONTENT. I SIGN THIS RELEASE OF LIABILITY
          AGREEMENT OF MY OWN FREE WILL.
        </div>

        <div style={styles.signatureRow}>
          <div style={styles.signatureField}>
            <div style={styles.label}>Signature</div>
            <input
              type="text"
              style={styles.input}
              value={formData.signature2}
              onChange={(e) => handleChange("signature2", e.target.value)}
            />
          </div>
          <div style={styles.dateField}>
            <div style={styles.label}>Date</div>
            <input
              type="text"
              style={styles.input}
              value={formData.date2}
              onChange={(e) => handleChange("date2", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
