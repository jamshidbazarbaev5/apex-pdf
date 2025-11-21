import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';

export default function GeneralInfo() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: '',
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
    sectionTitle: {
      color: '#2563eb',
      fontWeight: 'bold',
      fontSize: '14px',
      marginBottom: '30px',
      letterSpacing: '0.5px'
    },
    subsectionTitle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: '12px',
      marginTop: '25px',
      marginBottom: '15px',
      letterSpacing: '0.5px'
    },
    paragraph: {
      fontSize: '13px',
      color: '#333',
      lineHeight: '1.6',
      marginBottom: '15px',
      textAlign: 'justify' as const
    },
    numberedList: {
      marginLeft: '20px',
      marginBottom: '15px'
    },
    listItem: {
      fontSize: '13px',
      color: '#333',
      lineHeight: '1.6',
      marginBottom: '12px',
      textAlign: 'justify' as const
    },
    nestedList: {
      marginLeft: '40px',
      marginTop: '8px',
      marginBottom: '12px'
    },
    nestedListItem: {
      fontSize: '13px',
      color: '#333',
      lineHeight: '1.5',
      marginBottom: '6px',
      textAlign: 'justify' as const
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
      <AutoSaveStatus />
      {/* Page 1 - General Information */}
      <div style={styles.page}>
        <div style={styles.sectionTitle}>9. GENERAL INFORMATION</div>
        
        <div style={styles.subsectionTitle}>9.1</div>
        <div style={styles.paragraph}>
          You will receive the agreed-upon quantity from the dispatcher when the load is offered to you. When dispatched for a load, verify the quantity sent to you. We're paying for the distance between two area codes. We are charged by the mile, not by the pound. We do not, however, offer you loads that your truck cannot draw. The change in delivery location necessitates a reevaluation of the per-load rate. The difference of less than 20 miles is non-negotiable. THESE NUMBERS CAN BE LOWER DEPENDING ON AREA, TIME OF DAY AND VARIETY OF FACTORS.
        </div>

        <div style={styles.subsectionTitle}>9.2</div>
        <div style={styles.paragraph}>
          Price must be discussed prior to placing a proposal on a load. This includes, but is not limited to: 1) Additional payment for tolls 2) Additional pennies per mile for exceeding your weight limit 3) Limited distance
        </div>

        <div style={styles.subsectionTitle}>9.3</div>
        <div style={styles.paragraph}>
          AXPER LLC will not pay more if the shipper adds additional pallets/skids and the shipment fits in the vehicle. Your earnings are calculated per mile, not per pound; therefore, if the shipment's weight or volume has changed and the vehicle can accommodate it, the unit must accept the shipment. Otherwise, the relationship risks being severed with AXPER LLC
        </div>

        <div style={styles.subsectionTitle}>9.4</div>
        <div style={styles.paragraph}>
          It is prohibited for drivers and proprietors to discuss pricing with shippers or receivers. Any attempt to share driver pay with the shipper or receiver, or to ascertain how much this load was booked for, will result in the immediate termination of the contract.
        </div>

        <div style={styles.subsectionTitle}>9.5</div>
        <div style={styles.paragraph}>
          YOU MUST CHECK IN EVERY MORNING MONDAY-SUNDAY BETWEEN 07:00 am – 09:30 am EASTERN TIME.
        </div>
        <div style={styles.numberedList}>
          <div style={styles.listItem}>
            <strong>1.</strong> You can contact our main office at 940-281-5452 to provide your daily availability and location.
          </div>
          <div style={styles.listItem}>
            <strong>2.</strong> You will also receive an update via text message between 7:00 a.m. and 9:00 a.m.
          </div>
          <div style={styles.listItem}>
            <strong>3.</strong> If you are unavailable on a given day, you are also required to check in and inform dispatch that you are out of service.
          </div>
          <div style={styles.listItem}>
            <strong>4.</strong> If you will be absent for a period of time (two to three days, one week to one month), inform the dispatcher and you will not be required to provide updates during that time.
          </div>
        </div>

        <div style={styles.subsectionTitle}>9.6</div>
        <div style={styles.paragraph}>
          If you work for other companies and receive cargo from them, you must contact our office immediately to be removed from service.
        </div>

        <div style={styles.subsectionTitle}>9.7</div>
        <div style={styles.paragraph}>
          Call the office at 940-281-5452 prior to relocating.
        </div>

        {/* <div style={styles.pageNumber}>9</div> */}
      </div>

      {/* Page 2 - General Information Continued */}
      <div style={styles.page}>
        <div style={styles.subsectionTitle}>9.8</div>
        <div style={styles.paragraph}>
          Once you are available for service, dispatchers will seek out loads for you. If the dispatcher locates a cargo for you, he will contact you to offer it. It is in your best interest to notify the dispatcher as soon as possible if you will accept the cargo. If you accept the proposal, you will be required to reserve yourself for this offer for at least 15 minutes. The dispatcher will notify you if the bid is accepted. He will then text you information regarding pickup and delivery. You must contact the office number or send a text message to confirm receipt of the information i.e. Every AXPER LLC cargo is required to have its location updated every two hours, once per load.
        </div>

        <div style={styles.numberedList}>
          <div style={styles.listItem}>
            <strong>1.</strong> Call for pick-up upon arrival (immediately upon entering the building).
          </div>
          <div style={styles.listItem}>
            <strong>2.</strong> Call when the shipment has been deposited (number of pallets, total weight, BOL number).
          </div>
          <div style={styles.listItem}>
            <strong>3.</strong> Do not leave the shipper until you have contacted the office and the dispatcher has confirmed the pickup details and given the all-clear.
          </div>
          <div style={styles.listItem}>
            <strong>4.</strong> The cargo must be secured.
          </div>
          <div style={styles.listItem}>
            <strong>5.</strong> Call upon arrival for drop-off (immediately upon entering the building).
          </div>
          <div style={styles.listItem}>
            <strong>6.</strong> Call once the shipment has been delivered with POD (first and last name of the person who signed for the shipment).
          </div>
          <div style={styles.listItem}>
            <strong>7.</strong> If you are running late, you must inform the dispatcher as soon as you realize you will be late, not after you have already arrived late.
          </div>
          <div style={styles.listItem}>
            <strong>8.</strong> If the consignor instructs you to hand load/unload the goods, you must contact the office and inform the dispatcher before beginning. To be compensated for labor, the dispatcher must: grant you the broker's approval to complete the task.
          </div>
          <div style={styles.listItem}>
            <strong>9.</strong> If you transport or unload cargo without informing the dispatcher, you will not be compensated for your labor.
          </div>
          <div style={styles.listItem}>
            <strong>10.</strong> Your delivery time is determined by the DISPATCHER, not the SHIPPING COMPANY.
          </div>
          <div style={styles.listItem}>
            <strong>11.</strong> If the shipper informs you that the load has been canceled, you must contact the dispatcher and confirm that this is the case before leaving. If the shipper instructs you to discharge elsewhere, you must contact the dispatcher prior to moving.
          </div>
          <div style={styles.listItem}>
            <strong>12.</strong> NEVER leave any of your belongings at the shipper, including dumping trash, particularly tires, in their dumpsters.
          </div>
          <div style={styles.listItem}>
            <strong>13.</strong> NEVER place anything on top of the loaded pallets and/or crates.
          </div>
        </div>

        <div style={styles.subsectionTitle}>9.9</div>
        <div style={styles.paragraph}>
          If the Fleet Owner/Operator wishes to complete the pick-up/delivery earlier than scheduled, the company must be notified. Otherwise, it may incur penalties for the Fleet Owner/Operator.
        </div>

        <div style={{marginTop: '80px', textAlign: 'right', fontSize: '13px'}}>
          <div>Signature ________________________</div>
        </div>

        {/* <div style={styles.pageNumber}>10</div> */}
      </div>
    </div>
  );
}
