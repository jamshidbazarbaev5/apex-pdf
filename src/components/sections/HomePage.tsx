import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const pages = [
    {
      title: 'Company Information',
      description: 'Company and owner details',
      path: '/axper'
    },
    {
      title: 'General Information',
      description: 'General guidelines and procedures',
      path: '/general-info'
    },
    {
      title: 'Requirements',
      description: 'Basic and vehicle requirements',
      path: '/requirements'
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: "'Times New Roman', serif"
    },
    content: {
      maxWidth: '900px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center' as const,
      color: 'white',
      marginBottom: '60px'
    },
    logo: {
      fontSize: '64px',
      fontWeight: '300',
      letterSpacing: '4px',
      marginBottom: '20px'
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: '300',
      letterSpacing: '1px'
    },
    pagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px'
    },
    card: {
      background: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      border: 'none',
      textAlign: 'left' as const
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#2563eb',
      marginBottom: '15px'
    },
    cardDescription: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    cardLink: {
      display: 'inline-block',
      color: '#2563eb',
      fontSize: '14px',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.logo}>AXPER</div>
          <div style={styles.subtitle}>Documentation Portal</div>
        </div>

        <div style={styles.pagesGrid}>
          {pages.map((page, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => navigate(page.path)}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-10px)';
                target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            >
              <div style={styles.cardTitle}>{page.title}</div>
              <div style={styles.cardDescription}>{page.description}</div>
              <a style={styles.cardLink}>View Page →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
