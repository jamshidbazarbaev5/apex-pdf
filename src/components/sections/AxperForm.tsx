export default function AxperForm() {
  const styles = {
    container: {
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Times New Roman', serif"
    },
    page: {
      maxWidth: '850px',
      margin: '0 auto 40px',
      background: 'white',
      padding: '60px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    logo: {
      fontSize: '52px',
      fontWeight: '300',
      letterSpacing: '3px',
      color: '#333'
    },
    sectionTitle: {
      color: '#2563eb',
      fontWeight: 'bold',
      fontSize: '14px',
      marginBottom: '30px',
      letterSpacing: '0.5px'
    },
    formGroup: {
      marginBottom: '18px'
    },
    label: {
      display: 'block',
      fontSize: '11px',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '4px'
    },
    value: {
      fontSize: '13px',
      color: '#333',
      padding: '8px 0',
      borderBottom: '1px solid #000'
    },
    checkboxContainer: {
      marginTop: '40px'
    },
    checkboxItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '13px'
    },
    checkbox: {
      width: '16px',
      height: '16px',
      border: '1px solid #000',
      marginRight: '10px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    checkboxChecked: {
      fontWeight: 'bold',
      fontSize: '12px'
    },
    pageNumber: {
      textAlign: 'center',
      marginTop: '50px',
      fontSize: '13px',
      color: '#666'
    }
  };

  return (
    <div style={styles.container}>
      {/* Page 3 - Company Information */}
      <div style={styles.page}>
        {/* <div style={styles.header}>
          <div style={styles.logo}>Axper</div>
        </div> */}
        
        <div style={styles.sectionTitle}>COMPANY INFORMATION</div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>COMPANY NAME/DBA:</label>
          <div style={styles.value}>Expect Xpress</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>COMPANY'S REGISTERED ADDRESS:</label>
          <div style={styles.value}>50 Agnes St Ste 205</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>CITY, STATE AND ZIP-CODE:</label>
          <div style={styles.value}>Providence, Rhode Island 02909</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>PHONE NUMBER:</label>
          <div style={styles.value}>8570280780</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>EMAIL:</label>
          <div style={styles.value}>Admin@expectxpress.com</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>WEB SITE:</label>
          <div style={styles.value}>Www.expectxpress.com</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>MC NUMBER:</label>
          <div style={styles.value}>1701264</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>DOT NUMBER:</label>
          <div style={styles.value}>4351041</div>
        </div>
        
        {/* <div style={styles.pageNumber}>3</div> */}
      </div>

      {/* Page 4 - Owner & Driver Information */}
      <div style={styles.page}>
       
        
        <div style={styles.sectionTitle}>OWNER INFORMATION</div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>FIRST NAME:</label>
          <div style={styles.value}>William</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>LAST NAME:</label>
          <div style={styles.value}>Thomas</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>DATE OF BIRTH:</label>
          <div style={styles.value}>08/17/1989</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>ADDRESS:</label>
          <div style={styles.value}>166 Valley St 6M411</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>CITY:</label>
          <div style={styles.value}>Providence</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>STATE:</label>
          <div style={styles.value}>Rhode Island</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>ZIP CODE:</label>
          <div style={styles.value}>02909</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>CELL PHONE:</label>
          <div style={styles.value}>8570280780</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>EMERGENCY NUMBER/NAME:</label>
          <div style={styles.value}>4014061175</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>EMAIL:</label>
          <div style={styles.value}>Will@expectxpress.com</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>DRIVER'S LICENSE NUMBER:</label>
          <div style={styles.value}>S82769010</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>STATE:</label>
          <div style={styles.value}>Massachusetts</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>CLASS:</label>
          <div style={styles.value}>D</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>EXPIRATION DATE:</label>
          <div style={styles.value}>08/17/2026</div>
        </div>
        
        <div style={{...styles.sectionTitle, marginTop: '50px'}}>DRIVER INFORMATION</div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>FIRST NAME:</label>
          <div style={styles.value}>William</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>LAST NAME:</label>
          <div style={styles.value}>Thomas</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>DATE OF BIRTH:</label>
          <div style={styles.value}>08/17/1989</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>ADDRESS:</label>
          <div style={styles.value}>166 Valley St 6M411</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>CITY:</label>
          <div style={styles.value}>Providence</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>STATE:</label>
          <div style={styles.value}>Rhode Island</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>ZIP CODE:</label>
          <div style={styles.value}>02909</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>CELL PHONE:</label>
          <div style={styles.value}>8570280780</div>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>EMERGENCY NUMBER/NAME:</label>
          <div style={styles.value}>4014061175</div>
        </div>
        
        <div style={styles.checkboxContainer}>
          <div style={styles.checkboxItem}>
            <div style={styles.checkbox}>
              <span style={styles.checkboxChecked}>✓</span>
            </div>
            <span>US CITIZEN</span>
          </div>
          
          <div style={styles.checkboxItem}>
            <div style={styles.checkbox}></div>
            <span>GREEN CARD</span>
          </div>
          
          <div style={styles.checkboxItem}>
            <div style={styles.checkbox}></div>
            <span>TWIC or TSA</span>
          </div>
          
          <div style={styles.checkboxItem}>
            <div style={styles.checkbox}></div>
            <span>HAZMAT CERTIFIED</span>
          </div>
        </div>
        
        {/* <div style={styles.pageNumber}>4</div> */}
      </div>
    </div>
  );
}