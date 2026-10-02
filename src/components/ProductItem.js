
export default function ProductItem({ product }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff'
    }}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{
          height: '150px',
          objectFit: 'contain',
          marginBottom: '12px'
        }} 
      />
      <div>
        <h3 style={{ 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          marginBottom: '8px',
          color: '#1a202c'
        }}>
          {product.title}
        </h3>
        <p style={{ 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          color: '#2b6cb0' 
        }}>
          ${product.price}
        </p>
      </div>
    </div>
  );
}