export default function RequirementsInfo() {
  const styles = {
    container: {
      minHeight: '100vh',
      // background: '#f5f5f5',
      padding: '40px 20px',
      fontFamily: "'Times New Roman', serif"
    },
    page: {
      maxWidth: '850px',
      margin: '0 auto 40px',
      background: 'white',
      padding: '60px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center'
    },
    header: {
      textAlign: 'center' as const,
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
    bulletList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    bulletItem: {
      fontSize: '13px',
      color: '#333',
      lineHeight: '1.7',
      marginBottom: '16px',
      textAlign: 'justify' as const,
      paddingLeft: '20px',
      position: 'relative' as const
    },
    bullet: {
      position: 'absolute' as const,
      left: 0,
      top: 0
    },
    pageNumber: {
      textAlign: 'center' as const,
      marginTop: '50px',
      fontSize: '13px',
      color: '#666'
    }
  };

  return (
    <div style={styles.container}>
      {/* Page 1 - Basic Requirements */}
      <div style={styles.page}>
        <div style={styles.header}>
          <div style={styles.logo}>Axper</div>
        </div>

        <div style={styles.sectionTitle}>I. BASIC REQUIREMENTS:</div>
        
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            NEITHER YOU NOR YOUR DRIVER(S) ARE COMPANY EMPLOYEES.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            YOU AND YOUR DRIVER(S) MUST BE AT LEAST 21 YEARS OLD.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            MINIMUM OF 6 MONTHS OVER THE ROAD DRIVING EXPERIENCE FOR ALL CARGO VANS, SPRINTER VANS AND SMALL STRAIGHT BOX TRUCKS (UNDER 10,000 GVW).
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            YOU MUST OWN A CELL PHONE WITH NATIONWIDE COVERAGE AND KNOW HOW TO OPERATE IT.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            YOU AND YOUR DRIVERS MUST BE ABLE TO ACCEPT MACRO POINT (OR INSTALL THE APPLICATION THAT THE CLIENT REQUIRES FOR TRACKING PURPOSES WHILE HIS LOAD IS IN YOUR VEHICLE) AT THE REQUEST OF THE DISPATCHER.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            YOU MUST OWN A GPS SYSTEM AND KNOW HOW TO USE IT.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            NEITHER YOU NOR YOUR DRIVER(S) MAY HAVE HAD A DUI WITHIN THE PAST DECADE.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            YOU MUST POSSESS A VALID DRIVER'S LICENSE ISSUED BY YOUR STATE OF RESIDENCE.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            YOU MUST PROVIDE AN INSURANCE CERTIFICATE LISTING COMPANY AS AN ADDITIONAL INSURED.
          </li>
        </ul>

        {/* <div style={styles.pageNumber}>1</div> */}
      </div>

      {/* Page 2 - Vehicle Requirements */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>II. VEHICLE REQUIREMENTS:</div>
        
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            ALL VEHICLES MUST BE YEAR 2014 OR NEWER.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            VEHICLES WITH PAPER PLATES ARE NOT ACCEPTED.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            MUST HAVE "FOR HIRE" OR "COMMERCIAL" PLATE.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            TEMPORARY REGISTRATIONS ARE NOT ACCEPTED.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            ALL DECALS MUST BE REMOVED UNLESS THE COMPANY IS UNDER YOUR AUTHORITY.
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bullet}>●</span>
            IF YOU CHANGE THE VEHICLE YOU ARE SET UP WITH, YOU MUST LET THE COMPANY KNOWS PRIOR TO PUTTING THE VEHICLE ON THE ROAD. YOU MUST SEND NEW REGISTRATION AND INSURANCE FOR THAT VEHICLE.
          </li>
        </ul>

        {/* <div style={styles.pageNumber}>2</div> */}
      </div>
    </div>
  );
}
