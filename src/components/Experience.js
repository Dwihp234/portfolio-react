const crossExpPoints = [
  {
    title: 'Multi-Company Experience',
    desc: 'Professional journey across mining, manufacturing, and head office operations (Jakarta).',
    icon: 'fa-building'
  },
  {
    title: 'Multi-Site Adaptability',
    desc: 'Adapted to diverse environments, from remote mining sites to corporate headquarters.',
    icon: 'fa-map-marker-alt'
  },
  {
    title: 'Cross-Departmental Roles',
    desc: 'Hands-on roles in Manufacturing, Heavy Equipment, Logistics, Supply Chain Management, and Maintenance Planning.',
    icon: 'fa-sitemap'
  },
  {
    title: 'Process & Team Improvement',
    desc: 'Improved business processes and collaboration with multidisciplinary teams across various companies.',
    icon: 'fa-users-cog'
  }
];

const CrossExperience = () => (
  <section className="cross-experience-section" style={{marginTop: '48px'}}>
    <h2 style={{textAlign: 'center', color: '#2563eb', marginBottom: '12px'}}>Cross-Company, Department, and Site Experience</h2>
    <div style={{display: 'flex', flexWrap: 'nowrap', gap: '28px', justifyContent: 'center', maxWidth: 1400, margin: '0 auto'}}>
      {crossExpPoints.map((item, idx) => (
        <div key={idx} style={{flex: '1 1 0', minWidth: 220, background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,60,114,0.08)', padding: '28px 18px', marginBottom: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{fontSize: '2em', color: '#2563eb', marginBottom: 10}}>
            <i className={`fas ${item.icon}`}></i>
          </div>
          <h3 style={{color: '#23272f', fontWeight: 700, fontSize: '1.08em', marginBottom: 10}}>{item.title}</h3>
          <div style={{color: '#374151', fontSize: '1.04em', lineHeight: 1.6}}>{item.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export { CrossExperience };
export default CrossExperience;