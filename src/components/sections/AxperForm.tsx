import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { AutoSaveStatus } from "@/components/ui/AutoSaveStatus";
import { SignButton } from "@/components/ui/SignButton";

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
    //   backgroundColor: "#f5f5f5",
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
      alignItems: "center",
      marginTop: "40px",
      gap: "15px",
      justifyContent: "center",
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
      <AutoSaveStatus />
      
      {/* Page 1 - Owner & Driver Information */}
    

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
            <SignButton
              value={formData.signature1}
              onChange={(value) => handleChange("signature1", value)}
              label="Signature"
              placeholder="Click to add signature"
              fieldName="signature1"
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
            <SignButton
              value={formData.signature2}
              onChange={(value) => handleChange("signature2", value)}
              label="Signature"
              placeholder="Click to add signature"
              fieldName="signature2"
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
